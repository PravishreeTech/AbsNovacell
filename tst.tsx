import { Newspaper, Microscope, Award, TrendingUp, Lightbulb, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ContentItem {
  title: string;
  description: string;
  icon: React.ElementType;
  category: string;
  date: string;
}

const newsItems: ContentItem[] = [
  {
    title: "Promising Results from Novel Nextgen-AAV Vector Platform",
    description: "The company will share promising results from its novel Nextgen-AAV vector platform, highlighting next-generation approaches to targeted and durable gene delivery.",
    icon: Microscope,
    category: "Research",
    date: "January 2024"
  },
  {
    title: "ABSNOVACELL Recognized as \"Top Emerging Biopharma to Watch\" by Global Life Sciences Review",
    description: "This recognition underscores our commitment to advancing innovative biologics and cell & gene therapy programs that address high-unmet medical needs.",
    icon: Award,
    category: "Recognition",
    date: "December 2023"
  }
];

const blogItems: ContentItem[] = [
  {
    title: "The Future of Biosimilars: Expanding Access to Biologic Medicines",
    description: "A deep dive into how biosimilars are transforming global healthcare by driving affordability, accessibility, and sustainability in biologic therapies.",
    icon: TrendingUp,
    category: "Industry Insights",
    date: "5 min read"
  },
  {
    title: "Understanding AAV Vectors: The Engine Behind Next-Generation Gene Therapies",
    description: "An educational overview of adeno-associated virus (AAV) technology—its unique advantages, clinical applications, and role in ABSNOVACELL's gene therapy pipeline.",
    icon: Lightbulb,
    category: "Science",
    date: "8 min read"
  },
  {
    title: "Quality by Design: The ABSNOVACELL Approach to Manufacturing Excellence",
    description: "A look inside our development philosophy—integrating innovation, regulatory compliance, and precision engineering to ensure consistent product quality.",
    icon: Settings,
    category: "Innovation",
    date: "6 min read"
  }
];

function ContentCard({ item, type }: { item: ContentItem; type: "news" | "blog" }) {
  const Icon = item.icon;
  
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
      <CardHeader>
        <div className="flex items-start justify-between gap-4 mb-2">
          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Icon className="h-5 w-5" />
          </div>
          <Badge variant="secondary" className="text-xs">
            {item.category}
          </Badge>
        </div>
        <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
          {item.title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {item.date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground/80 leading-relaxed">
          {item.description}
        </p>
        <button className="mt-4 text-sm font-medium text-primary hover:underline flex items-center gap-1 group-hover:gap-2 transition-all">
          Read more
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      </CardContent>
    </Card>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <Newspaper className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              ABSNOVACELL Insights & Updates
            </h1>
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl">
            Stay informed about our latest company investor relationships, news, scientific presentations, and perspectives on the biopharmaceutical industry.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* News Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-primary rounded-full"></div>
            <h2 className="text-3xl font-bold text-foreground">Latest News</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {newsItems.map((item, index) => (
              <ContentCard key={index} item={item} type="news" />
            ))}
          </div>
        </section>

        {/* Blogs Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-primary rounded-full"></div>
            <h2 className="text-3xl font-bold text-foreground">Featured Blogs</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogItems.map((item, index) => (
              <ContentCard key={index} item={item} type="blog" />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-16 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 ABSNOVACELL. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
