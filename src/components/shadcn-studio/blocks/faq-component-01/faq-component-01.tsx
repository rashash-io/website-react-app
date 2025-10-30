import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/context";

type FAQs = {
  question: string;
  answer: string;
}[];

const FAQ = ({ faqItems }: { faqItems: FAQs }) => {
  const { rtlVal } = useLanguage();
  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* FAQ Header */}
        <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            {rtlVal
              ? "هل تحتاج مساعدة؟ لدينا الإجابات"
              : "Need Help? We've Got Answers"}
          </h2>
          <p className="text-muted-foreground text-xl">
            {rtlVal
              ? "استكشف أسئلتنا الأكثر شيوعًا واعثر على المعلومات التي تحتاجها"
              : " Explore Our Most Commonly Asked Questions and Find the Information  You Need"}
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
