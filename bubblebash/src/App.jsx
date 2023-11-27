import "./App.css";

function App() {
  return (
    <>
      <section className="bg-primary">
        <div className="py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-24">
          <h1 className="mb-4 text-4xl font-semibold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
            Create Amazing Digital Product For Your Business
          </h1>
          <p className="mb-8 my-8 text-sm font-normal text-light md:text-lg lg:text-xl dark:text-gray-400">
            We are a professional digital agency that has been established since
            2016, we present a variety of digital services that can help you
            solve problems in your business
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-7 mb-48 text-base font-medium text-dark  bg-white hover:bg-dark hover:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="-mt-48 justify-center items-center xl:px-48">
        <div className="">
          <img src="/src/assets/photo-1.png" alt="" className="w-full" />

          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-cols-max ">
            <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
              <p className="text-2xl font-semibold text-dark-grey-900">1.2K+</p>
              <p className="text-base leading-7 text-dark-grey-600">
                Happy Clients
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
              <p className="text-2xl font-semibold text-dark-grey-900">1.1K+</p>
              <p className="text-base leading-7 text-dark-grey-600">
              WorldWide Clients
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
              <p className="text-2xl font-semibold text-dark-grey-900">6+</p>
              <p className="text-base leading-7 text-dark-grey-600">
              Years of Experience
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
              <p className="text-2xl font-semibold text-dark-grey-900">12+</p>
              <p className="text-base leading-7 text-dark-grey-600">
                Award Winners
              </p>
            </div>

          </div>
        </div>
      </section>

    
    </>
  );
}

export default App;
