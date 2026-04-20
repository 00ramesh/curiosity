import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/classes", label: "Classes" },
  { to: "/team", label: "Our Team" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-500 ${
        scrolled
          ? "bg-background/75 backdrop-blur-xl border-b border-border/60 shadow-soft"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <motion.img
            src={logo}
            alt="Curiosity Institute logo"
            width={36}
            height={36}
            whileHover={{ rotate: [0, -8, 8, 0] }}
            transition={{ duration: 0.6 }}
            className="w-9 h-9 object-contain drop-shadow-[0_4px_12px_hsl(var(--primary)/0.4)]"
          />
          <div className="leading-tight">
            <div className="font-bold text-lg tracking-tight">Curiosity</div>
            <div className="text-[10px] text-muted-foreground -mt-0.5 uppercase tracking-[0.18em]">
              Institute
            </div>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-lg bg-primary/10 border border-primary/30"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild variant="hero" size="default">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden w-10 h-10 grid place-items-center rounded-lg border border-border"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border"
        >
          <ul className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-sm font-medium ${
                      isActive ? "bg-primary/10 text-primary" : "text-foreground/80"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild variant="hero" className="w-full">
                <Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
