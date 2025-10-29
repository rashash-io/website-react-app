import { useLanguage } from "@/context";
import { useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { navPagesList } from "@/lib/data";

function TranslatePathName(): string | undefined {
  const { pathname } = useLocation();
  const { rtlVal } = useLanguage();

  const foundItem = navPagesList.find((item) => item.href === pathname);
  const finalPath: string | undefined = foundItem?.name[rtlVal ? 1 : 0];
  return finalPath;
}

export const GetBreadcrumb = () => {
  const { rtlVal } = useLanguage();
  const translatedPathName = TranslatePathName();

  if (translatedPathName === "Home" || translatedPathName === "الرئيسية") {
    return translatedPathName;
  } else {
    return (
      <div className=" flex justify-center py-2 rounded-lg bg-slate-900 ">
        <Breadcrumb dir={rtlVal}>
          <BreadcrumbList className="flex items-center justify-center bg-slate-950 rounded-xl px-4 py-1.5 border-2 border-primary/50">
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="hover:text-primary  py-0 x-0">
                {rtlVal ? "الرئيسية" : "Home"}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator dir={rtlVal} className=" " />
            <BreadcrumbItem>
              <BreadcrumbPage>{translatedPathName}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    );
  }
  return (
    <Breadcrumb dir={rtlVal}>
      <BreadcrumbList>
        {translatedPathName != "Home" && translatedPathName != "الرئيسية" ? (
          <></>
        ) : (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                {rtlVal ? "الرئيسية" : "Home"}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}

        {/* <BreadcrumbItem>
          <BreadcrumbLink href="/">
            {rtlVal ? "الرئيسية" : "Home"}
          </BreadcrumbLink>
        </BreadcrumbItem> */}
        <BreadcrumbSeparator dir={rtlVal} />
        <BreadcrumbItem>
          <BreadcrumbPage>{translatedPathName}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
