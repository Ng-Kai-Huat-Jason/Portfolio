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
        "Hi, I'm Jason, a learning student who is passionate about coding and has a keen interest in UI/UX. This portfolio is built using React and Tailwind CSS.",
    },
    {
      id: 2,
      title: "My Hobbies",
      image: hobbyImage, 
      imageAlt: "Jason's hobbies",
      content:
        "In my free time, I enjoy exploring new technologies, playing video games, and designing user interfaces. I also love outdoor activities like hiking and photography.",
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
          <h3 className="text-2xl font-bold text-dark mb-4">
            {slide.title}
          </h3>
          <p className="text-dark">{slide.content}</p>
        </div>
      </div>
    ),
  }));

  return (
    <section id="about" className="py-20 bg-vintage-cream">
      <div className="container mx-auto px-12">
        <h2 className="text-3xl font-bold text-center text-vintage-blue mb-12">
          Some Information About Me
        </h2>

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
