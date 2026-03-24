"use client";

import { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal — wraps any children and triggers a reveal animation
 * when the element enters the viewport.
 *
 * Props:
 *   animation  : 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'fadeIn' | 'scaleUp' | 'slideUp'
 *   delay      : CSS delay string, e.g. '0.2s'
 *   className  : extra classNames to pass through
 *   threshold  : 0–1 intersection ratio (default 0.15)
 */
export default function ScrollReveal({
  children,
  animation = 'fadeUp',
  delay = '0s',
  className = '',
  threshold = 0.15,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el); // fire once per element
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: getInitialTransform(animation, visible),
        transition: `opacity 0.75s ease ${delay}, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}

function getInitialTransform(animation, visible) {
  if (visible) return 'none';
  switch (animation) {
    case 'fadeUp':    return 'translateY(48px)';
    case 'fadeDown':  return 'translateY(-48px)';
    case 'fadeLeft':  return 'translateX(-56px)';
    case 'fadeRight': return 'translateX(56px)';
    case 'scaleUp':   return 'scale(0.88)';
    case 'slideUp':   return 'translateY(72px)';
    default:          return 'translateY(32px)';
  }
}
