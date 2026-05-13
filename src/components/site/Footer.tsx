import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24 pb-20 md:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="TJ's" className="h-12 w-12 object-contain invert" />
            <div className="font-serif text-xl">TJ's Beauty Line</div>
          </div>
          <p className="text-sm opacity-80">
            A sanctuary of beauty and wellness in the heart of Gulu, Uganda.
          </p>
          <div className="flex gap-3 mt-4">
            <Instagram className="h-4 w-4" />
            <Facebook className="h-4 w-4" />
            <Twitter className="h-4 w-4" />
          </div>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/gift-cards">Gift Cards</Link></li>
            <li><Link to="/blog">Journal</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4">Support</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/booking">Book Appointment</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h4 className="font-serif text-lg mb-4">Visit Us</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" /><span>Gulu City, Northern Uganda</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5" /><span>+256 700 000 000</span></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5" /><span>hello@tjsbeautyline.ug</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs flex flex-col sm:flex-row gap-2 justify-between opacity-70 text-center sm:text-left">
          <span>© {new Date().getFullYear()} TJ's Beauty Line. All rights reserved.</span>
          <span>Crafted with care in Gulu, Uganda</span>
        </div>
      </div>
    </footer>
  );
}
