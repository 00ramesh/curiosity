import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Reveal from "@/components/Reveal";
import { Camera, Sparkles } from "lucide-react";
import gallery1 from "@/assets/1.jpeg";
import gallery2 from "@/assets/2.jpeg";
import gallery3 from "@/assets/3.jpeg";
import gallery4 from "@/assets/4.jpeg";
import gallery5 from "@/assets/5.jpeg";
import gallery6 from "@/assets/6.jpeg";
import gallery7 from "@/assets/7.jpeg";
import gallery8Video from "@/assets/8.mp4";

const photos = [
  { media: "image" as const, src: gallery1, caption: "Curiosity moments", tag: "Gallery" },
  { media: "image" as const, src: gallery2, caption: "Curiosity moments", tag: "Gallery" },
  { media: "image" as const, src: gallery3, caption: "Curiosity moments", tag: "Gallery" },
  { media: "image" as const, src: gallery4, caption: "Curiosity moments", tag: "Gallery" },
  { media: "image" as const, src: gallery5, caption: "Curiosity moments", tag: "Gallery" },
  { media: "image" as const, src: gallery6, caption: "Curiosity moments", tag: "Gallery" },
  { media: "image" as const, src: gallery7, caption: "Curiosity moments", tag: "Gallery" },
  { media: "video" as const, src: gallery8Video, caption: "Campus reel", tag: "Video" },
];

const GalleryCarousel = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="gallery" className="container py-20 scroll-mt-20">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" /> Moments · Memories
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">
            Our <span className="text-gradient-blue">Gallery</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Glimpses from the inauguration of Curiosity Institute — where the journey began.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[plugin.current]}
            className="relative"
          >
            <CarouselContent>
              {photos.map((p, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div className="group relative rounded-3xl overflow-hidden border border-border bg-card-soft hover:border-primary/50 transition-all">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      {p.media === "image" ? (
                        <img
                          src={p.src}
                          alt={p.caption}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                      ) : (
                        <video
                          src={p.src}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          muted
                          loop
                          playsInline
                          autoPlay
                        />
                      )}
                      {/* Theme gradient overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/20 mix-blend-overlay" />

                      {/* Top tag */}
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-primary/40 text-primary text-[11px] font-bold uppercase tracking-wider">
                        <Sparkles className="w-3 h-3" /> {p.tag}
                      </div>

                      {/* Bottom caption */}
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <div className="text-xs text-primary/90 uppercase tracking-[0.2em] font-semibold">
                          Curiosity · 2024
                        </div>
                        <div className="mt-1.5 text-xl md:text-2xl font-extrabold leading-tight text-foreground drop-shadow-md">
                          {p.caption}
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

export default GalleryCarousel;
