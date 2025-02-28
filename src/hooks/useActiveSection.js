import { useState, useEffect } from 'react';

const useActiveSection = (sectionIds, options = {}) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observers = [];
    
    // Create an observer for each section
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (!element) return;
      
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        });
      }, { threshold: 0.6, ...options });
      
      observer.observe(element);
      observers.push({ observer, element });
    });
    
    // Cleanup
    return () => {
      observers.forEach(({ observer, element }) => {
        observer.unobserve(element);
      });
    };
  }, [sectionIds, options]);
  
  return activeSection;
};

export default useActiveSection;