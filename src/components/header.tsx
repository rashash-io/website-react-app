import { GetBreadcrumb } from "./breadcrumb";
import React from "react";

export type HeaderPropsType = {
  rtlVal?: "rtl" | undefined;
  textAr?: string;
  textEng?: string;
};

export const Header = ({ rtlVal, textAr, textEng }: HeaderPropsType) => {
  return (
    <>
      <div className="relative h-full w-full pt-7 ">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

        <div className="flex flex-col items-center justify-center  w-full mb-8">
          <div className="border w-full py-4 mx-2  border-y-2 border-x-0  shadow-lg shadow-blue-500/50  flex flex-col items-center">
            <div className="flex-col">
              <div className="relative  w-fit mb-3">
                <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
                  {rtlVal ? textAr : textEng}
                  <span className="bg-primary absolute mt-2 top-9 left-0 h-px w-full"></span>
                </h2>
              </div>
              <GetBreadcrumb />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
