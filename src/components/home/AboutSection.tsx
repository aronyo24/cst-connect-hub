import { CheckCircle, Target, Lightbulb, Award } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Industry-Ready Skills",
    description: "Curriculum designed with real-world applications and modern technologies",
  },
  {
    icon: Lightbulb,
    title: "Innovative Learning",
    description: "Hands-on lab sessions, projects, and practical problem-solving approaches",
  },
  {
    icon: Award,
    title: "Expert Faculty",
    description: "Learn from experienced professionals dedicated to student success",
  },
];

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <CheckCircle className="w-4 h-4" />
              About Our Department
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Shaping the Future of <span className="text-gradient">Technology Education</span>
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              The Computer Science & Technology Department at Patuakhali Polytechnic Institute is committed to nurturing skilled technologists. With a blend of theoretical knowledge and practical expertise, we prepare students for the rapidly evolving tech industry.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our comprehensive 4-year diploma program covers programming, database management, networking, web development, and emerging technologies, ensuring graduates are well-equipped for successful careers.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="absolute -inset-4 gradient-primary rounded-3xl opacity-10 blur-2xl" />
            <div className="relative bg-card rounded-2xl border border-border shadow-card p-8 lg:p-10">
              <h3 className="text-xl font-semibold text-foreground mb-6">Department at a Glance</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "2010", label: "Established" },
                  { value: "8", label: "Semesters" },
                  { value: "500+", label: "Alumni" },
                  { value: "100%", label: "Lab Access" },
                  { value: "8+", label: "Faculty Members" },
                  { value: "24+", label: "Subjects" },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-muted/50 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-sm text-center text-muted-foreground">
                  <span className="font-semibold text-primary">Mission:</span> To produce skilled technologists who contribute to national development through innovation and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
