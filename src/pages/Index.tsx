
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { RecentProjects } from "@/components/RecentProjects";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="relative">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-indigo-50 to-white z-0"></div>
          <Features />
        </div>
        <RecentProjects />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
