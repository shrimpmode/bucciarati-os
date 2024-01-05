import { useEffect, useState } from "react";

export const useDraggable = (ref: React.RefObject<HTMLDivElement>) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (ref.current) {
      const x = e.clientX;
      const y = e.clientY;
      setInitialPosition({
        x,
        y,
      });
    }

    setIsDragging(true);
  };

  const handleMouseUp = (e: MouseEvent) => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (e: MouseEvent) => {
        if (ref.current) {
          const dx = e.clientX - initialPosition.x;
          const dy = e.clientY - initialPosition.y;
          setPosition({
            x: position.x + dx,
            y: position.y + dy,
          });
          setInitialPosition({
            x: e.clientX,
            y: e.clientY,
          });
        }
      };
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, initialPosition, position, ref]);

  return {
    onMouseDown: handleMouseDown,
    position,
  };
};
