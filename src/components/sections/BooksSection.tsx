import Reveal from "@/components/Reveal";
import { BookMarked, ExternalLink, Library } from "lucide-react";

type BookLink = { label: string; href: string };
type BookGroup = { title: string; subtitle?: string; items: BookLink[] };

const curated: { code: string; title: string; desc: string }[] = [
  { code: "PS1", title: "Problem Solving Vol.1", desc: "Practice-first approach with solutions." },
  { code: "CN", title: "Concept Notes", desc: "Concise theory with memory aids." },
  { code: "PP", title: "Practice Papers", desc: "Timed tests for exam readiness." },
  { code: "SM", title: "Speed Maths", desc: "Tricks and shortcuts to save time." },
];

const ncertReferences: BookLink[] = [
  { label: "Physics — NCERT (Class XI/XII)", href: "https://ncert.nic.in/textbook.php" },
  { label: "Mathematics — NCERT (Class XI/XII)", href: "https://ncert.nic.in/textbook.php" },
  { label: "Chemistry — NCERT (Class XI/XII)", href: "https://ncert.nic.in/textbook.php" },
  { label: "Biology — NCERT (Class XI/XII)", href: "https://ncert.nic.in/textbook.php" },
];

const directLinks: BookGroup[] = [
  {
    title: "Physics",
    items: [
      { label: "Class XI: NCERT Physics (Class XI)", href: "https://ncert.nic.in/textbook.php?keph1=0-8" },
      { label: "Class XII: NCERT Physics (Class XII)", href: "https://ncert.nic.in/textbook.php?leph1=0-8" },
    ],
  },
  {
    title: "Mathematics",
    items: [
      { label: "Class XI: NCERT Mathematics (Class XI)", href: "https://ncert.nic.in/textbook.php?kemh1=0-16" },
      { label: "Class XII: NCERT Mathematics (Class XII)", href: "https://ncert.nic.in/textbook.php?lemh1=0-13" },
    ],
  },
  {
    title: "Chemistry",
    items: [
      { label: "Class XI: NCERT Chemistry (Class XI)", href: "https://ncert.nic.in/textbook.php?kech1=0-14" },
      { label: "Class XII: NCERT Chemistry (Class XII)", href: "https://ncert.nic.in/textbook.php?lech1=0-16" },
    ],
  },
  {
    title: "English",
    items: [
      { label: "Class XI: NCERT English (Class XI)", href: "https://ncert.nic.in/textbook.php?kehc1=0-8" },
      { label: "Class XII: NCERT English (Class XII)", href: "https://ncert.nic.in/textbook.php?lehc1=0-8" },
    ],
  },
];

const classes6to10 = [
  { cls: "Class 6", subjects: "Maths · Science · English · Social Science · Hindi", href: "https://ncert.nic.in/textbook.php?fess1=0-12" },
  { cls: "Class 7", subjects: "Maths · Science · English · Social Science · Hindi", href: "https://ncert.nic.in/textbook.php?gess1=0-10" },
  { cls: "Class 8", subjects: "Maths · Science · English · Social Science · Hindi", href: "https://ncert.nic.in/textbook.php?hess1=0-10" },
  { cls: "Class 9", subjects: "Maths · Science · English · Social Science · Hindi", href: "https://ncert.nic.in/textbook.php?iesc1=0-12" },
  { cls: "Class 10", subjects: "Maths · Science · English · Social Science · Hindi", href: "https://ncert.nic.in/textbook.php?jesc1=0-13" },
];

const classSubjects: BookGroup[] = [
  {
    title: "Class 6 Subjects",
    items: [
      { label: "Mathematics", href: "https://ncert.nic.in/textbook.php?femh1=0-14" },
      { label: "Science", href: "https://ncert.nic.in/textbook.php?fesc1=0-16" },
      { label: "English", href: "https://ncert.nic.in/textbook.php?fehd1=0-10" },
      { label: "Social Science", href: "https://ncert.nic.in/textbook.php?fess1=0-12" },
    ],
  },
  {
    title: "Class 7 Subjects",
    items: [
      { label: "Mathematics", href: "https://ncert.nic.in/textbook.php?gemh1=0-15" },
      { label: "Science", href: "https://ncert.nic.in/textbook.php?gesc1=0-18" },
      { label: "English", href: "https://ncert.nic.in/textbook.php?gehd1=0-10" },
      { label: "Social Science", href: "https://ncert.nic.in/textbook.php?gess1=0-10" },
    ],
  },
  {
    title: "Class 8 Subjects",
    items: [
      { label: "Mathematics", href: "https://ncert.nic.in/textbook.php?hemh1=0-16" },
      { label: "Science", href: "https://ncert.nic.in/textbook.php?hesc1=0-18" },
      { label: "English", href: "https://ncert.nic.in/textbook.php?hehd1=0-10" },
      { label: "Social Science", href: "https://ncert.nic.in/textbook.php?hess1=0-10" },
    ],
  },
  {
    title: "Class 9 Subjects",
    items: [
      { label: "Mathematics", href: "https://ncert.nic.in/textbook.php?iemh1=0-15" },
      { label: "Science", href: "https://ncert.nic.in/textbook.php?iesc1=0-12" },
      { label: "English", href: "https://ncert.nic.in/textbook.php?iebe1=0-10" },
      { label: "Social Science", href: "https://ncert.nic.in/textbook.php?iess1=0-8" },
    ],
  },
];

