import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Bell, GraduationCap, Sparkles, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-secondary/20 blur-2xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container relative mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Welcome to the Future of Technology</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up stagger-1">
            Computer Science &<br />
            <span className="text-accent">Technology</span> Department
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-up stagger-2">
            Patuakhali Polytechnic Institute — Empowering tomorrow's tech leaders with practical skills, innovative thinking, and industry-ready education.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-up stagger-3">
            <Button variant="accent" size="lg" asChild>
              <Link to="/academics">
                Explore Academics
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/teachers">Meet Our Faculty</Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-fade-up stagger-4">
            {[
              { icon: Users, label: "Expert Teachers", value: "8+" },
              { icon: BookOpen, label: "Semesters", value: "8" },
              { icon: GraduationCap, label: "Students", value: "500+" },
              { icon: Bell, label: "Lab Sessions", value: "24+" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-accent" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
