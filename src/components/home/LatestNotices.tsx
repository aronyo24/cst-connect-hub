import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bell, Calendar, ArrowRight, FileText } from "lucide-react";

const notices = [
  {
    id: 1,
    title: "Semester Final Exam Schedule Released",
    date: "2024-12-15",
    category: "Exam",
    important: true,
  },
  {
    id: 2,
    title: "Workshop on Web Development - Laravel Framework",
    date: "2024-12-10",
    category: "Event",
    important: false,
  },
  {
    id: 3,
    title: "Industrial Visit to Tech Park Announced",
    date: "2024-12-08",
    category: "Tour",
    important: false,
  },
  {
    id: 4,
    title: "Scholarship Application Deadline Extended",
    date: "2024-12-05",
    category: "Notice",
    important: true,
  },
];

export function LatestNotices() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-primary mb-2">
              <Bell className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Notice Board</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Latest Announcements
            </h2>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link to="/notices">
              View All Notices
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4">
          {notices.map((notice, index) => (
            <div
              key={notice.id}
              className="group flex items-center gap-4 p-4 lg:p-6 rounded-xl bg-card border border-border shadow-soft card-hover animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                notice.important 
                  ? 'gradient-accent' 
                  : 'bg-primary/10'
              }`}>
                <FileText className={`w-5 h-5 ${notice.important ? 'text-accent-foreground' : 'text-primary'}`} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  {notice.important && (
                    <span className="px-2 py-0.5 text-xs font-semibold rounded-full gradient-accent text-accent-foreground">
                      Important
                    </span>
                  )}
                  <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                    {notice.category}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                  {notice.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                <Calendar className="w-4 h-4" />
                <span>{new Date(notice.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>

              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
