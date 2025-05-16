import React, { useRef, useEffect, useState } from 'react';
import '../styles/SlideIn.css';

const SlideIn = ({ children, direction='right' }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`slide-wrapper ${direction} ${isVisible ? 'slide-in' : 'slide-out'}`}
    >
      {children}
    </div>
  );
};

export default SlideIn;
