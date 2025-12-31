import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { BookOpen, Beaker, Clock, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const semesters = [
  {
    id: 1,
    name: "1st Semester",
    subjects: [
      { name: "Bangla", code: "65711", type: "Theory", credits: 3 },
      { name: "English", code: "65712", type: "Theory", credits: 3 },
      { name: "Mathematics-1", code: "65911", type: "Theory", credits: 4 },
      { name: "Physics-1", code: "65912", type: "Theory", credits: 4 },
      { name: "Computer Application", code: "66611", type: "Theory + Lab", credits: 4 },
    ],
    labs: ["Computer Application Lab", "Physics Lab"],
  },
  {
    id: 2,
    name: "2nd Semester",
    subjects: [
      { name: "Social Science", code: "65721", type: "Theory", credits: 3 },
      { name: "Mathematics-2", code: "65921", type: "Theory", credits: 4 },
      { name: "Chemistry", code: "65922", type: "Theory", credits: 4 },
      { name: "Electrical Circuits", code: "66621", type: "Theory + Lab", credits: 4 },
      { name: "Computer Fundamentals", code: "66622", type: "Theory + Lab", credits: 4 },
    ],
    labs: ["Electrical Circuits Lab", "Computer Fundamentals Lab"],
  },
  {
    id: 3,
    name: "3rd Semester",
    subjects: [
      { name: "Mathematics-3", code: "65931", type: "Theory", credits: 4 },
      { name: "Electronic Devices", code: "66631", type: "Theory + Lab", credits: 4 },
      { name: "Structured Programming", code: "66632", type: "Theory + Lab", credits: 5 },
      { name: "Digital Electronics", code: "66633", type: "Theory + Lab", credits: 4 },
    ],
    labs: ["Electronics Lab", "Programming Lab", "Digital Lab"],
  },
  {
    id: 4,
    name: "4th Semester",
    subjects: [
      { name: "Object Oriented Programming", code: "66641", type: "Theory + Lab", credits: 5 },
      { name: "Data Structure", code: "66642", type: "Theory + Lab", credits: 5 },
      { name: "Microprocessor", code: "66643", type: "Theory + Lab", credits: 4 },
      { name: "Communication System", code: "66644", type: "Theory", credits: 3 },
    ],
    labs: ["OOP Lab", "Data Structure Lab", "Microprocessor Lab"],
  },
  {
    id: 5,
    name: "5th Semester",
    subjects: [
      { name: "Database Management", code: "66651", type: "Theory + Lab", credits: 5 },
      { name: "Computer Architecture", code: "66652", type: "Theory", credits: 4 },
      { name: "Visual Programming", code: "66653", type: "Theory + Lab", credits: 5 },
      { name: "Operating System", code: "66654", type: "Theory + Lab", credits: 4 },
    ],
    labs: ["Database Lab", "Visual Programming Lab", "OS Lab"],
  },
  {
    id: 6,
    name: "6th Semester",
    subjects: [
      { name: "Computer Networks", code: "66661", type: "Theory + Lab", credits: 5 },
      { name: "Web Development", code: "66662", type: "Theory + Lab", credits: 5 },
      { name: "Software Engineering", code: "66663", type: "Theory", credits: 4 },
      { name: "System Analysis", code: "66664", type: "Theory", credits: 3 },
    ],
    labs: ["Networking Lab", "Web Development Lab"],
  },
  {
    id: 7,
    name: "7th Semester",
    subjects: [
      { name: "Advanced Web Development", code: "66671", type: "Theory + Lab", credits: 5 },
      { name: "Mobile Application", code: "66672", type: "Theory + Lab", credits: 5 },
      { name: "Network Security", code: "66673", type: "Theory + Lab", credits: 4 },
      { name: "Project-1", code: "66674", type: "Project", credits: 3 },
    ],
    labs: ["Advanced Web Lab", "Mobile App Lab", "Security Lab"],
  },
  {
    id: 8,
    name: "8th Semester",
    subjects: [
      { name: "Cloud Computing", code: "66681", type: "Theory + Lab", credits: 4 },
      { name: "Artificial Intelligence", code: "66682", type: "Theory + Lab", credits: 4 },
      { name: "Industrial Training", code: "66683", type: "Internship", credits: 6 },
      { name: "Project-2", code: "66684", type: "Project", credits: 5 },
    ],
    labs: ["Cloud Lab", "AI Lab", "Project Workshop"],
  },
];

const Academics = () => {
  const [selectedSemester, setSelectedSemester] = useState("1");

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="container relative mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-up">
            Academic Curriculum
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up stagger-1">
            Explore our comprehensive 4-year diploma program structured across 8 semesters
          </p>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="1" value={selectedSemester} onValueChange={setSelectedSemester}>
            {/* Semester Tabs */}
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent mb-12">
              {semesters.map((sem) => (
                <TabsTrigger
                  key={sem.id}
                  value={sem.id.toString()}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-soft"
                >
                  Semester {sem.id}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Semester Content */}
            {semesters.map((semester) => (
              <TabsContent
                key={semester.id}
                value={semester.id.toString()}
                className="animate-fade-up"
              >
                <div className="max-w-4xl mx-auto">
                  {/* Semester Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center">
                      <span className="text-xl font-bold text-primary-foreground">{semester.id}</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">{semester.name}</h2>
                      <p className="text-muted-foreground">
                        {semester.subjects.length} subjects • {semester.labs.length} lab sessions
                      </p>
                    </div>
                  </div>

                  {/* Subjects Table */}
                  <div className="bg-card rounded-2xl border border-border shadow-soft overflow-hidden mb-8">
                    <div className="grid grid-cols-12 gap-4 p-4 bg-muted/50 font-semibold text-sm text-foreground">
                      <div className="col-span-5">Subject Name</div>
                      <div className="col-span-3">Code</div>
                      <div className="col-span-2">Type</div>
                      <div className="col-span-2 text-right">Credits</div>
                    </div>
                    {semester.subjects.map((subject, idx) => (
                      <div
                        key={subject.code}
                        className={`grid grid-cols-12 gap-4 p-4 items-center text-sm ${
                          idx !== semester.subjects.length - 1 ? 'border-b border-border' : ''
                        } hover:bg-muted/30 transition-colors`}
                      >
                        <div className="col-span-5 flex items-center gap-3">
                          <BookOpen className="w-4 h-4 text-primary" />
                          <span className="font-medium text-foreground">{subject.name}</span>
                        </div>
                        <div className="col-span-3 text-muted-foreground">{subject.code}</div>
                        <div className="col-span-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            subject.type.includes('Lab') 
                              ? 'bg-secondary/10 text-secondary' 
                              : subject.type === 'Project' || subject.type === 'Internship'
                              ? 'bg-accent/10 text-accent'
                              : 'bg-primary/10 text-primary'
                          }`}>
                            {subject.type}
                          </span>
                        </div>
                        <div className="col-span-2 text-right font-medium text-foreground">
                          {subject.credits}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Labs Section */}
                  <div className="bg-secondary/5 rounded-2xl border border-secondary/20 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Beaker className="w-5 h-5 text-secondary" />
                      <h3 className="font-semibold text-foreground">Laboratory Sessions</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {semester.labs.map((lab) => (
                        <div
                          key={lab}
                          className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border shadow-soft"
                        >
                          <Clock className="w-4 h-4 text-secondary" />
                          <span className="text-sm text-foreground">{lab}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
