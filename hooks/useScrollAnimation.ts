import { useEffect, useRef, useState } from 'react';

/**
 * Scroll animation hook — Task 18: respects prefers-reduced-motion.
 * If user prefers reduced motion, elements are immediately visible (no animation).
 */
export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // If reduced-motion: skip animation entirely — element starts visible
  const [isVisible, setIsVisible] = useState(prefersReduced);

  useEffect(() => {
    if (prefersReduced) return; // no observer needed

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return { ref, isVisible };
}
