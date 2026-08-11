'use client';

import { FormEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function MuseumPassword() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [wrongAttempt, setWrongAttempt] = useState(false);

  const wrongMessages = [
    "Hmm... you're in the wrong universe. 👀",
    "That constellation doesn't exist here. 🌚",
    "Nice try, astronaut. 🚀",
    "The stars say... absolutely not. ✨",
    "Access denied by the universe. 🌌",
    "That wasn't the secret. Try again, explorer. 🪐",
    "The universe doesn't recognize you... yet. 👀",
    "Wrong coordinates, astronaut. 🚀",
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!password.trim() || loading) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/unlock', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        window.location.href = '/';
        return;
      }

      const message =
        wrongMessages[
          Math.floor(Math.random() * wrongMessages.length)
        ];

      setWrongAttempt(true);
      setError(message);
      setPassword('');

      setTimeout(() => {
        setWrongAttempt(false);
      }, 500);
    } catch (error) {
      console.error('Unlock error:', error);

      setError(
        'Something went wrong somewhere in the universe. 🌌'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-dark">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: 'easeOut',
        }}
        className="w-full max-w-md"
      >
        {/* Universe symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="mb-8 text-center text-5xl"
        >
          🌌
        </motion.div>

        {/* Heading */}
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-muted">
            WELCOME TO
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Our Universe
          </h1>

          <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-muted">
            Some memories are meant to stay between the stars. ✨
          </p>
        </div>

        {/* Password form */}
        <motion.form
          onSubmit={handleSubmit}
          className="mt-10"
          animate={
            wrongAttempt
              ? {
                  x: [0, -8, 8, -6, 6, 0],
                }
              : {
                  x: 0,
                }
          }
          transition={{
            duration: 0.4,
          }}
        >
          <label
            htmlFor="password"
            className="mb-3 block text-[10px] uppercase tracking-[0.3em] text-muted"
          >
            🔐 Enter secret
          </label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
            placeholder="••••••••••••"
            autoFocus
            disabled={loading}
            className="w-full border border-dark/20 bg-surface px-5 py-4 text-center text-lg tracking-[0.3em] outline-none transition-all duration-200 placeholder:text-muted/40 focus:border-dark/50 focus:ring-1 focus:ring-dark/10 disabled:cursor-not-allowed disabled:opacity-60"
          />

          <motion.button
            type="submit"
            disabled={loading || !password.trim()}
            whileHover={{
              scale: loading ? 1 : 1.02,
            }}
            whileTap={{
              scale: loading ? 1 : 0.98,
            }}
            className="mt-4 w-full border border-dark bg-dark px-5 py-4 text-[10px] uppercase tracking-[0.3em] text-background transition-all duration-200 hover:bg-dark/90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {loading ? 'Searching the stars...' : 'Enter ✨'}
          </motion.button>
        </motion.form>

        {/* Error message */}
        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              key={error}
              initial={{
                opacity: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -5,
              }}
              transition={{
                duration: 0.3,
              }}
              className="mt-5 text-center"
            >
              <p className="text-sm text-muted">
                {error}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tiny footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="mt-12 text-center text-[12px] uppercase tracking-[0.3em] text-muted/60"
        >
          SPOORTHY × NIRALI · 2023 — ∞
        </motion.p>
      </motion.div>
    </main>
  );
}