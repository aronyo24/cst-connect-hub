import { Layout } from "@/components/layout/Layout";
import { Bell, Calendar, Download, ChevronRight, Search, Filter } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const notices = [
  {
    id: 1,
    title: "Semester Final Exam Schedule Released for 8th Semester",
    date: "2024-12-15",
    category: "Exam",
    important: true,
    description: "The final examination schedule for 8th semester students has been released. Please check the attached PDF for detailed timing and room assignments.",
    hasAttachment: true,
  },
  {
    id: 2,
    title: "Workshop on Web Development with Laravel Framework",
    date: "2024-12-10",
    category: "Event",
    important: false,
    description: "A hands-on workshop on Laravel framework will be conducted by industry experts. Registration is mandatory for all interested students.",
    hasAttachment: false,
  },
  {
    id: 3,
    title: "Industrial Visit to Dhaka Tech Park - Registration Open",
    date: "2024-12-08",
    category: "Tour",
    important: false,
    description: "Students are invited to register for the upcoming industrial visit to Dhaka Tech Park. Limited seats available on first-come-first-serve basis.",
    hasAttachment: true,
  },
  {
    id: 4,
    title: "Scholarship Application Deadline Extended to Dec 20",
    date: "2024-12-05",
    category: "Notice",
    important: true,
    description: "The deadline for merit scholarship applications has been extended. All eligible students are encouraged to apply with required documents.",
    hasAttachment: true,
  },
  {
    id: 5,
    title: "New Computer Lab Equipment Installation Complete",
    date: "2024-12-01",
    category: "Announcement",
    important: false,
    description: "The new computer lab with updated workstations is now operational. Students can access the lab during regular hours.",
    hasAttachment: false,
  },
  {
    id: 6,
    title: "Guest Lecture on Cybersecurity Trends - Dr. Rahman",
    date: "2024-11-28",
    category: "Event",
    important: false,
    description: "Distinguished professor Dr. Rahman will deliver a lecture on current cybersecurity trends and career opportunities in the field.",
    hasAttachment: false,
  },
  {
    id: 7,
    title: "Mid-Semester Exam Results Published",
    date: "2024-11-25",
    category: "Exam",
    important: true,
    description: "Mid-semester examination results for all semesters are now available on the department portal. Contact office for any discrepancies.",
    hasAttachment: false,
  },
  {
    id: 8,
    title: "Annual Sports Week Schedule Announced",
    date: "2024-11-20",
    category: "Event",
    important: false,
    description: "The annual sports week will be held from December 1-7. All students are encouraged to participate in various events.",
    hasAttachment: true,
  },
];

const categories = ["All", "Exam", "Event", "Notice", "Tour", "Announcement"];

const Notices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNotices = notices.filter((notice) => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          notice.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || notice.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="container relative mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-up">
            Notice Board
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up stagger-1">
            Stay updated with the latest announcements, events, and important information
          </p>
        </div>
      </section>

      {/* Notices Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search notices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Notices List */}
          <div className="space-y-4">
            {filteredNotices.map((notice, index) => (
              <div
                key={notice.id}
                className="group bg-card rounded-2xl border border-border shadow-soft card-hover p-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    notice.important ? 'gradient-accent' : 'bg-primary/10'
                  }`}>
                    <Bell className={`w-5 h-5 ${notice.important ? 'text-accent-foreground' : 'text-primary'}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {notice.important && (
                        <span className="px-2 py-0.5 text-xs font-semibold rounded-full gradient-accent text-accent-foreground">
                          Important
                        </span>
                      )}
                      <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                        {notice.category}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(notice.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {notice.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4">
                      {notice.description}
                    </p>

                    <div className="flex items-center gap-4">
                      {notice.hasAttachment && (
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Download PDF
                        </Button>
                      )}
                      <button className="flex items-center text-sm font-medium text-primary hover:underline">
                        Read more
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredNotices.length === 0 && (
            <div className="text-center py-12">
              <Bell className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No notices found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Notices;
