import "./App.css";

function App() {
  return (
    <>
      <nav className="">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="poppins self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Jobless
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-slate-800 font-semibold hover:text-white border border-slate-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md text-sm px-8 py-3 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Sign Up
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
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
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 gap-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <a
                  href="#"
                  className="block font-medium py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-slate-800 md:dark:text-slate-800"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block font-light py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Discover
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block font-light py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Post a Job
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block font-light py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-36">
          <h1 className="mb-4 text-xl font-semibold tracking-tight leading-6 text-gray-900 md:text-6xl lg:text-5xl dark:text-white">
            Get Connected to the Best Remote <br /> Jobs in Your Field
          </h1>
          <p className="mb-8 text-lg font-light text-gray-400 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Discover a wide range of remote opportunities on our platform and{" "}
            <br /> take control of your career
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-full shadow-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Explore Remote Jobs
            </a>
            <a
              href="#"
              className="inline-flex underline justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-blue-700 "
            >
              How It Works?
            </a>
          </div>
        </div>
      </section>

      <section className="">
        <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white text-start">
          Featured Jobs
        </h5>

        <div className="grid grid-cols-3 grid-flow-col gap-4">
        <a href="#">
          <div className="max-w-sm p-6 text-start bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-700 shadow-lg group">
            <div className="flex gap-4 mb-4">
              <img
                src="/src/assets/image-1-1.png"
                className="inline-flex"
                alt=""
              />
                <h5 className="inline-flex mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-white">
                  Front-End Developer
                </h5>
            </div>

            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 group-hover:text-white">
              We are looking for an experienced front-end developer to join our
              team.
            </p>

            <div className="flex justify-between align-middle mt-8">
              <span className="inline-flexbg-blue-100 text-black text-xs font-medium me-2 px-6 py-2 rounded-full bg-gray-200 dark:bg-blue-900 dark:text-blue-300 group-hover:bg-white">
                Rust
              </span>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 group-hover:text-white">
                $70,000 - $90,000
              </p>
            </div>
        </div>
        </a>

          <a href="#">
          <div className="max-w-sm p-6 text-start bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-700 shadow-lg group">
            <div className="flex gap-4 mb-4">
              <img
                src="/src/assets/image-2-2.png"
                className="inline-flex"
                alt=""
              />
                <h5 className="inline-flex mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-white">
                Data Scientist
                </h5>

            </div>

            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 group-hover:text-gray-100">
            We are seeking a data scientist to join our team.
            </p>

            <div className="flex justify-between align-middle mt-8">
              <span className="inline-flexbg-blue-100 text-black text-xs font-medium me-2 px-6 py-2 rounded-full bg-gray-200 dark:bg-blue-900 dark:text-blue-300 group-hover:bg-white">
                Python
              </span>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 group-hover:text-white">
                $100,000 - $130,000
              </p>
            </div>
          </div>
          </a>

          <a href="#">
          <div className="max-w-sm p-6 text-start bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-700 shadow-lg group">
            <div className="flex gap-4 mb-4">
              <img
                src="/src/assets/image-3-3.png"
                className="inline-flex"
                alt=""
              />
                <h5 className="inline-flex mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-white">
                Technical Writer
                </h5>

            </div>

            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 group-hover:text-gray-100">
            We are seeking a data scientist to join our team.
            </p>

            <div className="flex justify-between align-middle mt-8">
              <span className="inline-flexbg-blue-100 text-black text-xs font-medium me-2 px-6 py-2 rounded-full bg-gray-200 dark:bg-blue-900 dark:text-blue-300 group-hover:bg-white">
              Documentation
              </span>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 group-hover:text-white">
                $60,000 - $80,000
              </p>
            </div>
          </div>
          </a>

        </div>
      </section>
    </>
  );
}

export default App;
