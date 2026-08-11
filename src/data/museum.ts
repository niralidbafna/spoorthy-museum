export type Exhibit = {
  id: string;
  room: number;
  title: string;
  description?: string;
  image?: string;
  video?: string;
  poster?: string;
  caption?: string;
  date?: string;
};

export type Room = {
  id: number;
  title: string;
  subtitle: string;
  summary: string;
  exhibits: Exhibit[];
};

export const rooms: Room[] = [
  {
    id: 1,
    title: 'The Beginning 🌒',
    subtitle: 'Mercedes-Benz · August 2023 ✧',
    summary:
      'Two people walked into the same company. Neither knew they were about to meet their best friend.',
    exhibits: [
      {
        id: '01-01',
        room: 1,
        title: 'First Day 🚀',
        image: '/images/beginning/1.jpeg',
        caption:
          'The first moment our paths crossed at Sheraton, and we adopted you. 🌚',
      },
      {
        id: '01-02',
        room: 1,
        title: 'Emcees ✨',
        image: '/images/beginning/2.jpg',
        caption: 'What a confidence we had! ⭐',
      },
      {
        id: '01-03',
        room: 1,
        title: 'India 🇮🇳',
        image: '/images/beginning/4.jpg',
        caption: 'Orange, white, green. ✦',
      },
      {
        id: '01-04',
        room: 1,
        title: 'First Outing 🌟',
        image: '/images/beginning/6.jpg',
        caption: 'Crazzyyyy dayyyy 💫',
      },
      {
        id: '01-05',
        room: 1,
        title: 'One more photo, please 📸',
        image: '/images/beginning/8.jpg',
        caption: 'Took a lifetime subscription to be your photographer. ✨',
      },
      {
        id: '01-06',
        room: 1,
        title: 'First Week ☕',
        image: '/images/beginning/9.jpg',
        caption: 'Couch. Trainings. Soup. Coffee. Laughs. And a lot of work. 🌙',
      },
      {
        id: '01-07',
        room: 1,
        title: 'Seriously working 💻',
        video: '/images/beginning/v2.mp4',
        caption: 'Haha, not really. ✧',
      },
      {
        id: '01-08',
        room: 1,
        title: 'Remember anything? 🌌',
        video: '/images/beginning/v3.mp4',
        caption: 'The best days of our life. 💫',
      },
      {
        id: '01-09',
        room: 1,
        title: 'Lifetime videographer also 🎥',
        video: '/images/beginning/v5.mp4',
        caption: 'Why are you shyyy? 🌚',
      },
    ],
  },

  {
    id: 2,
    title: 'The Little Things ✨',
    subtitle: 'The random moments. The conversations. ⋆',
    summary:
      'The small details that made a big difference.',
    exhibits: [
      {
        id: '02-01',
        room: 2,
        title: 'Kallekai Parse 🌶️',
        image: '/images/little-things/1.jpg',
        caption: 'Such a kid you are! ✨',
      },
      {
        id: '02-02',
        room: 2,
        title: 'Christmas 2023 🎄',
        image: '/images/little-things/2.jpg',
        caption: 'Happy happy happpyyyy... ⭐',
      },
      {
        id: '02-03',
        room: 2,
        title: 'Why need a man? 💐',
        image: '/images/little-things/3.jpg',
        caption: 'When my best friend can get me flowers! ♡',
      },
      {
        id: '02-04',
        room: 2,
        title: 'Picnic Day! 🧺',
        image: '/images/little-things/4.jpg',
        caption: 'Who is the best artist? 🎨',
      },
      {
        id: '02-05',
        room: 2,
        title: 'Excited for new year? 🎆',
        image: '/images/little-things/5.jpg',
        caption: 'Came back with trauma, haha. 🌚',
      },
      {
        id: '02-06',
        room: 2,
        title: 'Metro Life 🚇',
        image: '/images/little-things/6.jpeg',
        caption: 'Miss those days! 🌙',
      },
      {
        id: '02-07',
        room: 2,
        title: 'Black day? 🖤',
        image: '/images/little-things/7.jpg',
        caption: "Sorry, Valentine's day is not for us, haha. ✧",
      },
      {
        id: '02-08',
        room: 2,
        title: 'Comfort 🫂',
        image: '/images/little-things/8.jpg',
        caption: 'Cutiesss! 💫',
      },
      {
        id: '02-09',
        room: 2,
        title: 'Got a new friend or new tattoo? 🪐',
        image: '/images/little-things/10.jpg',
        caption: 'Both!!! ✨',
      },
    ],
  },

  {
    id: 3,
    title: 'Adventures 🪐',
    subtitle: 'Trips. Food. Celebrations. Places we’ve been. ✦',
    summary:
      'A collection of journeys and the places that became stories we tell again and again.',
    exhibits: [
      {
        id: '03-01',
        room: 3,
        title: 'First group trip 🚌',
        image: '/images/adventures/1.jpg',
        caption: 'Best until now. 🌟',
      },
      {
        id: '03-02',
        room: 3,
        title: "Who's this cutie pie? 🥹",
        image: '/images/adventures/2.jpg',
        caption: 'My best friend, of course. ♡',
      },
      {
        id: '03-03',
        room: 3,
        title: 'Race? 🏎️',
        image: '/images/adventures/3.jpg',
        caption: 'See you at the track. 🏁',
      },
      {
        id: '03-04',
        room: 3,
        title: 'Swim? 🏊',
        image: '/images/adventures/4.jpg',
        caption: 'See you at an island!!! 🌊',
      },
      {
        id: '03-05',
        room: 3,
        title: 'Kayak? 🛶',
        image: '/images/adventures/5.jpg',
        caption: 'See you at a river! Always ready for an adventure. ✨',
      },
      {
        id: '03-06',
        room: 3,
        title: 'Unplanned days are ✨',
        image: '/images/adventures/6.jpg',
        caption: 'THE BESTTTTTTTT!!! 💫',
      },
      {
        id: '03-07',
        room: 3,
        title: 'Golden Hour 🌅',
        image: '/images/adventures/7.jpg',
        caption: 'Always the sunset buddies! 🌞',
      },
      {
        id: '03-08',
        room: 3,
        title: 'First Group Trip 🎥',
        video: '/images/adventures/v1.mp4',
        caption: 'And hell lot of funnnnn!!! 🚀',
      },
      {
        id: '03-09',
        room: 3,
        title: 'The most scariest ride 🎢',
        video: '/images/adventures/v2.mp4',
        caption: 'Adarsh has been on. (Overacting raja) 😂',
      },
    ],
  },

  {
    id: 4,
    title: 'Fun Moments 💫',
    subtitle:
      'Ridiculous memories, inside jokes, and the things that make us laugh. ✧',
    summary:
      'A chapter of moments that belong only to our friendship and our fun language.',
    exhibits: [
      {
        id: '04-01',
        room: 4,
        title: 'Dancing? 💃',
        image: '/images/fun-moments/1.jpg',
        caption: 'Maybe, yeah! ✨',
      },
      {
        id: '04-02',
        room: 4,
        title: "Who's with Nirali? 🎣",
        image: '/images/fun-moments/2.jpg',
        caption: 'Fisherman friend. 🌊',
      },
      {
        id: '04-03',
        room: 4,
        title: 'Just like the sticker 🧳',
        image: '/images/fun-moments/3.jpg',
        caption: 'Bags packed! 🚀',
      },
      {
        id: '04-04',
        room: 4,
        title: 'Working? 💻',
        image: '/images/fun-moments/4.jpg',
        caption:
          'Spoilt the vibe of park, haha. People literally got up and went. 🌚',
      },
      {
        id: '04-05',
        room: 4,
        title: 'Hey Princess! 👑',
        image: '/images/fun-moments/5.jpg',
        caption: 'Hey Boxer! 🥊',
      },
      {
        id: '04-06',
        room: 4,
        title: 'Hog ninthko, photo thegithini 📸',
        image: '/images/fun-moments/6.jpg',
        caption:
          'Lifetime memory of going to a circus for the first time. 🎪',
      },
      {
        id: '04-07',
        room: 4,
        title: 'Our Best Party, Ever!!! 🎉',
        image: '/images/fun-moments/7.jpg',
        caption: 'Cannot even explain in words. 💫',
      },
      {
        id: '04-08',
        room: 4,
        title: 'Most practised reel 🎬',
        video: '/images/fun-moments/v1.mp4',
        caption: 'One crazy night! (Download and watch) 🌙',
      },
      {
        id: '04-09',
        room: 4,
        title: 'Goa Nights 🌴✨',
        video: '/images/fun-moments/v2.mp4',
        caption: 'Music, madness, and one unforgettable night in Goa. 🌊🎶',
      },
    ],
  },

  {
    id: 5,
    title: 'Proud Moments 🌟',
    subtitle:
      'Milestones, achievements, and the moments that made us proud of each other. ✦',
    summary:
      'A reflection of how far we have come together and the years that shaped us.',
    exhibits: [
      {
        id: '05-01',
        room: 5,
        title: 'Aura Bot 🤖',
        image: '/images/proud-moments/1.jpg',
        caption: 'Representing India at a global level. So proud of you! 🌟',
      },
      {
        id: '05-02',
        room: 5,
        title: 'Voted Winners 🏆',
        image: '/images/proud-moments/2.jpg',
        caption: 'Happy feeling to see the crowd vote for us! ✨',
      },
      {
        id: '05-03',
        room: 5,
        title: 'Smells like.... 🌹',
        image: '/images/proud-moments/3.jpg',
        caption: 'Winner! 🏆',
      },
      {
        id: '05-04',
        room: 5,
        title: 'The smile says it all 😊',
        image: '/images/proud-moments/4.jpg',
        caption: 'Resume Screening. ✧',
      },
      {
        id: '05-05',
        room: 5,
        title: 'Hard work makes the dream work 💻',
        image: '/images/proud-moments/5.jpg',
        caption: 'The most satisfying days at Benz! ⭐',
      },
      {
        id: '05-06',
        room: 5,
        title: 'Late night testing 🌙',
        image: '/images/proud-moments/6.jpg',
        caption: "With a smile, because it's coding! 💫",
      },
    ],
   },
   {
        id: 6,
        title: 'Games 🎲',
        subtitle:
            'The games, friendly competitions, and little moments where winning was never really the point. ✦',
        summary:
            'From strategy and mystery to sports and chaos, these are the games that became memories.',
        exhibits: [
            {
            id: '06-01',
            room: 6,
            title: 'Cluedo 🕵️',
            image: '/images/games/1.jpg',
            caption: 'Suspicious looks, wild accusations, and absolutely no trust. 🔍',
            },
            {
            id: '06-02',
            room: 6,
            title: 'Catan 🏝️',
            image: '/images/games/2.jpg',
            caption: 'Trading resources, making alliances, and definitely not being competitive. 🎲',
            },
            {
            id: '06-03',
            room: 6,
            title: 'Strike 🎳',
            image: '/images/games/3.jpg',
            caption: 'A little competition never hurt anyone. Until someone took it way too seriously. 😌',
            },
            {
            id: '06-04',
            room: 6,
            title: 'Badminton 🏸',
            video: '/images/games/v1.mp4',
            caption: 'Smashes, rallies, and the kind of competition that makes everything more fun. ✨',
            },
            {
            id: '06-05',
            room: 6,
            title: 'Bowling 🎳',
            video: '/images/games/v2.mp4',
            caption: 'A little luck, a lot of strikes, and way too much excitement! 🎳✨',
            },
            {
            id: '06-06',
            room: 6,
            title: 'Air Hockey 🏒',
            video: '/images/games/v3.mp4',
            caption: 'Fast hands, fierce competition, and absolutely no mercy. 😌✨',
            },
            {
            id: '06-07',
            room: 6,
            title: 'Mafia 🕵️',
            video: '/images/games/v4.mp4',
            caption: 'Bluffs, betrayals, suspicious looks, and absolutely no one to trust. 😈✨',
            },
        ],
    },

    {
            id: 7,
            title: 'A Letter to Spoorthy 🌙',
            subtitle: 'The emotional ending. ♡',
            summary:
            'A quiet final chapter where words become the most meaningful memory of all.',
            exhibits: [
            {
                id: '07-01',
                room: 7,
                title: 'The Letter 💌',
                description:
                `Dear Spoorthy,\n

        Three years ago, I met you at Mercedes. I had no idea that an ordinary first day at a company would quietly become the beginning of one of the most beautiful friendships of my life.

        Somewhere between the conversations, the laughter, the random little moments, and the countless memories we made, you became a part of my universe. A tiny constellation of moments that somehow makes sense when I look at them together - all the silly ones, the quiet ones, and the ones I wish I could relive forever.

        We have shared laughter, quiet moments, chaos, comfort, and memories that feel like a little universe made just for us. You became someone I trust, admire, and love in a way I never expected when we first met.

        Thank you for being you. For every conversation, every late-night message, every laugh, every little adventure, and every ordinary moment that somehow became extraordinary just because it was ours.

        If our friendship were a universe, I think I'd never want to stop exploring it, because somehow, there always seems to be another memory waiting to be made, another story waiting to unfold, another little star waiting to find its place.

        So here's to everything we've been, everything we are, and everything that's still waiting for us somewhere among the stars.

        Some friendships are found.

        Ours feels a little more like it was written in the stars. ✨

        Love,
        Nirali`,
    
      },
    ],
  },
];