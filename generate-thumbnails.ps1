$imagesPath = Join-Path $PSScriptRoot "public/images"

# Find every MP4 recursively
$videos = Get-ChildItem -Path $imagesPath -Filter "*.mp4" -File -Recurse

if ($videos.Count -eq 0) {
    Write-Host "No MP4 videos found in public/images"
    exit
}

Write-Host "Found $($videos.Count) videos."
Write-Host ""

foreach ($video in $videos) {

    # Create thumbnails folder beside the video
    $thumbnailFolder = Join-Path $video.DirectoryName "thumbnails"

    if (!(Test-Path $thumbnailFolder)) {
        New-Item -ItemType Directory -Path $thumbnailFolder | Out-Null
    }

    # Thumbnail has same filename as video
    $thumbnailPath = Join-Path `
        $thumbnailFolder `
        ($video.BaseName + ".jpg")

    Write-Host "Creating thumbnail: $($video.Name)"

    # Extract frame around 1 second
    ffmpeg `
        -ss 00:00:01 `
        -i $video.FullName `
        -frames:v 1 `
        -q:v 2 `
        -y `
        $thumbnailPath
}

Write-Host ""
Write-Host "Done! ✨"