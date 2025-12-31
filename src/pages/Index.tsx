import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { QuickLinks } from "@/components/home/QuickLinks";
import { LatestNotices } from "@/components/home/LatestNotices";
import { AboutSection } from "@/components/home/AboutSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <QuickLinks />
      <LatestNotices />
      <AboutSection />
    </Layout>
  );
};

export default Index;
