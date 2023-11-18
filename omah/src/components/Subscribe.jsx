import "./Subscribe.css";

export default function Subscribe() {
  return (
    <>
    <div className=" mb-32">
    <div className="border-2 border-gray-100 bg-orange-500 p-14">
          <div className="flex flex-col items-center">
            
            <h3 className="mt-2 -ml-[10vw] max-w-xl text-white text-center text-xl font-normal leading-tight sm:text-3xl md:text-4xl md:leading-tight">
            Subscribe to get a discount of 30%
            </h3>
            <form
              action=""
              className=" mt-4 flex w-full -ml-[10vw] max-w-2xl flex-col gap-3 sm:flex-row sm:gap-0"
            >
              <input
                type="email"
                name="email"
                id="email"
                className="grow rounded border-2 border-gray-300 py-6 px-6 focus:border-emerald-500 focus:outline-none sm:rounded-l-md sm:rounded-r-none sm:border-r-0"
                placeholder="Email Address"
              />
              <button
                type="submit"
                className="rounded bg-emerald-500 px-5 py-4 font-normal text-white sm:rounded-l-none sm:rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

    </div>
        
    </>
  );
}
