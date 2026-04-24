import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Reveal from "@/components/Reveal";
import { Trophy, Sparkles } from "lucide-react";
import topperYastharth from "@/assets/topper-yastharth.jpeg";
import topperRajnandini12 from "@/assets/topper-rajnandini-12.jpeg";
import topperSachin from "@/assets/topper-sachin.jpeg";
import topperRajnandini10 from "@/assets/topper-rajnandini-10.jpeg";

const toppers = [
  { img: topperYastharth, name: "Yastharth Pandey", roll: "23243171", className: "10th CBSE", percent: "80.1%" },
  { img: topperRajnandini12, name: "Raj Nandini Roy", roll: "14067285", className: "12th Commerce", percent: "95.8%" },
  { img: topperSachin, name: "Sachin Snehit", roll: "23245909", className: "10th CBSE", percent: "92.4%" },
  { img: topperRajnandini10, name: "Raj Nandini Roy", roll: "23245905", className: "10th CBSE", percent: "95.8%" },
];

const TopperCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }));

  return (
    <section className="container py-20">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 fill-accent" /> Hall of Fame · 2024–25
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">
            Our <span className="text-gradient-blue">Star Achievers</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Celebrating the brilliant minds who turned curiosity into excellence.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative">
          {/* Decorative glows */}
          <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[plugin.current]}
            className="relative"
          >
            <CarouselContent>
              {toppers.map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/2">
                  <div className="group relative rounded-3xl overflow-hidden border border-border bg-card-soft hover:border-primary/50 transition-all">
                    {/* Image */}
                    <div className="relative aspect-[2.4/1] overflow-hidden">
                      <img
                        src={t.img}
                        alt={`${t.name} - ${t.percent} in ${t.className}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Gradient overlay matching theme */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 mix-blend-overlay" />

                      {/* Top badge */}
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-accent/40 text-accent text-[11px] font-bold uppercase tracking-wider">
                        <Sparkles className="w-3 h-3 fill-accent" /> Topper
                      </div>

                      {/* Percent badge */}
                      <div className="absolute top-4 right-4 px-4 py-2 rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-extrabold text-lg shadow-glow">
                        {t.percent}
                      </div>
                    </div>

                    {/* Bottom info bar */}
                    <div className="relative px-6 py-5 border-t border-border/60 bg-card-soft">
                      <div className="flex items-end justify-between gap-4">
                        <div className="min-w-0">
                          <div className="text-xs text-muted-foreground uppercase tracking-wider">Class · {t.className}</div>
                          <div className="mt-1 text-xl font-extrabold truncate">{t.name}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">Roll No. {t.roll}</div>
                        </div>
                        <div className="shrink-0 inline-flex items-center gap-1.5 text-accent text-xs font-semibold">
                          <Trophy className="w-4 h-4 fill-accent" />
                          Curiosity Pride
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </Reveal>
    </section>
  );
};

export default TopperCarousel;
