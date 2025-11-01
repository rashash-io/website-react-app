import FAQ from "@/components/shadcn-studio/blocks/faq-component-01/faq-component-01";
import { ContactUsCard } from "@/components";
import { useLanguage } from "@/context";

const faqItems = [
  {
    question: "1",
    answer: "1",
  },
  {
    question: "2",
    answer: "2",
  },
  {
    question: "3",
    answer: "3",
  },
  {
    question: "4",
    answer: "4",
  },
];

const FAQPage = () => {
  const { rtlVal } = useLanguage();
  return (
    <>
      <section dir={rtlVal} className="content">
        <FAQ faqItems={faqItems} />
      </section>
      <ContactUsCard />
    </>
  );
};

export default FAQPage;
