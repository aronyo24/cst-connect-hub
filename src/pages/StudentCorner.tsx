import { Layout } from "@/components/layout/Layout";
import { GraduationCap, Map, BookOpen, Briefcase, Lightbulb, Code, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const roadmap = [
  {
    semester: "1st - 2nd",
    title: "Foundation Phase",
    focus: "Build strong fundamentals in mathematics, physics, and basic computing concepts",
    skills: ["Computer Basics", "Problem Solving", "Mathematics", "English Communication"],
    color: "from-primary to-primary/80",
  },
  {
    semester: "3rd - 4th",
    title: "Core Development",
    focus: "Dive deep into programming, data structures, and system understanding",
    skills: ["C/C++ Programming", "Data Structures", "Digital Electronics", "Database Concepts"],
    color: "from-secondary to-secondary/80",
  },
  {
    semester: "5th - 6th",
    title: "Specialization",
    focus: "Focus on web development, networking, and software engineering practices",
    skills: ["Web Development", "Networking", "Software Engineering", "Database Management"],
    color: "from-accent to-accent/80",
  },
  {
    semester: "7th - 8th",
    title: "Industry Ready",
    focus: "Advanced technologies, real-world projects, and industrial training",
    skills: ["Cloud Computing", "Mobile Development", "Project Work", "Industry Internship"],
    color: "from-primary to-secondary",
  },
];

const studyTips = [
  {
    title: "Practice Coding Daily",
    description: "Spend at least 2 hours daily on coding practice. Use platforms like HackerRank, LeetCode, or Codeforces.",
    icon: Code,
  },
  {
    title: "Build Real Projects",
    description: "Apply theoretical knowledge by building projects. Start small and gradually increase complexity.",
    icon: Lightbulb,
  },
  {
    title: "Understand Concepts",
    description: "Focus on understanding core concepts rather than memorizing. Use visualizations and diagrams.",
    icon: BookOpen,
  },
  {
    title: "Collaborate & Learn",
    description: "Study in groups, participate in coding clubs, and learn from peers. Teaching others helps retention.",
    icon: GraduationCap,
  },
];

const careerPaths = [
  { title: "Software Developer", demand: "High", skills: "Programming, Problem Solving, OOP" },
  { title: "Web Developer", demand: "Very High", skills: "HTML, CSS, JavaScript, PHP/Laravel" },
  { title: "Network Administrator", demand: "High", skills: "Networking, Security, Linux" },
  { title: "Database Administrator", demand: "Medium", skills: "SQL, Database Design, Optimization" },
  { title: "Mobile App Developer", demand: "High", skills: "Android/iOS, React Native, Flutter" },
  { title: "Cybersecurity Analyst", demand: "Very High", skills: "Security, Ethical Hacking, Compliance" },
];

const StudentCorner = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="container relative mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-up">
            Student Corner
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up stagger-1">
            Your guide to academic success, career development, and skill building
          </p>
        </div>
      </section>

      {/* Semester Roadmap */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Map className="w-4 h-4" />
              Journey Map
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Your Academic Roadmap
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Navigate through your 4-year diploma journey with clear milestones and skill objectives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((phase, index) => (
              <div
                key={phase.semester}
                className="relative group bg-card rounded-2xl border border-border shadow-soft card-hover p-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Connection Line */}
                {index < roadmap.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border z-10">
                    <ArrowRight className="absolute -right-1 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  </div>
                )}

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center mb-4 shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-primary-foreground font-bold">{phase.semester}</span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{phase.focus}</p>

                <div className="space-y-2">
                  {phase.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      <span className="text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Tips */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              Study Smart
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Tips for Success
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proven strategies to excel in your CST studies and build a strong foundation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studyTips.map((tip, index) => (
              <div
                key={tip.title}
                className="bg-card rounded-2xl border border-border shadow-soft p-6 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <tip.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Guidance */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <Briefcase className="w-4 h-4" />
              Career Paths
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Your Future Awaits
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore exciting career opportunities in the tech industry after completing your diploma
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {careerPaths.map((career, index) => (
              <div
                key={career.title}
                className="bg-card rounded-2xl border border-border shadow-soft p-6 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">{career.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    career.demand === "Very High" 
                      ? 'bg-secondary/10 text-secondary' 
                      : career.demand === "High"
                      ? 'bg-primary/10 text-primary'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {career.demand} Demand
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Key Skills: </span>
                  {career.skills}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              Explore Internship Opportunities
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StudentCorner;
