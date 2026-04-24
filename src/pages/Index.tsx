import Testimonials from "@/components/Testimonials";
import TopperCarousel from "@/components/TopperCarousel";
import FloatingDoodles from "@/components/FloatingDoodles";
import Reveal from "@/components/Reveal";
import ClassesSection from "@/components/sections/ClassesSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight, BookOpen, Users, Award, Clock, Sparkles, Calculator,
  Atom, FlaskConical, Globe2, Languages, Microscope
} from "lucide-react";

const stats = [
  { value: "9+", label: "Years of Mentoring" },
  { value: "500+", label: "Happy Students" },
  { value: "8", label: "Classes Covered" },
  { value: "4.9★", label: "Parent Rating" },
];

const features = [
  { icon: BookOpen, title: "Offline Classes", desc: "Interactive sessions, experienced faculty, practical problem solving." },
  { icon: Users, title: "Expert Mentors", desc: "Personal guidance to keep you motivated and on track." },
  { icon: Award, title: "Curated Books", desc: "Concise study material and practice sets — only the essentials." },
  { icon: Clock, title: "24/7 Support", desc: "Doubt resolution and progress tracking whenever you need it." },
];

const subjects = [
  { icon: Calculator, name: "Math", color: "from-blue-500 to-cyan-400" },
  { icon: Atom, name: "Physics", color: "from-indigo-500 to-blue-400" },
  { icon: FlaskConical, name: "Chemistry", color: "from-cyan-500 to-teal-400" },
  { icon: Microscope, name: "Biology", color: "from-sky-500 to-blue-300" },
  { icon: Languages, name: "English", color: "from-blue-600 to-indigo-400" },
  { icon: Globe2, name: "Social Studies", color: "from-teal-500 to-cyan-400" },
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center bg-hero overflow-hidden scroll-mt-20">
        <FloatingDoodles />
        <div className="absolute inset-0 glow-ring" />

        <div className="container relative grid md:grid-cols-2 gap-12 items-center py-20">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Admissions Open · 2026
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-[1.05]">
                Cultivating <span className="text-gradient-blue">Minds</span>,
                <br />Harvesting <span className="text-gradient-blue">Future</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                Modern coaching for classes 1–8 across all boards. Expert faculty,
                personalised attention, regular tests and affordable fees.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="hero" size="lg">
                  <a href="#classes">Explore Classes <ArrowRight className="w-4 h-4" /></a>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <a href="#contact">Get in Touch</a>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm">
                <a href="tel:8299281153" className="inline-flex items-center gap-2.5 text-foreground/90 hover:text-primary transition-colors">
                  <span className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/30 grid place-items-center text-primary">📞</span>
                  <span className="font-medium">8299281153</span>
                </a>
                <a href="mailto:institutecuriosity@gmail.com" className="inline-flex items-center gap-2.5 text-foreground/90 hover:text-primary transition-colors min-w-0">
                  <span className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/30 grid place-items-center text-primary">✉️</span>
                  <span className="font-medium truncate">institutecuriosity@gmail.com</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Hero visual: animated open book + spinning ring */}
          <Reveal delay={0.2}>
            <div className="relative h-[420px] md:h-[500px] grid place-items-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[380px] h-[380px] rounded-full border border-dashed border-primary/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-primary-glow/30"
              />
              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-64 rounded-3xl bg-gradient-to-br from-primary to-primary-glow shadow-glow grid place-items-center"
              >
                <svg viewBox="0 0 200 200" className="w-44 h-44 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <motion.path
                    d="M30 50 Q100 20 170 50 L170 160 Q100 130 30 160 Z"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M100 35 L100 145"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 1.5 }}
                  />
                  <motion.path
                    d="M50 70 L85 70 M50 90 L85 90 M115 70 L150 70 M115 90 L150 90"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 2 }}
                  />
                </svg>
              </motion.div>
              {/* Floating pencil */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [-15, 5, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-4 w-16 h-16 rounded-2xl bg-accent shadow-amber grid place-items-center"
              >
                <span className="text-3xl">✏️</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 18, 0], rotate: [10, -10, 10] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-2 w-16 h-16 rounded-2xl bg-card border border-primary/30 shadow-glow grid place-items-center"
              >
                <span className="text-3xl">📚</span>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="bg-card-soft border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className="text-4xl font-extrabold text-gradient-blue">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="container py-20">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold">Why <span className="text-gradient-blue">Curiosity</span></h2>
            <p className="mt-4 text-muted-foreground">Everything a young learner needs — under one roof.</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative h-full bg-card-soft border border-border rounded-2xl p-6 overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center shadow-glow">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SUBJECTS MARQUEE */}
      <section className="container py-20">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold">Subjects We <span className="text-gradient-blue">Master</span></h2>
            <p className="mt-4 text-muted-foreground">Math · Science · English · SST</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {subjects.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.06}>
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className={`aspect-square rounded-2xl bg-gradient-to-br ${s.color} p-5 flex flex-col items-center justify-center text-white shadow-soft`}
              >
                <s.icon className="w-10 h-10 mb-2" />
                <div className="font-semibold">{s.name}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TOPPERS */}
      <TopperCarousel />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA */}
      <section className="container py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary-glow p-10 md:p-16 text-center shadow-glow">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 text-6xl animate-float">📖</div>
              <div className="absolute bottom-10 right-10 text-6xl animate-float-slow">✏️</div>
            </div>
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground">Ready to begin the journey?</h2>
              <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">Talk to a mentor today. Admissions are open for all classes 1st to 8th.</p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Button asChild variant="amber" size="lg">
                  <a href="#contact">Apply Now <ArrowRight className="w-4 h-4" /></a>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <a href="#team">Meet the Team</a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <ClassesSection />
      <TeamSection />
      <ContactSection />
    </>
  );
};

export default Index;
