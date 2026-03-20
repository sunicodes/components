"use client";
import { motion } from "motion/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const useOutSideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);

  return ref;
};

const LayoutCards = () => {
  const [current, setCurrent] = useState<null | Card>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const ref = useOutSideClick(() => {
    setCurrent(null);

    if (audioRef) {
      audioRef.current.pause();
    }
  });

  return (
    <div className="py-10 bg-gray-100 min-h-screen font-manrope relative">
      <audio ref={audioRef} />
      {current && (
        <div className="fixed z-10 h-full inset-0 bg-black/50 backdrop-blur-sm"></div>
      )}
      {current && (
        <motion.div
          layoutId={`card-${current.title}`}
          ref={ref}
          className="h-[600px] fixed inset-0 z-20 m-auto bg-white w-72 rounded-2xl border border-neutral-200 p-4"
        >
          <motion.img
            layoutId={`card-image-${current.title}`}
            src={current.src}
            alt={current.title}
            className="aspect-square rounded-2xl w-full "
          />
          <div className="flex flex-col justify-baseline items-start">
            <div className="flex items-start justify-between w-full gap-2 py-4">
              <div className="flex flex-col items-start gap-2">
                <h2 className="font-bold text-xl tracking-tight text-black">
                  {current.title}
                </h2>
                <p className="text-[10px] text-neutral-500">
                  {current.description}
                </p>
              </div>
            </div>

            <div className="h-40 overflow-auto">{current.content()}</div>
          </div>
        </motion.div>
      )}
      <div className="max-w-lg mx-auto flex flex-col gap-10">
        {cards.map((card, idx) => (
          <motion.button
            layoutId={`card-${card.title}`}
            onClick={() => {
              setCurrent(card);

              if (audioRef.current) {
                audioRef.current.src = card.audio;
                audioRef.current.play();
              }
            }}
            key={card.title}
            className="p-4 rounded-lg cursor-pointer flex justify-between items-center bg-white border border-neutral-200"
          >
            <div className="flex items-center gap-4">
              <motion.img
                layoutId={`card-image-${card.title}`}
                src={card.src}
                alt={card.title}
                className="h-14 aspect-square rounded-lg"
              />
              <div className="flex flex-col items-start gap-2">
                <h2 className="font-bold text-xs tracking-tight text-black">
                  {card.title}
                </h2>
                <p className="text-[10px] text-neutral-500">
                  {card.description}
                </p>
              </div>
            </div>
            <div className="px-2 py-1 bg-green-500 rounded-full text-white text-xs">
              {card.ctaText}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default LayoutCards;

type Card = {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  audio: string;
  content: () => React.ReactNode;
};

const cards: Card[] = [
  {
    description: "Fate of Ophelia",
    title: "fate of ophelia",
    audio: "/songs/TheFateofOphelia.mp3",
    src: "fateofophileia.png",
    ctaText: "Play",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Taylor Swift, an iconic American singer-songwriter, is celebrated for
          her storytelling and genre-spanning music style. Born Taylor Alison
          Swift in Pennsylvania, she has captivated audiences worldwide with her
          emotionally rich lyrics and evolving sound. <br /> <br /> Her songs
          often explore themes of love, heartbreak, self-discovery, and personal
          growth, blending intimate narratives with a strong sense of
          reinvention.
        </p>
      );
    },
  },
  {
    description: "Love me not",
    title: "Love Me Not",
    audio: "/songs/LoveMeNot.mp3",
    src: "/lovemenot.jpg",
    ctaText: "Play",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
        </p>
      );
    },
  },
  {
    description: "Be my Baby",
    title: "Be my baby",
    audio: "/songs/BeMyBaby.mp3",
    src: "/bemybabycopy.jpg",
    ctaText: "Play",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
        </p>
      );
    },
  },
  {
    description: "Riptide",
    title: "Riptide",
    audio: "/songs/Riptide.mp3",
    src: "/riptidepin.jpg",
    ctaText: "Play",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
        </p>
      );
    },
  },
  {
    description: "Glide",
    title: "Glide",
    audio: "/songs/Glide.mp3",
    src: "/glide.jpg",
    ctaText: "Play",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
          renowned for its intense storyline and powerful performances. Directed
          by Mohit Suri, the film has become a significant work in the Indian
          film industry. <br /> <br /> The movie explores themes of love,
          redemption, and sacrifice, capturing the essence of human emotions.
        </p>
      );
    },
  },
  {
    description: "I Like Me Better",
    title: "I Like Me Better",
    audio: "/songs/ILikeMeBetter.mp3",
    src: "/ilikemebetter.jpg",
    ctaText: "Play",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Led Zeppelin was an English rock band formed in London in 1968. The
          group consisted of vocalist Robert Plant, guitarist Jimmy Page,
          bassist/keyboardist John Paul Jones, and drummer John Bonham. <br />{" "}
          <br /> Their music is renowned for its innovative fusion of blues,
          hard rock, and folk.
        </p>
      );
    },
  },
];
