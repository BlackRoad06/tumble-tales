// components/Stories.tsx
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Story from "./Story/Story";

export default function Stories() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const dummyStories = Array(8).fill(0); // placeholder array for 8 stories

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = Array.from(containerRef.current!.children);
            const index = children.indexOf(entry.target);
            if (index !== -1) {
              setVisibleCards((prev) =>
                prev.includes(index) ? prev : [...prev, index]
              );
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    const children = Array.from(containerRef.current.children);
    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {dummyStories.map((_, index) => (
          <motion.div
  key={index}
  initial={{ opacity: 0 }}
  animate={visibleCards.includes(index) ? { opacity: 1 } : {}}
  transition={{ duration: 0.5, ease: "easeInOut" }}
  className="transform transition-transform duration-150 ease-in-out hover:scale-110 active:scale-115 cursor-pointer"
>
  <Story />
</motion.div>

        ))}
      </div>
    </div>
  );
}
