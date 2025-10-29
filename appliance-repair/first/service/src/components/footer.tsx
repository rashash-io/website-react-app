import { Separator } from "@/components/ui/separator";
import { socialMedia } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-primary border-t-4 my-4">
      <div className="flex flex-col gap-2 items-center justify-center bg-secondary py-4">
        <div>
          <div>Social Media</div>
          <Separator />
        </div>
        <div className="flex gap-2">
          {socialMedia.map((item) => (
            <div
              key={item.name}
              className={`transition   bg-[${item.color}] rounded-full p-1 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110`
           } >
              <a
                href={`https://www.${item.name}.com${item.href}`}
                target="_blank"
                className={`flex text-3xl`}
              >
                <div className="rounded-full m-1 ">{item.icon}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

// FB  style={{ backgroundColor: "#1877f2" }}
