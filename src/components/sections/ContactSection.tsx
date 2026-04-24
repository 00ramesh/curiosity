import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState, FormEvent } from "react";

const PHONES = ["8299281153", "8787011905", "8840844774"] as const;
const EMAIL = "institutecuriosity@gmail.com";
const ADDRESS =
  "N.15, BDS, VDA Colony, Badi Gaibi, Near Shitla Mata Temple, Mahmoorganj, Varanasi.";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="container py-24 scroll-mt-20">
      <Reveal>
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-flex px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider">
            We'd love to hear from you
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold">Get in <span className="text-gradient-blue">Touch</span></h2>
          <p className="mt-4 text-muted-foreground">Questions about admissions, classes, or scheduling? Reach out — we usually reply same day.</p>
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-5 gap-8 items-stretch">
        <Reveal className="lg:col-span-2 flex flex-col gap-4 h-full">
          <motion.div whileHover={{ y: -4 }} className="flex-1 flex items-center gap-4 bg-card-soft border border-border rounded-2xl p-5 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center shadow-glow flex-shrink-0">
              <Phone className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Call us</div>
              <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm font-semibold">
                {PHONES.map((p) => (
                  <a key={p} href={`tel:${p}`} className="hover:text-primary transition-colors">
                    {p}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.a href={`mailto:${EMAIL}`} whileHover={{ y: -4 }} className="flex-1 flex items-center gap-4 bg-card-soft border border-border rounded-2xl p-5 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center shadow-glow flex-shrink-0">
              <Mail className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Email us</div>
              <div className="font-semibold truncate">{EMAIL}</div>
            </div>
          </motion.a>

          <motion.div whileHover={{ y: -4 }} className="flex-1 flex items-center gap-4 bg-card-soft border border-border rounded-2xl p-5">
            <div className="w-12 h-12 rounded-xl bg-secondary grid place-items-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Visit</div>
              <div className="font-semibold">Curiosity Institute Campus</div>
              <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{ADDRESS}</div>
              <div className="text-sm text-muted-foreground">Mon–Sat · 9:00 AM – 7:00 PM</div>
            </div>
          </motion.div>
        </Reveal>

        <Reveal delay={0.2} className="lg:col-span-3 h-full">
          <form onSubmit={handleSubmit} className="h-full bg-card-soft border border-border rounded-3xl p-8 md:p-10 flex flex-col gap-5 shadow-soft">
            <div>
              <h3 className="text-2xl font-bold">Send a message</h3>
              <p className="text-sm text-muted-foreground mt-1">Fill the form — it will open your email app pre-filled.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Your name</label>
                <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Aarav Sharma" className="bg-background/60 border-border h-12" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Your email</label>
                <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="bg-background/60 border-border h-12" />
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <label className="text-sm font-medium mb-2 block">Message</label>
              <Textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your child's class and what you're looking for..." className="bg-background/60 border-border flex-1 min-h-[160px] resize-none" />
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button type="submit" variant="hero" size="lg">
                Send message <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
