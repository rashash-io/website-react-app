// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

import { GetBreadcrumb } from "@/components";

// import { useLanguage } from "@/context/LanguageContext";

// import { Phone } from "lucide-react";

export const About = () => {
  return (
    <section className="content">
      <div>
        about
        <GetBreadcrumb />
      </div>
    </section>
  );
};
export const About2 = () => {
  return (
    <>
      {/* <BranchesTable /> */}
      <div>about</div>
    </>
  );
};

// const BranchesTable = () => {
//   const { rtlVal } = useLanguage();
//   return (
//     <Table dir={rtlVal}>
//       <TableCaption>A list of your recent invoices.</TableCaption>
//       <TableHeader>
//         <TableRow>
//           <TableHead className="w-[100px]">Branch</TableHead>
//           <TableHead>Number</TableHead>
//           <TableHead className="text-right">Working Hours</TableHead>
//           <TableHead>Contact</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         <TableRow>
//           <TableCell className="font-medium">INV001</TableCell>
//           <TableCell>Paid</TableCell>
//           <TableCell>Credit Card</TableCell>
//           <TableCell className="text-right">$250.00</TableCell>
//         </TableRow>
//         {phoneNumbers.map((branch) => (
//           <TableRow key={branch.id}>
//             <TableCell>
//               {branch.id}
//               {branch.loc[rtlVal ? 1 : 0]}
//             </TableCell>
//             <TableCell>{branch.number}</TableCell>
//             <TableCell>
//               <Phone />
//               <WhatsappIcon size={48} />
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// };
