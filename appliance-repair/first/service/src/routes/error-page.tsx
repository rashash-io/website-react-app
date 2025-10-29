import { useRouteError } from "react-router-dom";
import { House } from "lucide-react";

//export  function ErrorPage() {
//  const error = useRouteError();
//  console.error(error);

// (error.statusText === 404 )?( return(<NotFoundPage/>)):(

//return(<NotFoundPage/>)

// return (
//   <div id="error-page">
//     <h1>Oops!</h1>
//     <p>Sorry, an unexpected error has occurred.</p>
//     <p>
//       <i>{error.statusText || error.message}</i>
//     </p>
//   </div>
// );
//}

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="min-h-[85vh] flex items-center justify-center border">
      <h1 className=" lg:text-[19rem] text-[10rem] border font-black tracking-tight bg-primary-foreground/50 px-6 my-0 w-full">
        404 
      </h1>
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full  py-1 rounded-lg">
            <div className="flex items-center justify-center space-x-1">
              <House size={30} />
              <span className="font-bold text-lg">Go Home</span>
            </div>
          </button>
      

      <div>
        <h3 className="border">
          <span className="font-bold">Ooops!</span> The page you are looking for
          does not exist.
        </h3>
      </div>
    </div>
  );
};
