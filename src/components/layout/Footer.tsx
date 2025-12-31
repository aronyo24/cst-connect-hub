import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail, Facebook, Youtube, Globe } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Teachers", path: "/teachers" },
  { name: "Academics", path: "/academics" },
  { name: "Notices", path: "/notices" },
];

const studentLinks = [
  { name: "Student Corner", path: "/student-corner" },
  { name: "Gallery", path: "/gallery" },
  { name: "Career Guidance", path: "/student-corner" },
  { name: "Study Tips", path: "/student-corner" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold">CST Department</h3>
                <p className="text-sm text-background/70">Patuakhali Polytechnic</p>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Empowering students with cutting-edge technology education and practical skills for a successful career in the digital world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Resources */}
          <div>
            <h4 className="font-semibold mb-4">Student Resources</h4>
            <ul className="space-y-2">
              {studentLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Patuakhali Polytechnic Institute, Patuakhali, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="w-4 h-4 shrink-0" />
                <span>cst@ppi.edu.bd</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© 2024 CST Department, Patuakhali Polytechnic Institute. All rights reserved.</p>
            <p>Designed with 💙 for future technologists</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
