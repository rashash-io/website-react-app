import { Clock8Icon, PhoneIcon } from "lucide-react";

import ContactUs from "@/components/shadcn-studio/blocks/contact-us-page-01/contact-us-page-01";

const contactInfo = [
  {
    title: ["مواعيد العمل", "Working Hours"],
    icon: Clock8Icon,
    description: [
      "الاحد - الخميس\nمن 8:00 ص الي 5:00 م",
      "Sunday - Thursday\n8:00 AM to 5:00 PM",
    ],
  },

  {
    title: ["اتصل ببنا", "Call us"],
    icon: PhoneIcon,
    description: ["+20 122 55 55 555", "+20 122 55 55 555"],
  },
];

export const ContactUsPage = () => {
  return (
    <section className="content">
      <ContactUs contactInfo={contactInfo} />;
    </section>
  );
};
