import { Header } from "@/components";
import { useLanguage } from "@/context";

export const About = () => {
  const { rtlVal } = useLanguage();
  return (
    <section className="content">
      <div>
        <Header rtlVal={rtlVal} textAr="من نحن" textEng="About Us" />
      </div>
    </section>
  );
};
