import HeroSection from "@/components/shadcn-studio/blocks/hero-section-01/hero-section-01";
import Header from "@/components/shadcn-studio/blocks/hero-section-01/header";
import type { NavigationSection } from "@/components/shadcn-studio/blocks/hero-section-01/header";
import { FaGear } from "react-icons/fa6";

import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
      <HeroSection />
    </div>
  );
};
const CardHorizontalDemo = () => {
  return (
    <Card className="max-w-sm py-0 sm:flex-row sm:gap-0">
      <CardContent className="px-0 h-full">
        <div className="relative ">
          <div className="absolute top-0 -translate-y-1 bg-primary/80 h-25 w-25  rounded-r-xl flex items-center justify-center ">
            <FaGear className="text-4xl text-accent " />
          </div>
        </div>
        <div className="flex  items-center ">
          <img
            src="https://cdn.shadcnstudio.com/ss-assets/components/card/image-3.png"
            alt="Banner"
            className="rounded-l-xl h-25 w-25"
          />

          {/* <div className="relative flex items-center jutify-center h-full border border-red-500 ">
          <FaGear className="absolute top-1/2" />
        </div> */}
        </div>
      </CardContent>
      {/* <div className="sm:min-w-54">
        <CardHeader className="pt-6">
          <CardTitle>Dreamy Colorwave Gradient</CardTitle>
          <CardDescription>
            A smooth blend of vibrant pinks, purples, and blues for a magical
            touch.
          </CardDescription>
        </CardHeader>
        <CardFooter className="gap-1 py-4">
          <Button className="bg-transparent bg-gradient-to-br from-purple-500 to-pink-500 text-white focus-visible:ring-pink-600/20">
            Explore More
          </Button>
        </CardFooter>
      </div> */}
    </Card>
  );
};

export function Home() {
  return (
    <>
      <section className="content">
        <div className="relative md:-top-18">
          <div className="min-h-screen  bg-contain bg-fixed bg-top bg-clip-border bg-no-repeat bg-[url(/src/assets/panasonic-hero.jpg)]"></div>
          <div className="absolute rounded-lg border-red-500 border inset-0 bg-gradient-to-t from-black via-transparent-70 to-transparent">
            {" "}
            <HeroSectionPage />
          </div>
        </div>
        HOMEEEEEEEEE
        <div>
          ⚙️ Original Spare Parts with Warranty We use original,
          manufacturer-approved spare parts to ensure the highest quality and
          longest life for your appliance. You can be assured that your
          appliance will work at high efficiency after maintenance. 📞
          Post-Service Follow-up To ensure customer satisfaction, we provide
          follow-up services after the maintenance to make sure your appliance
          is working optimally. We are committed to offering the best
          maintenance experience to all our clients. 💳 Documented Invoices We
          provide official invoices for all the maintenance services we perform,
          ensuring service documentation and the protection of your legal
          rights. 🎉 Special Discounts Enjoy discounts of up to 30% on your
          appliance maintenance. We offer special deals on home appliance
          services, making us the ideal choice for cost-effective maintenance.
          🧑‍🔧 Certified Engineers and Technicians Our team of certified engineers
          and technicians has extensive experience in maintaining all home
          appliances and is committed to providing high-quality service. 📜
          Legal Business Credentials We operate legally and are fully
          documented, offering services that meet the highest professional
          standards. ⚡ Fast Response Time We offer quick and effective
          solutions to repair your appliance without disrupting your daily life.
          No need to wait long for high-quality service.
        </div>
        <CardHorizontalDemo />
      </section>
    </>
  );
}
