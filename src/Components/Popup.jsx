import React, { useEffect, useState } from "react";

const Popup = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true); // State to control visibility for animation

  // Automatically close the popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Trigger fade-out
      setTimeout(onClose, 300); // Wait for the fade-out animation to finish before closing
    }, 2500); // 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [onClose]);

  // Close the popup when clicking outside of it
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsVisible(false); // Trigger fade-out
      setTimeout(onClose, 300); // Wait for the fade-out animation to finish before closing
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOutsideClick} // Close on outside click
    >
      {/* Popup content with transition */}
      <div
        className={`bg-background p-6 rounded-lg shadow-lg text-center transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-xl font-bold text-primary mb-4">{message}</h3>
      </div>
    </div>
  );
};

export default Popup;