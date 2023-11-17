import "./Content.css";

export default function Content() {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold py-6 mt-12 text-left leading-snug">
          Some people are very <br /> satisfied buying a house here
        </h1>

        <a
          href="#"
          className="text-xl font-normal py-10 mt-12 mb-6 underline hover:text-orange-400"
        >
          view all
        </a>
      </div>

      <div className="flex flex-nowrap justify-between mb-12 gap-6">
        <div className=" bg-slate-100 text-left transition-transform transform rounded-none">
          <img
            src="/src/assets/cus-1.png"
            alt="Shoes"
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
          <div className="absolute bottom-0 flex">
              <p className="flex bg-white items-center font-medium px-4 py-4  text-orange-500 shadow-sm">
                <i className="fa fa-camera mr-2 text-xl"></i>
                Jane Doe
              </p>
          </div>
          <div className="p-4">
            <p className="font-normal text-xl w-3/4">
              I am very satisfied buying a house ere because it is fast and easy
            </p>
          </div>
        </div>
        <div className=" bg-slate-100 text-left transition-transform transform rounded-none">
          <img
            src="/src/assets/cus-2.png"
            alt="Shoes"
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
          <div className="absolute bottom-0 flex">
              <p className="flex bg-white items-center font-medium px-4 py-4  text-orange-500 shadow-sm">
                <i className="fa fa-camera mr-2 text-xl"></i>
                Jane Doe
              </p>
          </div>
          <div className="p-4">
            <p className="font-normal text-xl w-3/4">
              Buying a house here is very cheap and high quality
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
