import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Filter, Search } from "lucide-react";
import { Header } from "@/components/Header";
import { SendProposalModal } from "@/components/proposals/SendProposalModal";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
const categories = [{
  id: "web-development",
  label: "Web Development"
}, {
  id: "mobile-development",
  label: "Mobile Development"
}, {
  id: "design",
  label: "Design"
}, {
  id: "writing",
  label: "Writing"
}, {
  id: "marketing",
  label: "Marketing"
}] as const;
const mockProjects = [{
  id: 1,
  title: "E-commerce Website Development",
  description: "Looking for an experienced developer to build a modern e-commerce website using React and Node.js.",
  budget: "₹50,000",
  timeline: "30 days",
  category: "Web Development"
}, {
  id: 2,
  title: "Mobile App UI/UX Design",
  description: "Need a talented designer to create intuitive and beautiful UI/UX for a fitness tracking app.",
  budget: "₹30,000",
  timeline: "15 days",
  category: "Design"
}, {
  id: 3,
  title: "Content Writing for Tech Blog",
  description: "Seeking a technical writer to create engaging blog posts about emerging technologies and industry trends.",
  budget: "₹25,000",
  timeline: "20 days",
  category: "Writing"
}, {
  id: 4,
  title: "Social Media Marketing Campaign",
  description: "Looking for a marketing expert to plan and execute a comprehensive social media campaign for our startup.",
  budget: "₹40,000",
  timeline: "45 days",
  category: "Marketing"
}, {
  id: 5,
  title: "iOS App Development",
  description: "Need an experienced iOS developer to create a food delivery app with real-time tracking features.",
  budget: "₹120,000",
  timeline: "60 days",
  category: "Mobile Development"
}, {
  id: 6,
  title: "WordPress Website Redesign",
  description: "Seeking a WordPress expert to redesign and optimize our existing business website.",
  budget: "₹35,000",
  timeline: "25 days",
  category: "Web Development"
}, {
  id: 7,
  title: "Logo and Brand Identity Design",
  description: "Looking for a creative designer to develop a complete brand identity package including logo, colors, and guidelines.",
  budget: "₹45,000",
  timeline: "20 days",
  category: "Design"
}, {
  id: 8,
  title: "SEO Content Writing",
  description: "Need an SEO-savvy writer to create optimized content for our e-commerce product pages.",
  budget: "₹20,000",
  timeline: "15 days",
  category: "Writing"
}, {
  id: 9,
  title: "Email Marketing Strategy",
  description: "Looking for a marketing specialist to develop and implement an effective email marketing campaign.",
  budget: "₹35,000",
  timeline: "30 days",
  category: "Marketing"
}, {
  id: 10,
  title: "Android App Development",
  description: "Need an Android developer to build a meditation and mindfulness app with audio features.",
  budget: "₹90,000",
  timeline: "45 days",
  category: "Mobile Development"
}];
const BrowseProjects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [budgetRange, setBudgetRange] = useState([0, 200000]);
  const form = useForm({
    defaultValues: {
      categories: []
    }
  });
  const filteredProjects = mockProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(project.category);
    const projectBudget = parseInt(project.budget.replace(/[^0-9]/g, ""));
    const matchesBudget = projectBudget >= budgetRange[0] && projectBudget <= budgetRange[1];
    return matchesSearch && matchesCategory && matchesBudget;
  });
  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]);
  };
  console.log("Filtered projects:", filteredProjects);
  console.log("Selected categories:", selectedCategories);
  console.log("Budget range:", budgetRange);
  return <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="font-bold text-xl text-left px-[3px] py-0 my-px mx-0">Browse Projects</h1>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search projects..." className="pl-10 w-full md:w-[300px]" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filter Projects</SheetTitle>
                </SheetHeader>
                <div className="py-6">
                  <Form {...form}>
                    <form className="space-y-8">
                      <div className="space-y-4">
                        <FormLabel className="text-base">Categories</FormLabel>
                        {categories.map(category => <FormItem key={category.id} className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox checked={selectedCategories.includes(category.label)} onCheckedChange={() => handleCategoryToggle(category.label)} />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {category.label}
                            </FormLabel>
                          </FormItem>)}
                      </div>
                      <div className="space-y-4">
                        <FormLabel className="text-base">Budget Range (₹)</FormLabel>
                        <Slider defaultValue={[0, 200000]} max={200000} step={10000} value={budgetRange} onValueChange={setBudgetRange} className="my-4" />
                        <div className="flex justify-between text-sm">
                          <span>₹{budgetRange[0].toLocaleString()}</span>
                          <span>₹{budgetRange[1].toLocaleString()}</span>
                        </div>
                      </div>
                    </form>
                  </Form>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  {project.category}
                </span>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold">{project.budget}</span>
                  <span className="text-gray-500">{project.timeline}</span>
                </div>
                <SendProposalModal projectId={project.id} projectTitle={project.title} />
              </CardContent>
            </Card>)}
        </div>
      </div>
    </div>;
};
export default BrowseProjects;