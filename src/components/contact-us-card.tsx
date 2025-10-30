import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TbFileInfo } from "react-icons/tb";

export const ContactUsCard = () => {
  return (
    <div className="flex  justify-center items-center ">
      <div className="relative ">
        <div className="absolute top-0 -translate-y-1/2 bg-primary/80 h-30 w-30 rounded-r-xl flex items-center justify-center ">
          <TbFileInfo className="text-6xl text-accent " />
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-2 border border-primary/50 rounded-xl py-6 my-4 bg-slate-800/50 shadow-md shadow-primary/50">
        <div className="flex">
          للاستفسارات أو الدعم الفني، يرجى التواصل معنا من خلال صفحة
          <Link to="/contact" className="mx-1 font-bold text-primary underline">
            اتصل بنا{" "}
          </Link>{" "}
          على الموقع أو عبر الطرق التالية
        </div>
        <div className=" flex gap-3">
          <a>
            <Button
              size={"lg"}
              className="p-3 flex items-center gap-2 text-secondary"
            >
              <div className="flex items-center">
                <FaPhoneAlt className="text-3xl  text-secondary ml-2" />
                <span className="text-secondary ">
                  <i>مكالمة هاتفية</i>
                </span>
              </div>
            </Button>
          </a>
          <a>
            <Button
              size="lg"
              className="p-3 flex items-center gap-2 text-secondary"
            >
              <FaWhatsapp className="text-3xl" />
              <i>واتساب</i>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
