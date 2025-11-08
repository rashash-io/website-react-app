import type { ComponentType } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLanguage } from "@/context";
import { SiWhatsapp } from "react-icons/si";
import { BiPhoneCall } from "react-icons/bi";
import { MdPersonAdd } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { Header } from "@/components";
import { FaRegHandshake } from "react-icons/fa6";
import { HiMiniArrowDownCircle } from "react-icons/hi2";
import { Separator } from "@/components/ui/separator";

//Cairo & Giza
// 37482812
// 37616102

type ContactInfo = {
  title: string[];
  icon: ComponentType;
  description: string[];
}[];

const ContactUs = ({ contactInfo }: { contactInfo: ContactInfo }) => {
  const { rtlVal } = useLanguage();

  return (
    <section className="relative" dir={rtlVal}>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="relative h-full w-full bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Header rtlVal={rtlVal} textEng="Contact Us" textAr="اتصل بنا" />
          <ContactHero rtlVal={rtlVal} />
          <div>
            <div className={twMerge("flex", rtlVal && "order-3")}></div>

            <div className="grid items-center gap-12 lg:grid-cols-2 mt-5">
              <img
                src="https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/contact-us/image-1.png"
                alt="Contact illustration"
                className="size-full rounded-md object-cover max-lg:max-h-70"
              />

              <div>
                <h3 className="mb-6 text-2xl font-semibold">
                  {rtlVal ? "سعداء لنكون في خدمتك" : "Happy to help you!"}
                </h3>
                <p className="text-muted-foreground mb-10 text-lg font-medium">
                  {/* ب */}
                </p>

                {/* Contact Info Grid */}
                <div className="grid gap-6 sm:grid-cols-2">
                  {contactInfo.map((info, index) => (
                    <Card className="border-none shadow-none" key={index}>
                      <CardContent className="flex flex-col items-center gap-4 text-center">
                        <Avatar className="size-9 border">
                          <AvatarFallback className="bg-transparent [&>svg]:size-5">
                            <info.icon />
                          </AvatarFallback>
                        </Avatar>
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold">
                            {info.title[rtlVal ? 0 : 1]}
                          </h4>
                          <div className="text-muted-foreground text-base font-medium">
                            {info.description[rtlVal ? 0 : 1]
                              .split("\n")
                              .map((line, idx) => (
                                <p key={idx}>{line}</p>
                              ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
type RtlValType = "rtl" | undefined;
const ContactHero = ({ rtlVal }: { rtlVal: RtlValType }) => {
  return (
    <>
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>

      <div className="flex flex-col md:flex-row rounded-2xl bg-slate-900 shadow-md shadow-pink-500/50 justify-between items-center border border-pink-500">
        <div className="flex flex-col items-center justify-center  w-full">
          <div className="border w-[95%] py-4 mx-2  border-y-2 border-x-0  shadow-lg shadow-blue-500/50 bg-gradient-to-r from-blue-950  to-slate-950 flex flex-col items-center">
            <div className="flex-col">
              {/* {FAST LINKS} */}

              <div className="flex flex-col justify-center items-center w-full  gap-4 ">
                <h3 className="text-2xl font-semibold flex gap-2 items-center">
                  {rtlVal ? "سعداء لنكون في خدمتك" : "Happy to help you!"}
                  <FaRegHandshake />
                </h3>
                <div className=" ">
                  {" "}
                  {rtlVal ? "اختر اختيار" : "Choose an option"}
                </div>

                <div className="my-4 flex flex-col md:flex-row gap-2">
                  <a className=" flex flex-row items-center justify-center gap-2 bg-pink-500 hover:bg-pink-400 text-accent font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded">
                    <BiPhoneCall />
                    {rtlVal ? "اتصال" : "Call"}
                  </a>
                  <a className="flex flex-row items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-accent font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
                    <SiWhatsapp />
                    WhatsApp
                  </a>
                  <a className="flex flex-row items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-accent font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    <MdPersonAdd />
                    {rtlVal
                      ? "حفظ ارقامنا الي قائمة الاتصال"
                      : "Save our numbers to contact list"}
                  </a>
                </div>
                <div className="flex gap-2 items-center justify-center w-1/4">
                  <Separator />
                  {rtlVal ? "او" : "or"}
                  <Separator />
                </div>
                <div>
                  <a className="flex flex-row items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-accent font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    <HiMiniArrowDownCircle className="text-xl" />

                    {rtlVal ? "اعرض باقي التفاصيل" : "show other details"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          height={"50%"}
          width={"50%"}
          className=" border object-scale-down rounded-xl rounded-l-none bg-slate-950 border-x-0"
          src="/src/assets/contact.png"
        />
      </div>
    </>
  );
};
