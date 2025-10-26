import { ThemeProvider } from "@/components/theme/theme-provider";
import { LanguageProvider } from "./context/LanguageContext";
import { House, Phone } from "lucide-react";

import { useTheme } from "@/components/theme/theme-provider";
import Navbar from "@/components/Navbar/Navbar";

import { useLanguage } from "@/context/LanguageContext";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LanguageProvider defaultLanguage="ar" storageKey="service-app-eg">
        <Navbar />
        <NotFoundPage />
        <BranchesTable />
      </LanguageProvider>
    </ThemeProvider>
  );
}
const NotFoundPage = () => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center border">
      <h1 className=" lg:text-[19rem] text-[10rem] border font-black tracking-tight bg-primary-foreground/50 px-6 my-0 w-full">
        404
      </h1>

      <div>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full  py-1 rounded-lg">
          <div className="flex items-center justify-center space-x-1">
            <House size={30} />
            <span className="font-bold text-lg">Go Home</span>
          </div>
        </button>
        <h3 className="border">
          <span className="font-bold">Ooops!</span> The page you are looking for
          does not exist.
        </h3>
      </div>
    </div>
  );
};

const BranchesTable = () => {
  const {rtlVal} = useLanguage();
  return (
    <Table dir={rtlVal}>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Branch</TableHead>
          <TableHead>Number</TableHead>
          <TableHead className="text-right">Working Hours</TableHead>
          <TableHead>Contact</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        {phoneNumbers.map((branch) => (
          <TableRow key={branch.id}>
            <TableCell>
              {branch.id}
              {branch.loc[rtlVal ? 1 : 0]}
            </TableCell>
            <TableCell>{branch.number}</TableCell>
            <TableCell>
              <Phone />
              <WhatsappIcon size={48} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const phoneNumbers = [
  {
    id: 0,
    loc: ["Nasr City", "مدينة نصر"],
    number: "01556919697",
  },
  {
    id: 1,
    loc: ["Down Town", "وسط البلد"],
    number: "01064911130",
  },
  {
    id: 2,
    loc: ["New Cairo", "القاهرة الجديدة"],
    number: "01211944020",
  },
  {
    id: 3,
    loc: ["5th Settlement", "التجمع الخامس"],
    number: "01094976255",
  },
  {
    id: 4,
    loc: ["6th of October", "6 اكتوبر"],
    number: "01556919697",
  },
  {
    id: 5,
    loc: ["Mohandessein", "المهندسين"],
    number: "01556919697",
  },
  {
    id: 6,
    loc: ["Dokki", "الدقي"],
    number: "01094976255",
  },
  {
    id: 7,
    loc: ["Nasr City", "مدينة نصر"],
    number: "01556919697",
  },
  {
    id: 8,
    loc: ["Haram", "الهرم"],
    number: "01064911130",
  },
  {
    id: 9,
    loc: ["Qena", "قنا"],
    number: "01555809807",
  },
  {
    id: 10,
    loc: ["Mansoura", "المنصورة"],
    number: "01211944020",
  },
  {
    id: 11,
    loc: ["Alexandria", "الاسكندرية"],
    number: "01555809807",
  },
];
export default App;



interface WhatsappIconProps {
  size?: string | number;
  color?: string;
  className?: string;
  children?: React.ReactNode; // 👈️ for demo purposes
}
export const WhatsappIcon = ({ size = 24, ...props }: WhatsappIconProps) => {
  const { theme, themeSystem } = useTheme();
  const themeMode = theme === "system" ? themeSystem : theme;
  const fillColor = themeMode === "dark" ? "#ffffff" : "#000000";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      {...props}
    >
      <path
        fill={fillColor}
        d="M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"
      ></path>
    </svg>
  );
};
