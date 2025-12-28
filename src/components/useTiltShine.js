import { useRef, useState, useEffect } from 'react';

export const useTiltShine = (options = {}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const {
    maxTilt = 15,
    perspective = 1000,
    transitionSpeed = 0.1,
  } = options;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      if (!isHovered) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      setMousePosition({ x, y });

      card.style.transform = `
        perspective(${perspective}px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(1.03, 1.03, 1.03)
      `;

      // Update shine position with more prominent effect
      const shine = card.querySelector('.card-shine');
      if (shine) {
        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;
        // Create a more prominent shine effect
        shine.style.background = `radial-gradient(circle 200px at ${percentX}% ${percentY}%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 30%, transparent 70%)`;
        shine.style.opacity = '1';
      }
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      card.style.transition = `transform ${transitionSpeed}s ease-out`;
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setMousePosition({ x: 0, y: 0 });
      card.style.transition = `transform 0.5s ease-out`;
      card.style.transform = `
        perspective(${perspective}px)
        rotateX(0deg)
        rotateY(0deg)
        scale3d(1, 1, 1)
      `;
      
      // Hide shine on mouse leave
      const shine = card.querySelector('.card-shine');
      if (shine) {
        shine.style.opacity = '0';
      }
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered, maxTilt, perspective, transitionSpeed]);

  return cardRef;
};

