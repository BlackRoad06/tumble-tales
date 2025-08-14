import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const paragraphs = [
  {
    text: "Our company was founded on the principle that technology should serve humanity, not the other way around. What began as a small team of idealistic engineers in a Silicon Valley garage has grown into an international leader in ethical technology solutions. Over the past decade, we've pioneered advancements in artificial intelligence, sustainable cloud computing, and human-centered design, earning recognition from Forbes, Wired, and the World Economic Forum. Our 300+ team members across 12 countries share a common vision: to build technology that amplifies human potential while minimizing environmental impact. This commitment has led to groundbreaking innovations like our carbon-neutral data centers and open-source AI ethics toolkit used by universities worldwide.",
    className: "mb-4"
  },
  {
    text: "Our company was founded on the principle that technology should serve humanity, not the other way around. What began as a small team of idealistic engineers in a Silicon Valley garage has grown into an international leader in ethical technology solutions. Over the past decade, we've pioneered advancements in artificial intelligence, sustainable cloud computing, and human-centered design, earning recognition from Forbes, Wired, and the World Economic Forum. Our 300+ team members across 12 countries share a common vision: to build technology that amplifies human potential while minimizing environmental impact. This commitment has led to groundbreaking innovations like our carbon-neutral data centers and open-source AI ethics toolkit used by universities worldwide.",
    className: "mb-4"
  },
  {
    text: "What truly differentiates us is our triple-bottom-line approach: people, planet, and profit. While we work with Fortune 500 clients to transform their digital infrastructure, we equally prioritize pro bono projects for non-profits and educational institutions. Our 5% Pledge initiative donates not just profits but also employee time—every team member spends one month per year working on social impact projects. This balance between commercial excellence and social responsibility has earned us B Corp certification and a spot on the 'Best Places to Work' list for five consecutive years. Our offices feature living walls, renewable energy systems, and zero-waste policies, reflecting our belief that sustainable practices create better products and happier teams.",
    className: "mb-4"
  },
  {
    text: "Looking ahead, we're investing heavily in quantum computing research and biomimetic AI systems that learn from natural processes. Our recently launched Future Ethics division brings together philosophers, technologists, and policymakers to anticipate the societal impacts of emerging technologies. We've also established scholarship programs to train underrepresented groups in STEM fields, because we believe diverse perspectives create better technology. Whether you're a potential client, partner, or future employee, we invite you to join us in building a digital future that's equitable, sustainable, and profoundly human—where technology doesn't just change what we can do, but who we can become.",
    className: ""
  }
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleParagraphs, setVisibleParagraphs] = useState<number[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = Array.from(containerRef.current!.children);
            const index = children.indexOf(entry.target);
            if (index !== -1) {
              setVisibleParagraphs((prev) =>
                prev.includes(index) ? prev : [...prev, index]
              );
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    const children = Array.from(containerRef.current.children);
    children.forEach((child, index) => {
      if (index > 0) observer.observe(child); // Skip the h1
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      <h1 className="text-4xl font-bold mb-8">About Us</h1>

      {paragraphs.map((para, index) => (
        <motion.p
          key={index}
          className={`${para.className} text-lg leading-relaxed`}
          initial={{ opacity: 0 }}
          animate={visibleParagraphs.includes(index + 1) ? { opacity: 1 } : {}}
          transition={{
            duration: 1.6,
            delay: visibleParagraphs.includes(index + 1)
              ? index * 0.5 + 0.3 // small initial delay added
              : 0,
            ease: "easeInOut"
          }}
        >
          {para.text}
        </motion.p>
      ))}
    </div>
  );
}
