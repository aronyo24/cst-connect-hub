import { Link } from "react-router-dom";
import { Users, BookOpen, Bell, GraduationCap, ArrowRight } from "lucide-react";

const links = [
  {
    title: "Our Teachers",
    description: "Meet our experienced faculty members dedicated to your success",
    icon: Users,
    path: "/teachers",
    color: "from-primary to-primary/80",
  },
  {
    title: "Academics",
    description: "Explore semester-wise subjects, labs, and curriculum details",
    icon: BookOpen,
    path: "/academics",
    color: "from-secondary to-secondary/80",
  },
  {
    title: "Notice Board",
    description: "Stay updated with latest announcements and important notices",
    icon: Bell,
    path: "/notices",
    color: "from-accent to-accent/80",
  },
  {
    title: "Student Corner",
    description: "Resources, career guidance, and study tips for students",
    icon: GraduationCap,
    path: "/student-corner",
    color: "from-primary to-secondary",
  },
];

export function QuickLinks() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Quick Access
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Navigate easily to find what you need — from teacher profiles to academic resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className="group relative p-6 rounded-2xl bg-card border border-border shadow-soft card-hover overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-4 shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                <link.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {link.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                {link.description}
              </p>

              <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
