import Layout from "@/components/Layout";
import FloatingDoodles from "@/components/FloatingDoodles";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";

const team = [
  {
    initials: "SS",
    name: "Er. Sachin Sir",
    role: "Math & Physics Faculty",
    bio: "B.Tech (IT) — 9 years of mentoring students through algebra, calculus and mechanics.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    initials: "RS",
    name: "Er. Ramesh Sir",
    role: "Computer Science Mentor",
    bio: "B.Tech (IT), M.A., B.Ed. Specialisation in programming and algorithms.",
    color: "from-indigo-500 to-blue-400",
  },
  {
    initials: "AS",
    name: "Mr. Ansh Sir",
    role: "History & Geography",
    bio: "B.A. — focused on concept clarity, frequent tests and engaging discussions.",
    color: "from-cyan-500 to-teal-400",
  },
  {
    initials: "SM",
    name: "Ms. Shalu Ma'am",
    role: "PRT (Hindi & General)",
    bio: "CTET, UPTET, BiharTET, NET (Education) — dedicated to nurturing young minds.",
    color: "from-sky-500 to-blue-300",
  },
  {
    initials: "SH",
    name: "Ms. Shandhya Ma'am",
    role: "Counsellor (Psychology)",
    bio: "PGT (Psychology) and Govt. Teacher — supporting student well-being.",
    color: "from-blue-600 to-indigo-400",
  },
];

const Team = () => {
  return (
    <Layout>
      <section className="relative bg-hero py-20 overflow-hidden">
        <FloatingDoodles />
        <div className="container relative text-center">
          <Reveal>
            <span className="inline-flex px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider">
              Welcome to the Team
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold">
              Meet Our <span className="text-gradient-blue">Mentors</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-muted-foreground max-w-2xl mx-auto text-lg">
              Five core team members driving learning outcomes — every day, every student.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={(i % 5) * 0.08}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group bg-card-soft border border-border rounded-3xl p-6 text-center hover:border-primary/50 transition-colors h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 6 }}
                  className={`mx-auto w-24 h-24 rounded-2xl bg-gradient-to-br ${m.color} grid place-items-center shadow-glow text-white text-2xl font-bold`}
                >
                  {m.initials}
                </motion.div>
                <h3 className="mt-5 font-bold text-lg">{m.name}</h3>
                <div className="text-xs text-primary font-semibold uppercase tracking-wider mt-1">{m.role}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Team;