const class10 : BookGroup = {
  title: "Class 10 Subjects",
  items: [
    { label: "Mathematics", href: "https://ncert.nic.in/textbook.php?jemh1=0-15" },
    { label: "Science", href: "https://ncert.nic.in/textbook.php?jesc1=0-13" },
    { label: "English", href: "https://ncert.nic.in/textbook.php?jefl1=0-11" },
    { label: "Social Science", href: "https://ncert.nic.in/textbook.php?jess3=0-8" },
  ],
};

const ext = {
  target: "_blank",
  rel: "noopener noreferrer",
};

const HoverItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    {...ext}
    className="group/item relative flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-foreground/80 cursor-pointer overflow-hidden transition-colors hover:text-primary"
  >
    <span className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/15 via-primary/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity rounded-lg" />
    <span className="absolute inset-y-0 left-0 w-1 rounded-r bg-primary scale-y-0 group-hover/item:scale-y-100 transition-transform origin-center" />
    <span className="flex-1">{children}</span>
    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 transition-opacity" />
  </a>
);

const GroupCard = ({ group }: { group: BookGroup }) => (
  <div className="group relative rounded-2xl border border-border bg-card-soft p-5 hover:border-primary/50 transition-all hover:-translate-y-0.5">
    <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    <h4 className="text-primary font-bold mb-3 flex items-center gap-2">
      <BookMarked className="w-4 h-4" /> {group.title}
    </h4>
    <div className="flex flex-col gap-1">
      {group.items.map((it) => (
        <HoverItem key={it.label} href={it.href}>
          {it.label}
        </HoverItem>
      ))}
    </div>
  </div>
);

const BooksSection = () => {
  return (
    <section id="books" className="container py-20 scroll-mt-20">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider">
            <Library className="w-3.5 h-3.5" /> Study Material
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">
            Our <span className="text-gradient-blue">Books</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A curated list — brief and powerful. Plus direct links to NCERT textbooks for every class.
          </p>
        </div>
      </Reveal>

      {/* Curated picks */}
      <Reveal delay={0.05}>
        <h3 className="text-2xl font-extrabold mb-2">Curated Picks</h3>
        <p className="text-sm text-muted-foreground mb-6">Four essential titles to begin with.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {curated.map((b) => (
            <a
              key={b.code}
              href="https://ncert.nic.in/textbook.php"
              {...ext}
              className="group relative rounded-2xl border border-border bg-card-soft p-5 text-center cursor-pointer overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-primary-foreground font-extrabold shadow-glow">
                {b.code}
              </div>
              <div className="relative mt-4 font-semibold">{b.title}</div>
              <div className="relative mt-1 text-xs text-muted-foreground">{b.desc}</div>
            </a>
          ))}
        </div>
      </Reveal>

      {/* NCERT References */}
      <Reveal delay={0.05}>
        <h3 className="text-2xl font-extrabold mb-2">NCERT References</h3>
        <p className="text-sm text-muted-foreground mb-6">
          We reference standard NCERT textbooks for foundational concepts. Select a title to open the official NCERT textbook page.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {ncertReferences.map((b) => (
            <a
              key={b.label}
              href={b.href}
              {...ext}
              className="group relative rounded-2xl border border-border bg-card-soft p-5 cursor-pointer overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative font-semibold">{b.label}</div>
              <div className="relative mt-2 inline-flex items-center gap-1 text-xs text-primary">
                See NCERT Textbooks <ExternalLink className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>
      </Reveal>

      {/* Direct Links Class XI & XII */}
      <Reveal delay={0.05}>
        <h3 className="text-2xl font-extrabold mb-2">NCERT Direct Links (Class XI & XII)</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Open the subject page below to download chapter-wise PDFs from NCERT (official site).
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {directLinks.map((g) => (
            <GroupCard key={g.title} group={g} />
          ))}
        </div>
      </Reveal>

      {/* Classes 6 to 10 */}
      <Reveal delay={0.05}>
        <h3 className="text-2xl font-extrabold mb-2">NCERT — Classes 6 to 10</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Quick access to NCERT textbooks for middle and secondary school (Class 6–10). Click a card to open the NCERT class page.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {classes6to10.map((c) => (
            <a
              key={c.cls}
              href={c.href}
              {...ext}
              className="group relative rounded-2xl border border-border bg-card-soft p-5 cursor-pointer overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative font-bold text-lg">{c.cls}</div>
              <div className="relative mt-2 text-xs text-muted-foreground leading-relaxed">{c.subjects}</div>
            </a>
          ))}
        </div>
      </Reveal>

      {/* Class-wise Subjects 6-10 */}
      <Reveal delay={0.05}>
        <h3 className="text-2xl font-extrabold mb-2">NCERT — Class-wise Subjects (6–10)</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Direct links to NCERT subject pages for each class. Open a subject to download chapter PDFs from NCERT.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {classSubjects.map((g) => (
            <GroupCard key={g.title} group={g} />
          ))}
        </div>
        <div className="grid">
          <GroupCard group={class10} />
        </div>
      </Reveal>
    </section>
  );
};

export default BooksSection;
