import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import avatar1 from "@/assets/avatar/sachin.jpg";
import avatar2 from "@/assets/avatar/ramesh.jpg";
import avatar3 from "@/assets/avatar/ansh.jpg";
import avatar4 from "@/assets/avatar/avatar4.svg";
import avatar5 from "@/assets/avatar/avatar5.svg";

const team = [
  { initials: "SS", image: avatar1, name: "Er. Sachin Sir", role: "Math & Physics Faculty", bio: "B.Tech (IT) — 9 years of mentoring students through algebra, calculus and mechanics.", color: "from-blue-500 to-cyan-400" },
  { initials: "RS", image: avatar2, name: "Er. Ramesh Sir", role: "Computer Science Mentor", bio: "B.Tech (IT), M.A., B.Ed. Specialisation in programming and algorithms.", color: "from-indigo-500 to-blue-400" },
  { initials: "AS", image: avatar3, name: "Mr. Ansh Sir", role: "History & Geography", bio: "B.A. — focused on concept clarity, frequent tests and engaging discussions.", color: "from-cyan-500 to-teal-400" },
  { initials: "SM", image: avatar4, name: "Ms. Shalu Ma'am", role: "PRT (Hindi & General)", bio: "CTET, UPTET, BiharTET, NET (Education) — dedicated to nurturing young minds.", color: "from-sky-500 to-blue-300" },
  { initials: "SH", image: avatar5, name: "Ms. Shandhya Ma'am", role: "Counsellor (Psychology)", bio: "PGT (Psychology) and Govt. Teacher — supporting student well-being.", color: "from-blue-600 to-indigo-400" },
];

const TeamSection = () => (
  <section id="team" className="container py-24 scroll-mt-20">
    <Reveal>
      <div className="max-w-2xl mx-auto text-center mb-14">
        <span className="inline-flex px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider">
          Welcome to the Team
        </span>
        <h2 className="mt-6 text-4xl md:text-5xl font-extrabold">Meet Our <span className="text-gradient-blue">Mentors</span></h2>
        <p className="mt-4 text-muted-foreground">Five core team members driving learning outcomes — every day, every student.</p>
      </div>
    </Reveal>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {team.map((m, i) => (
        <Reveal key={m.name} delay={(i % 5) * 0.08}>
          <motion.div
            whileHover={{ y: -10 }}
            className="group bg-card-soft border border-border rounded-3xl p-6 text-center hover:border-primary/50 transition-colors h-full"
          >
            <motion.div whileHover={{ scale: 1.08, rotate: 6 }} className="mx-auto w-24 h-24 rounded-2xl overflow-hidden shadow-glow">
              <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
            </motion.div>
            <h3 className="mt-5 font-bold text-lg">{m.name}</h3>
            <div className="text-xs text-primary font-semibold uppercase tracking-wider mt-1">{m.role}</div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
          </motion.div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default TeamSection;
