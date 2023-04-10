import React, { useRef, useEffect, useState } from 'react';

const FadeInOnScroll = (props) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
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

  return (
    <div
      className={`fade-in-on-scroll ${isVisible ? 'is-visible' : ''}`}
      ref={ref}
    >
      {props.componentToFade}
    </div>
  );
};

export default FadeInOnScroll;