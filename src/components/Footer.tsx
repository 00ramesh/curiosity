import logo from "@/assets/logo.png";
import {
  MessageCircle,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const BlueskyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 600 530" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M130 35c62 47 129 142 170 227 41-85 108-180 170-227 45-34 118-60 118 23 0 17-10 143-16 164-23 81-106 102-180 89 129 22 162 95 91 168-135 137-194-34-209-79-3-10-5-14-6-12-1-2-3 2-6 12-15 45-74 216-209 79-71-73-38-146 91-168-74 13-157-8-180-89-6-21-16-147-16-164 0-83 73-57 118-23z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-border/60 bg-card/40 backdrop-blur">
      <div className="container py-14 grid gap-10 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Curiosity Institute logo"
              width={40}
              height={40}
              loading="lazy"
              className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-lg">Curiosity Institute</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Cultivating Minds, Marvesting Future. Modern coaching for classes
            6–12, all boards.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#home" className="hover:text-primary transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="#classes"
                className="hover:text-primary transition-colors"
              >
                Classes
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-primary transition-colors">
                Our Team
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 text-primary" />
              <div className="flex flex-col gap-1">
                <a href="tel:+918299281153" className="hover:text-primary transition-colors">
                  +91 8299281153
                </a>
                <a href="tel:+918787011905" className="hover:text-primary transition-colors">
                  +91 8787011905
                </a>
                <a href="tel:+918840844774" className="hover:text-primary transition-colors">
                  +91 8840844774
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 text-primary" />{" "}
              institutecuriosity@gmail.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-primary" />
              <div>
                <div>Curiosity Institute Campus</div>
                <div className="mt-1 text-xs leading-relaxed text-muted-foreground/90">
                 Address: N.15, BDS, VDA Colony, Badi Gaibi, Near Shitla Mata Temple, Mahmoorganj, Varanasi.
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Follow</h4>
          <div className="flex gap-3">
            <a
              href="https://wa.me/+918299281153"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              aria-label="WhatsApp"
              className="w-10 h-10 grid place-items-center rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61569259322476"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              aria-label="Facebook"
              className="w-10 h-10 grid place-items-center rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/institutecuriosity"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              aria-label="Instagram"
              className="w-10 h-10 grid place-items-center rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              <Instagram className="w-4 h-4" />
            </a>
                 <a
              href="https://www.youtube.com/channel/UCgXj1-yLIbH3jc7Q9S7l7Zg"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube"
              aria-label="YouTube"
              className="w-10 h-10 grid place-items-center rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com/curiosity_ins?ref_src=twsrc%5Etfw"
              target="_blank"
              rel="noopener noreferrer"
              title="X / Twitter"
              aria-label="X / Twitter"
              className="w-10 h-10 grid place-items-center rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              <Twitter className="w-4 h-4" />
            </a>
       
            <a
              href="https://bsky.app/profile/curiosityinstitute.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              title="Bluesky"
              aria-label="Bluesky"
              className="w-10 h-10 grid place-items-center rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              <BlueskyIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Curiosity Institute. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
