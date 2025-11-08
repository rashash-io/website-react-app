import { Clock8Icon, PhoneIcon } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLanguage } from "@/context/LanguageContext";
import { Phone } from "lucide-react";
import { phoneNumbers } from "@/lib/data";

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

const BranchesTable = () => {
  const { rtlVal } = useLanguage();
  return (
    <div>
      {/* <h1 className="text-5xl">ارقام الفروع</h1> */}
      <Table dir={rtlVal}>
        <TableCaption>ارقام الفروع</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-right">الفرع</TableHead>
            <TableHead className="text-right">الرقم</TableHead>
            <TableHead className="text-right">تواصل عن طريق</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {phoneNumbers.map((branch) => (
            <TableRow key={branch.id}>
              <TableCell>{branch.loc[rtlVal ? 1 : 0]}</TableCell>
              <TableCell>{branch.number}</TableCell>
              <TableCell>
                <div className="flex gap-2  text-lg">
                  <Phone />
                  <BsWhatsapp className="text-xl" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export const ContactUsPage = () => {
  return (
    <section className="content">
      <ContactUs contactInfo={contactInfo} />;
      <div className="mx-auto max-w-7xl mt-3 px-4 sm:px-6 lg:px-8 border border-accent">
        <BranchesTable />
      </div>
    </section>
  );
};
