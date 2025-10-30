import HeroSection from "@/components/shadcn-studio/blocks/hero-section-01/hero-section-01";
import Header from "@/components/shadcn-studio/blocks/hero-section-01/header";
import type { NavigationSection } from "@/components/shadcn-studio/blocks/hero-section-01/header";

const navigationData: NavigationSection[] = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Products",
    href: "#",
  },
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "Contacts",
    href: "#",
  },
];

export const HeroSectionPage = () => {
  return (
    <div className="relative">
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <main className="flex flex-col">
        <HeroSection />
      </main>
    </div>
  );
};

export function Home() {
  return (
    <>
      <HeroSectionPage />

      <div className="relative h-screen w-full">
        <div
          className="absolute md:-top-20 inset-0 bg-contain bg-no-repeat bg-top bg-[url(/src/assets/panasonic-hero.jpg)]"
          //   style={{ backgroundImage: "url('/src/assets/panasonic-hero.jpg')" }}
        ></div>

        {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent-90 to-transparent"></div> */}
      </div>
      <section className="relative md:-top-25">
        <div className="min-h-screen  bg-contain bg-top bg-clip-border bg-no-repeat bg-[url(/src/assets/panasonic-hero.jpg)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="min-h-screen"></div>
        HOMEEEEEEEEE
      </section>
    </>
  );
}
