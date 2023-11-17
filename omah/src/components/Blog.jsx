import "./Blog.css";

export default function Blog() {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold py-6 mt-12 text-left leading-snug">
          Always check our <br /> latest blog
        </h1>

        <a
          href="#"
          className="text-xl font-normal py-10 mt-12 mb-6 underline hover:text-orange-400"
        >
          view all
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-32">
        <div className=" bg-slate-100 text-left transition-transform transform rounded-none">
          <img
            src="/src/assets/blog-1.png"
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
            <p className="font-normal text-xl">
              Tips and tricks in choosing a house
            </p>
            <p className="text-md font-normal text-slate-400">
              tips and tricks to buy a house easily here is to buy at a low
              price
            </p>
          </div>
        </div>

        <div className="h-full">

        <div className="relative mb-4 flex w-full flex-row rounded-xl text-gray-700 ">
          <div className="p-6">
            <p className="mb-2 block font-sans text-xl text-start font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased w-3/4">
            Creating a clean and elegant home
            </p>
            <p className="text-start font-normal text-md mt-6 text-secondary">Albert firdaus</p>
          </div>
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden bg-white bg-clip-border text-gray-700">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
              alt="image"
              className=" w-full object-cover"
            />
          </div>
        </div>

        <div className="relative mb-4 flex w-full flex-row rounded-xl text-gray-700 ">
          <div className="p-6">
            <p className="mb-2 block font-sans text-xl text-start font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased w-3/4">
            Creating a clean and elegant home
            </p>
            <p className="text-start font-normal text-md mt-6 text-secondary">Albert firdaus</p>
          </div>
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden bg-white bg-clip-border text-gray-700">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
              alt="image"
              className=" w-full object-cover"
            />
          </div>
        </div>

        <div className="relative flex w-full flex-row rounded-xl text-gray-700 ">
          <div className="p-6">
            <p className="mb-2 block font-sans text-xl text-start font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased w-3/4">
            Creating a clean and elegant home
            </p>
            <p className="text-start font-normal text-md mt-6 text-secondary">Albert firdaus</p>
          </div>
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden bg-white bg-clip-border text-gray-700">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
              alt="image"
              className=" w-full object-cover"
            />
          </div>
        </div>
        </div>



        
      </div>
    </>
  );
}
