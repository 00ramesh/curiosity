import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import { Calculator, Atom, FlaskConical, Microscope, Languages, Globe2, CheckCircle2 } from "lucide-react";

const classes = [
  { icon: Calculator, title: "Math Foundation", color: "from-blue-500 to-cyan-400", modules: ["Algebra", "Geometry", "Trigonometry", "Calculus basics"], desc: "Problem-solving sessions with emphasis on application and speed." },
  { icon: Atom, title: "Physics Mastery", color: "from-indigo-500 to-blue-400", modules: ["Mechanics", "Waves", "Electricity", "Thermodynamics"], desc: "Weekly tests and doubt clearing keep concepts crystal clear." },
  { icon: FlaskConical, title: "Chemistry Concepts", color: "from-cyan-500 to-teal-400", modules: ["Physical", "Organic", "Inorganic", "Practical shortcuts"], desc: "Mnemonic aids and practical tricks make chemistry fun." },
  { icon: Microscope, title: "Biology Foundation", color: "from-sky-500 to-blue-300", modules: ["Cell Biology", "Genetics", "Ecology", "Human Physiology"], desc: "Interactive labs and case studies bring biology alive." },
  { icon: Languages, title: "English Communication", color: "from-blue-600 to-indigo-400", modules: ["Grammar", "Reading", "Writing", "Spoken practice"], desc: "Mock interviews build confidence and fluency." },
  { icon: Globe2, title: "History & Geography", color: "from-teal-500 to-cyan-400", modules: ["Ancient", "Medieval", "Modern", "Physical Geography"], desc: "Discussions and map-based learning for deep understanding." },
];

const ClassesSection = () => (
  <section id="classes" className="container py-24 scroll-mt-20">
    <Reveal>
      <div className="max-w-2xl mx-auto text-center mb-14">
        <span className="inline-flex px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider">
          Classes 9th to 12th · All Boards
        </span>
        <h2 className="mt-6 text-4xl md:text-5xl font-extrabold">Coaching <span className="text-gradient-blue">Classes</span></h2>
        <p className="mt-4 text-muted-foreground">Focused tracks — each course keeps just 4 key modules for clarity, pace and depth.</p>
      </div>
    </Reveal>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {classes.map((c, i) => (
        <Reveal key={c.title} delay={(i % 3) * 0.1}>
          <motion.article
            whileHover={{ y: -10, rotateX: 4, rotateY: -4 }}
            style={{ transformPerspective: 1000 }}
            className="group relative h-full bg-card-soft border border-border rounded-3xl p-7 overflow-hidden hover:border-primary/50 transition-colors"
          >
            <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${c.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />
            <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${c.color} grid place-items-center shadow-glow`}>
              <c.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="mt-5 text-xl font-bold">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            <ul className="mt-5 space-y-2">
              {c.modules.map((m) => (
                <li key={m} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </Reveal>
      ))}
    </div>
  </section>
);

export default ClassesSection;
