import { useLanguage } from "@/context";

import { GetBreadcrumb } from "@/components";
import { ChevronLeftCircleIcon } from "lucide-react";

export const TermsConditions = () => {
  const { rtlVal } = useLanguage();
  // ARABIC
  if (rtlVal) {
    return <TosAr />;
    //ENGLISH
  } else {
    return <div></div>;
  }
};

const TosAr = () => {
  return (
    <>
      <ol>
        <li>dd</li>
      </ol>
      <div className="container mx-auto px-4">
        <GetBreadcrumb />

        <br />
      </div>
      <div dir="rtl" className="container mx-auto px-4">
        <div className="flex flex-col items-center  justify-center  ">
          <div>
            <h1 className="text-2xl md:text-4xl py-3">الشروط والأحكام</h1>
            <div className="w-full bg-linear-to-r from-pink-500 via-red-500 to-primary h-1 "></div>
          </div>
        </div>
        <div className="min-h-screen flex flex-col">
          <ul className="">
            <li className="flex  my-1 flex-col gap-1 justify-center">
              <div className="flex flex-row gap-1.5   items-center">
                <ChevronLeftCircleIcon />

                <h1 className="text-xl">التعريفات</h1>
              </div>
              <div className="mx-2 text-xs">
                {" "}
                نحن الشركة: تشير إلى صيانة أجهزة براون في جمهورية مصر العربية
                <br />
                العميل: هو أي فرد أو جهة تتواصل معنا أو تستخدم الموقع الإلكتروني
                لطلب خدمات صيانة أجهزة براون
                <br />
                الخدمة: تشمل جميع أعمال الفحص، الصيانة، والإصلاح لأجهزة براون
                الكهربائية المنزلية
                <br />
              </div>
            </li>
            <li className="flex  my-1 flex-col gap-1 justify-center">
              <div className="flex gap-1">
                <ChevronLeftCircleIcon />
                <h1>نطاق الخدمة</h1>
              </div>
            </li>
            <li className="flex  my-1 flex-col gap-1 justify-center">
              <div className="flex gap-1">
                <ChevronLeftCircleIcon />
                <h1>الحجز والدفع</h1>
              </div>
            </li>

            <li className="flex  my-1 flex-col gap-1 justify-center">
              <div className="flex gap-1">
                <ChevronLeftCircleIcon />
                <h1>سياسة الإلغاء والاسترجاع</h1>
              </div>
            </li>

            <li className="flex  my-1 flex-col gap-1 justify-center">
              <div className="flex gap-1">
                <ChevronLeftCircleIcon />
                <h1>الضمان</h1>
              </div>
            </li>

            <li className="flex  my-1 flex-col gap-1 justify-center">
              <div className="flex gap-1">
                <ChevronLeftCircleIcon />
                <h1>حدود المسؤولية</h1>
              </div>
            </li>

            <li className="flex  my-1 flex-col gap-1 justify-center">
              <div className="flex gap-1">
                <ChevronLeftCircleIcon />
                <h1>الملكية الفكرية</h1>
              </div>
            </li>

            <li className="flex  my-1 flex-col gap-1 justify-center py-1">
              <div className="flex gap-1">
                <ChevronLeftCircleIcon />
                <h1>البيانات والخصوصية</h1>
              </div>
            </li>

            <li className="flex  my-1 flex-col gap-1 justify-center">
              <div className="flex gap-1">
                <ChevronLeftCircleIcon />
                <h1>التعديلات على الشروط</h1>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
