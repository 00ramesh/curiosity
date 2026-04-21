import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-border/60 bg-card/40 backdrop-blur">
      <div className="container py-14 grid gap-10 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Curiosity Institute logo" width={40} height={40} loading="lazy" className="w-10 h-10 object-contain" />
            <span className="font-bold text-lg">Curiosity Institute</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Cultivating minds, harvesting future. Modern coaching for classes 1–8, all boards.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#classes" className="hover:text-primary transition-colors">Classes</a></li>
            <li><a href="#team" className="hover:text-primary transition-colors">Our Team</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-primary" /> 8299281153</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-primary" /> institutecuriosity@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary" /> Curiosity Institute Campus</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Follow</h4>
          <div className="flex gap-3">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 grid place-items-center rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-0.5"
                aria-label="social"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
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
