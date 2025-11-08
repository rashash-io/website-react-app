import { Badge } from "@/components/ui/badge";
// import { Button }  from "@/components/ui/button";

import { BsCalendar2Date } from "react-icons/bs";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="flex min-h-[calc(100dvh-4.5rem)]   flex-1 flex-col justify-between gap-12 overflow-x-hidden pt-8 sm:gap-16 sm:pt-16 lg:gap-24 lg:pt-24">
      {/* Hero Content */}
      <div className="mx-auto h-[calc(100dvh-4.5rem)]  flex max-w-7xl flex-col  items-center gap-8 px-4 text-center sm:px-6 lg:px-8">
        <div className="bg-muted flex items-center gap-2.5 rounded-full border px-3 py-2">
          <Badge className="rounded-full">معتمد</Badge>
          <span className="text-muted-foreground">
            مركز صيانة اجهزة باناسونيك
          </span>
        </div>
        <div
          dir="rtl"
          className="text-3xl mb-2 pb-2 font-bold text-balance sm:text-4xl lg:text-5xl bg-gradient-to-r from-pink-500 via-orange-700   to-indigo-700 bg-clip-text text-transparent"
        >
          اصنع اليوم اثر الغد
          <br />
          {/* <span className="relative border mt-4 text-transparent">
            {/* <span className="">اصنع اليوم اثر الغد</span>
            <br /> */}
          {/* <svg
              width="223"
              height="12"
              viewBox="0 0 223 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-x-0 bottom-0 w-full translate-y-1/2 max-sm:hidden"
            >
              <path
                d="M1.11716 10.428C39.7835 4.97282 75.9074 2.70494 114.894 1.98894C143.706 1.45983 175.684 0.313587 204.212 3.31596C209.925 3.60546 215.144 4.59884 221.535 5.74551"
                stroke="url(#paint0_linear_10365_68643)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_10365_68643"
                  x1="18.8541"
                  y1="3.72033"
                  x2="42.6487"
                  y2="66.6308"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="var(--primary)" />
                  <stop offset="1" stopColor="var(--primary-foreground)" />
                </linearGradient>
              </defs>
            </svg> */}
          {/* </span> */}
        </div>
        <Link
          to="/contact"
          className="flex mt-auto  -translate-y-3/4 flex-row items-center justify-center text-accent gap-2 bg-primary hover:bg-primary/80  font-bold py-2 px-4 border-b-4  border-[oklch(0.455 0.188 13.697)] hover:border-primary rounded"
        >
          <BsCalendar2Date size={40} className="text-4xl" />
          احجز معادك دلوقتي
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
