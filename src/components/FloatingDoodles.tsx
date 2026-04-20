import { motion } from "framer-motion";
import { BookOpen, Pencil, GraduationCap, Sparkles } from "lucide-react";

/**
 * Floating decorative academic icons that drift through sections.
 * Pure presentation — pointer-events-none.
 */
const FloatingDoodles = () => {
  const items = [
    { Icon: Pencil, top: "8%", left: "6%", size: 36, delay: 0, duration: 7, color: "text-primary/40" },
    { Icon: BookOpen, top: "20%", right: "8%", size: 44, delay: 1.2, duration: 9, color: "text-accent/40" },
    { Icon: GraduationCap, bottom: "18%", left: "10%", size: 40, delay: 0.6, duration: 8, color: "text-primary-glow/40" },
    { Icon: Sparkles, top: "55%", right: "14%", size: 28, delay: 2, duration: 6, color: "text-accent/50" },
    { Icon: Pencil, bottom: "10%", right: "20%", size: 32, delay: 1.6, duration: 10, color: "text-primary/30" },
    { Icon: BookOpen, top: "70%", left: "20%", size: 30, delay: 0.3, duration: 7.5, color: "text-primary-glow/30" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map(({ Icon, top, left, right, bottom, size, delay, duration, color }, i) => (
        <motion.div
          key={i}
          className={`absolute ${color}`}
          style={{ top, left, right, bottom }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, -25, 0],
            x: [0, 12, 0],
            rotate: [-8, 12, -8],
          }}
          transition={{
            opacity: { duration: 1, delay },
            y: { duration, delay, repeat: Infinity, ease: "easeInOut" },
            x: { duration: duration + 2, delay, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: duration + 1, delay, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Icon size={size} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingDoodles;
