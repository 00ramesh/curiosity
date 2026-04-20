
import FloatingDoodles from "@/components/FloatingDoodles";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useState, FormEvent } from "react";

const PHONE = "8299281153";
const EMAIL = "institutecuriosity@gmail.com";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent("Hello Curiosity Institute, I'd like to know more about admissions.");
    window.open(`https://wa.me/91${PHONE}?text=${text}`, "_blank");
  };

  return (
    <>
      <section className="relative bg-hero pt-32 pb-20 overflow-hidden">
        <FloatingDoodles />
        <div className="container relative text-center">
          <Reveal>
            <span className="inline-flex px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider">
              We'd love to hear from you
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold">
              Get in <span className="text-gradient-blue">Touch</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-muted-foreground max-w-2xl mx-auto text-lg">
              Questions about admissions, classes, or scheduling? Reach out — we usually reply same day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container py-16 grid lg:grid-cols-5 gap-8">
        {/* Contact info */}
        <Reveal className="lg:col-span-2 space-y-4">
          <motion.a
            href={`tel:${PHONE}`}
            whileHover={{ y: -4 }}
            className="flex items-center gap-4 bg-card-soft border border-border rounded-2xl p-5 hover:border-primary/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center shadow-glow">
              <Phone className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Call us</div>
              <div className="font-semibold text-lg">{PHONE}</div>
            </div>
          </motion.a>

          <motion.a
            href={`mailto:${EMAIL}`}
            whileHover={{ y: -4 }}
            className="flex items-center gap-4 bg-card-soft border border-border rounded-2xl p-5 hover:border-primary/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center shadow-glow">
              <Mail className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Email us</div>
              <div className="font-semibold truncate">{EMAIL}</div>
            </div>
          </motion.a>

          <motion.button
            onClick={openWhatsApp}
            whileHover={{ y: -4 }}
            className="w-full flex items-center gap-4 bg-card-soft border border-border rounded-2xl p-5 hover:border-accent/50 transition-colors text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-accent grid place-items-center shadow-amber">
              <MessageCircle className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">WhatsApp</div>
              <div className="font-semibold text-lg">Chat instantly</div>
            </div>
          </motion.button>

          <motion.div
            whileHover={{ y: -4 }}
            className="flex items-start gap-4 bg-card-soft border border-border rounded-2xl p-5"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary grid place-items-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Visit</div>
              <div className="font-semibold">Curiosity Institute Campus</div>
              <div className="text-sm text-muted-foreground">Mon–Sat · 9:00 AM – 7:00 PM</div>
            </div>
          </motion.div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.2} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="bg-card-soft border border-border rounded-3xl p-8 md:p-10 space-y-5 shadow-soft"
          >
            <div>
              <h2 className="text-2xl font-bold">Send a message</h2>
              <p className="text-sm text-muted-foreground mt-1">Fill the form — it will open your email app pre-filled.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Your name</label>
                <Input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Aarav Sharma"
                  className="bg-background/60 border-border h-12"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Your email</label>
                <Input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="bg-background/60 border-border h-12"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <Textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your child's class and what you're looking for..."
                className="bg-background/60 border-border"
              />
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button type="submit" variant="hero" size="lg">
                Send message <Send className="w-4 h-4" />
              </Button>
              <Button type="button" variant="glass" size="lg" onClick={openWhatsApp}>
                Or WhatsApp us
              </Button>
            </div>
          </form>
        </Reveal>
      </section>
    </>
  );
};

export default Contact;
