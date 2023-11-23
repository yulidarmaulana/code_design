import "./App.css";

function App() {
  return (
    <>
      <nav className="bg-primary dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6 py-12">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/src/assets/Logo.png" className="h-8" alt="" />
            <span className="self-center text-sm font-semibold font-sans whitespace-nowrap text-white dark:text-white">
              Bubble Bash
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 font-sans text-white rounded md:bg-transparent md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-dark md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-dark md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-dark md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Portofolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-dark md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-dark md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* hero section */}

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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className=" justify-center items-center">
        <div className="absolute top-80 mt-64 lg:px-48 md:px-48">
          <img src="/src/assets/photo-1.png" alt="" className="" />

          <div className="grid grid-cols-4 auto-cols-max py-8">
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
