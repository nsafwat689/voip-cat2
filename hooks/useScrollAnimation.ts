import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * Triggers animation when element comes into view
 */
export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Stop observing after animation triggers
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px', // Start animation slightly before element is fully in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}
