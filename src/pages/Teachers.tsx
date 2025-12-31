import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, Award, BookOpen, User } from "lucide-react";

const teachers = [
  {
    id: 1,
    name: "Md. Mohiuddin",
    designation: "Head of Department",
    role: "Senior Instructor",
    specialization: "Computer Networks, System Administration",
    email: "mohiuddin@ppi.edu.bd",
    phone: "+880 1712-345678",
  },
  {
    id: 2,
    name: "Md. Ahsan Habib Abir",
    designation: "Instructor",
    role: "Faculty Member",
    specialization: "Web Development, Database Management",
    email: "ahsan.abir@ppi.edu.bd",
    phone: "+880 1712-345679",
  },
  {
    id: 3,
    name: "Md. Mojibur Rahman",
    designation: "Instructor",
    role: "Faculty Member",
    specialization: "Programming, Software Engineering",
    email: "mojibur@ppi.edu.bd",
    phone: "+880 1712-345680",
  },
  {
    id: 4,
    name: "Md. Delwar Hossain",
    designation: "Instructor",
    role: "Faculty Member",
    specialization: "Hardware, Electronics",
    email: "delwar@ppi.edu.bd",
    phone: "+880 1712-345681",
  },
  {
    id: 5,
    name: "Hira Mali",
    designation: "Instructor",
    role: "Faculty Member",
    specialization: "Data Structures, Algorithms",
    email: "hira.mali@ppi.edu.bd",
    phone: "+880 1712-345682",
  },
  {
    id: 6,
    name: "Md. Al-Shahriar Rokon",
    designation: "Junior Instructor",
    role: "Faculty Member",
    specialization: "Mobile Development, UI/UX",
    email: "shahriar.rokon@ppi.edu.bd",
    phone: "+880 1712-345683",
  },
  {
    id: 7,
    name: "Bithi",
    designation: "Junior Instructor",
    role: "Faculty Member",
    specialization: "Mathematics, Logic Design",
    email: "bithi@ppi.edu.bd",
    phone: "+880 1712-345684",
  },
  {
    id: 8,
    name: "Md. Imran Hossain",
    designation: "Junior Instructor",
    role: "Faculty Member",
    specialization: "Cybersecurity, Cloud Computing",
    email: "imran@ppi.edu.bd",
    phone: "+880 1712-345685",
  },
];

const Teachers = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="container relative mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-up">
            Our Faculty Members
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up stagger-1">
            Meet our dedicated team of educators committed to shaping the future of technology
          </p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teachers.map((teacher, index) => (
              <div
                key={teacher.id}
                className="group bg-card rounded-2xl border border-border shadow-soft card-hover overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Avatar Section */}
                <div className="relative p-6 pb-0">
                  <div className="relative mx-auto w-28 h-28 rounded-full gradient-primary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <User className="w-14 h-14 text-primary-foreground" />
                    {teacher.designation === "Head of Department" && (
                      <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full gradient-accent flex items-center justify-center shadow-lg">
                        <Award className="w-4 h-4 text-accent-foreground" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {teacher.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-1">
                    {teacher.designation}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-4">
                    <BookOpen className="w-3 h-3" />
                    <span>{teacher.specialization}</span>
                  </div>

                  {/* Contact */}
                  <div className="space-y-2 pt-4 border-t border-border">
                    <a
                      href={`mailto:${teacher.email}`}
                      className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{teacher.email}</span>
                    </a>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <span>{teacher.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Teachers;
