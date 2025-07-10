import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Learning Python",
          "Learning Javascript",
          "Learning React",
          "Vegan Pizza Lover",
          "Running Enthusiast",
          "Sci-fi / Fantasy Nerd",
          "Boardgame Addict"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
