import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Reveal from "@/components/Reveal";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent · Class 7",
    initials: "PS",
    color: "from-blue-500 to-cyan-400",
    quote:
      "My daughter's confidence in Math has transformed completely. The mentors here genuinely care — and the small batch sizes really make a difference.",
  },
  {
    name: "Aarav Verma",
    role: "Student · Class 8",
    initials: "AV",
    color: "from-indigo-500 to-blue-400",
    quote:
      "I used to struggle with Physics concepts, but the weekly tests and doubt sessions helped me get a deep understanding. Now it's my favorite subject!",
  },
  {
    name: "Sunita Rai",
    role: "Parent · Class 5",
    initials: "SR",
    color: "from-cyan-500 to-teal-400",
    quote:
      "Affordable fees, expert faculty and personal attention — exactly what my son needed. The progress in just 6 months is remarkable.",
  },
  {
    name: "Yasita Rai",
    role: "Student · 87% in Class 10",
    initials: "YR",
    color: "from-sky-500 to-blue-300",
    quote:
      "From doubt-clearing to mock tests, every detail was perfectly planned. Thank you Curiosity Institute for shaping my journey.",
  },
];

const Testimonials = () => {
  return (
    <section className="container py-20">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-accent" /> Loved by parents & students
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">
            Real <span className="text-gradient-blue">Stories</span>, Real Growth
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hear it from the families who walk this journey with us every day.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={(i % 2) * 0.1}>
            <motion.article
              whileHover={{ y: -8 }}
              className="group relative h-full bg-card-soft border border-border rounded-3xl p-7 md:p-8 overflow-hidden hover:border-primary/50 transition-colors"
            >
              {/* glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* big quote mark */}
              <Quote className="absolute top-6 right-6 w-14 h-14 text-primary/10 group-hover:text-primary/20 transition-colors" />

              <div className="relative">
                <div className="flex gap-0.5 text-accent mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-accent" />
                  ))}
                </div>

                <p className="text-foreground/90 leading-relaxed text-[15px]">
                  "{t.quote}"
                </p>

                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border/60">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.color} grid place-items-center text-white font-bold shadow-glow`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold leading-tight">{t.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
