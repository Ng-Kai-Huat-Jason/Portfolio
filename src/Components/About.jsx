// About.jsx
import React, { useState } from "react";
import Carousel from "./Carousel";

// Import all images
import profileImage from "../images/Me Thumbs up.jpg";
import hobbyImage from "../images/Me infront of MaiMai.jpg";

const About = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Dynamic data array for all slides
  const slideData = [
    {
      id: 1,
      title: "About Me",
      image: profileImage,
      imageAlt: "Jason",
      content:
        "Hi, I'm Jason, a person who's interested in learning programming, UI/UX development as well as Software Engineering.",
    },
    {
      id: 2,
      title: "My Hobbies",
      image: hobbyImage,
      imageAlt: "Jason's hobbies",
      content:
        "In my free time, I enjoy playing video games, watching anime and reading manga. I also enjoy playing rhythm games such as MaiMai and Project Sekai.",
    },
  ];

  // Transform the data into proper slide format
  const slides = slideData.map((slide) => ({
    content: (
      <div className="flex flex-col md:flex-row items-center px-4">
        {/* Image on the Left */}
        <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img
            src={slide.image}
            alt={slide.imageAlt}
            className="rounded-2xl w-52 h-52 object-cover shadow-lg"
          />
        </div>

        {/* Content on the Right */}
        <div className="w-full md:w-1/2 md:pl-8">
          <h3 className="text-3xl font-extrabold text-secondary mb-4">
            {slide.title}
          </h3>
          <p className="text-black text-base">{slide.content}</p>
        </div>
      </div>
    ),
  }));

  return (
    <section id="about" className="py-20 bg-background pt-48">
      <div className="container mx-auto px-12">

        {/* Dynamic carousel with mapped content */}
        <Carousel
          slides={slides}
          onSlideChange={(current) => setActiveSlide(current)}
        />
      </div>
    </section>
  );
};

export default About;
