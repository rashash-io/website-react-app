import { useLanguage } from "@/context";

import { GetBreadcrumb } from "@/components";
import { ContactUsCard } from "@/components";
import { ChevronLeftCircleIcon } from "lucide-react";
import { AiOutlineEnter } from "react-icons/ai";

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
      <div className="container mx-auto px-4">
        <GetBreadcrumb />
        <div className="flex flex-col items-center  justify-center  ">
          <div>
            <h1 className="text-2xl md:text-4xl py-3">الشروط والأحكام</h1>
            <div className="w-full bg-linear-to-r from-pink-500 via-red-500 to-primary h-1 "></div>
          </div>
        </div>
      </div>
      <div dir="rtl" className="container mx-auto px-4 ">
        <div className="min-h-screen flex flex-col">
          <ul className="">
            <li className="py-10 flex  my-1 flex-col gap-1 justify-center border-b-5  py-4">
              <div className="flex flex-row gap-1.5   items-center">
                <ChevronLeftCircleIcon className="text-primary ml-2" />

                <h1 className="text-3xl">التعريفات</h1>
              </div>
              <div className="flex items-center ">
                <AiOutlineEnter className="text-4xl pb-1.5 text-primary" /> نحن
                الشركة: تشير إلى صيانة أجهزة براون في جمهورية مصر العربية
                <br />
                العميل: هو أي فرد أو جهة تتواصل معنا أو تستخدم الموقع الإلكتروني
                لطلب خدمات صيانة أجهزة براون
                <br />
                الخدمة: تشمل جميع أعمال الفحص، الصيانة، والإصلاح لأجهزة براون
                الكهربائية المنزلية
                <br />
              </div>
            </li>
            <li className="py-10 flex  my-1 flex-col gap-1 justify-center border-b-5  py-4">
              <div className="flex gap-1">
                <ChevronLeftCircleIcon className="text-primary ml-2" />
                <h1 className="text-3xl">نطاق الخدمة</h1>
              </div>
              <div className="flex items-center ">
                <AiOutlineEnter className="text-4xl pb-1.5 text-primary" />
                نقدم خدمات صيانة وفحص واستبدال قطع الغيارلأجهزة باناسونيك والتي
                تشمل على سبيل المثال لا الحصر ماكينات الحلاقة، أجهزة إزالة
                الشعر، مجففات ومكواة الشعر، محضرات الطعام، الخلاطات، الكبة،
                الأجهزة الكهربائية الصغيرة الأخرى وتُقدّم هذه الخدمات داخل
                جمهورية مصر العربية فقط
              </div>
            </li>
            <li className="py-10 flex  my-1 flex-col gap-1 justify-center border-b-5  py-4">
              {" "}
              <div className="flex gap-1">
                <ChevronLeftCircleIcon className="text-primary ml-2" />
                <h1 className="text-3xl">الحجز والدفع</h1>
              </div>
              <div className="flex items-center ">
                <AiOutlineEnter className="text-4xl pb-1.5 text-primary" />
                يتم الحجز المسبق من خلال الموقع الإلكتروني أو عبر أرقام الاتصال
                الرسمية الخاصة بالمركز تُحدَّد رسوم الخدمة بعد إجراء الفحص الفني
                الأولي حسب طبيعة العطل وتكلفة قطع الغيار الدفع يتم نقدًا أو من
                خلال وسائل إلكترونية (عند توافرها)، ويتم الاتفاق عليه مع العميل
                سواء قبل أو بعد تنفيذ الخدمة
              </div>
            </li>

            <li className="flex py-10 my-1 flex-col gap-1 justify-center border-b-5  py-4">
              {" "}
              <div className="flex gap-1">
                <ChevronLeftCircleIcon className="text-primary ml-2" />
                <h1 className="text-3xl">سياسة الإلغاء والاسترجاع</h1>
              </div>
              <div className="flex items-center ">
                <AiOutlineEnter className="text-4xl pb-1.5 text-primary" />
                يمكن للعميل إلغاء الحجز قبل موعد الزيارة بـ 24 ساعة دون أي رسوم
                لا يمكن استرداد قيمة الخدمة بعد بدء أعمال الصيانة، ما لم يتعذر
                علينا تقديم الخدمة نتيجة تقصير من جانبنا
              </div>
            </li>

            <li className="flex  py-10 my-1 flex-col gap-1 justify-center border-b-5  py-4">
              {" "}
              <div className="flex gap-1">
                <ChevronLeftCircleIcon className="text-primary ml-2" />
                <h1 className="text-3xl">الضمان</h1>
              </div>
              <div className="flex items-center ">
                <AiOutlineEnter className="text-4xl pb-1.5 text-primary" />
                يتم تقديم ضمان على القطع المستبدلة لمدة تصل إلى شهرين (60 يومًا)
                حسب نوع القطعة لا يشمل الضمان الأعطال الناتجة عن الاستخدام غير
                الصحيح أو الأعطال الجديدة غير المرتبطة بالخدمة الأصلية
              </div>
            </li>

            <li className="flex py-10 my-1 flex-col gap-1 justify-center border-b-5  py-4">
              <div className="flex gap-1">
                <ChevronLeftCircleIcon className="text-primary ml-2" />
                <h1 className="text-3xl">حدود المسؤولية</h1>
              </div>
              <div className="flex items-center ">
                <AiOutlineEnter className="text-4xl pb-1.5 text-primary" />
                لا نتحمل مسؤولية أي أعطال خارج نطاق الخدمة التي تم الاتفاق عليها
                وتنفيذها نحن غير مسؤولين عن أي أضرار غير مباشرة أو خسائر ناتجة
                عن سوء استخدام الجهاز بعد استلامه من الصيانة
              </div>
            </li>

            <li className="flex py-10 my-1 flex-col gap-1 justify-center border-b-5  py-4">
              {" "}
              <div className="flex gap-1">
                <ChevronLeftCircleIcon className="text-primary ml-2" />
                <h1 className="text-3xl">الملكية الفكرية</h1>
              </div>
              <div className="flex items-center ">
                <AiOutlineEnter className="text-4xl pb-1.5 text-primary" />
                جميع محتويات هذا الموقع من نصوص، صور، تصميمات، شعارات، وعلامات
                تجارية مملوكة حصريًا لتوكيل صيانة براون المعتمد في مصر يُمنع نسخ
                أو استخدام أي محتوى لأي غرض تجاري دون موافقة كتابية مسبقة
              </div>
            </li>

            <li className="flex py-10  my-1 flex-col gap-1 justify-center border-b-5  py-4">
              {" "}
              <div className="flex gap-1">
                <ChevronLeftCircleIcon className="text-primary ml-2" />
                <h1 className="text-3xl">البيانات والخصوصية</h1>
              </div>
              <div className="flex items-center ">
                <AiOutlineEnter className="text-4xl pb-1.5 text-primary" />
                نلتزم بالحفاظ على سرية جميع البيانات الشخصية التي يقدمها العملاء
                تُستخدم هذه البيانات فقط لغرض تقديم الخدمة، ولا يتم مشاركتها مع
                أي طرف ثالث دون موافقة صريحة من العميل
              </div>
            </li>

            <li className="flex py-10 my-1 flex-col gap-1 justify-center border-b-5  py-4">
              {" "}
              <div className="flex gap-1">
                <ChevronLeftCircleIcon className="text-primary ml-2" />
                <h1 className="text-3xl">التعديلات على الشروط</h1>
              </div>
              <div className="flex items-center ">
                <AiOutlineEnter className="text-4xl pb-1.5 text-primary" />
                يحتفظ التوكيل بحقه في تعديل أو تحديث هذه الشروط والأحكام في أي
                وقت دون إشعار مسبق ويُعد استمرار استخدام الموقع أو الخدمة بعد أي
                تعديل بمثابة موافقة تلقائية من العميل على الشروط المعدّلة
              </div>
            </li>
          </ul>
          <ContactUsCard />
        </div>
      </div>
    </>
  );
};
