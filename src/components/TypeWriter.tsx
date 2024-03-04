import React, { useState, useEffect } from "react";

const WordDisplay = () => {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isPause, setIsPause] = useState(false);
  const [animationClass, setAnimationClass] = useState("fade-in");
  const words = ["Driven ", "Informed ", "Dependent ", "Powered ", "Enhanced "];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPause) {
        setCurrentWord((prevWord) => {
          if (charIndex < words[index].length) {
            setCharIndex((prevCharIndex) => prevCharIndex + 1);
            return prevWord + words[index][charIndex];
          } else {
            setCharIndex(0);
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
            setIsPause(true);
            setAnimationClass("fade-out");
            return "";
          }
        });
      }
    }, 330); // Adjust speed as needed

    const pauseIntervalId = setInterval(() => {
      setIsPause(false);
      setAnimationClass("fade-in");
    }, 1000); // Adjust pause duration as needed

    return () => {
      clearInterval(intervalId); // Clean up on unmount
      clearInterval(pauseIntervalId); // Clean up on unmount
    };
  }, [index, charIndex, isPause, words]);

  return <p className="text-[#b0cb48] md:text-6xl text-3xl">{currentWord}</p>;
};

export default WordDisplay;
