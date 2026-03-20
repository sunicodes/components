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

    if (audioRef.current) {
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
          “Love Me Not” is a moody and emotionally charged track that captures
          the complexity of uncertain relationships and unreciprocated feelings.
          With its soft melodies and introspective tone, the song creates a
          haunting and reflective atmosphere. <br /> <br /> It explores themes
          of longing, self-doubt, and the fear of not being enough, resonating
          with listeners through its raw emotion and relatable storytelling.
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
          The Ronettes, an iconic American girl group of the 1960s, were known
          for their distinctive sound and powerful vocals led by Ronnie Spector.
          Produced by Phil Spector, their music became a defining part of the
          era’s pop landscape. <br /> <br /> “Be My Baby” is their most famous
          song, celebrated for its timeless melody and emotional depth.
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
          Vance Joy, an Australian singer-songwriter. Born James Gabriel
          Keogh in Melbourne, he gained worldwide recognition with his
          distinctive voice and acoustic style. <br /> <br /> “Riptide” is his
          breakthrough hit, blending ukulele-driven melodies with quirky and
          poetic lyrics. The song explores themes of love, insecurity, and
          admiration, creating a nostalgic and uplifting vibe that resonates
          with listeners across the globe.
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
          NEIKED, a Swedish music project led by producer Victor Rådström, is
          known for blending pop, electronic, and indie influences into catchy
          and modern sounds. Their collaborations often feature unique vocals
          and fresh production styles. <br /> <br /> The song captures
          the feeling of moving effortlessly through life, embracing freedom,
          positivity, and the beauty of simply going with the flow.
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
          Lauv, an American singer-songwriter, is widely recognized for his
          emotionally driven pop music and relatable lyrics. Born Ari Staprans
          Leff in California, he gained global popularity with his introspective
          songwriting and modern sound. <br /> <br /> “I Like Me Better” is one
          of his most iconic songs, exploring themes of young love,
          self-discovery, and the feeling of becoming a better version of
          yourself when you are with someone special
        </p>
      );
    },
  },
];
