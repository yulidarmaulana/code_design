import "./App.css";
import { Icon } from "@iconify/react";

function App() {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-5xl font-semibold py-6 mt-12 mb-6">The latest</h1>

        <a
          href="#"
          className="text-xl font-normal py-10 mt-12 mb-6 hover:text-orange-400"
        >
          view more
        </a>
      </div>

      <div className="grid grid-cols-3 gap-4 gap mb-12">
        <div className=" bg-slate-100 text-left transition-transform transform rounded-none">
          <p className="absolute top-0 right-0 bg-slate-100 rounded-full text-orange-500 font-semibold py-2 px-2 mt-4 mr-4">
            <Icon icon="ph:heart-bold" />
          </p>
          <img
            src="/src/assets/terrah-holly-1.png"
            alt="Shoes"
            className="object-cover w-full group-hover:opacity-75"
          />
          <div className="absolute bottom-28 mb-2 flex">
            <p className=" bg-white items-center font-medium px-4 py-4  text-orange-500 shadow-sm">
              <i className="fa fa-camera mr-2 text-xl"></i>3 room
            </p>
          </div>
          <div className="p-4 bg-white">
            <p className="font-semibold text-3xl">Orange House</p>
            <p className="text-secondary">Jl Klapanunggal, cileungsi, bogor</p>
            <p className="text-xl text-orange-500 font-semibold ">$1,000,000</p>
          </div>
        </div>

        <div className=" bg-slate-100 text-left transition-transform transform rounded-none">
          <p className="absolute top-0 right-0 bg-slate-100 rounded-full text-orange-500 font-semibold py-2 px-2 mt-4 mr-4">
            <Icon icon="ph:heart-bold" />
          </p>
          <img
            src="/src/assets/terrah-holly-2.png"
            alt="Shoes"
            className="object-cover w-full group-hover:opacity-75"
          />
          <div className="absolute bottom-28 mb-2 flex">
            <p className=" bg-white items-center font-medium px-4 py-4  text-orange-500 shadow-sm">
              <i className="fa fa-camera mr-2 text-xl"></i>3 room
            </p>
          </div>
          <div className="p-4 bg-white">
            <p className="font-semibold text-3xl">Orange House</p>
            <p className="text-secondary">Jl Klapanunggal, cileungsi, bogor</p>
            <p className="text-xl text-orange-500 font-semibold ">$1,000,000</p>
          </div>
        </div>

        <div className=" bg-slate-100 text-left transition-transform transform rounded-none">
          <p className="absolute top-0 right-0 bg-slate-100 rounded-full text-orange-500 font-semibold py-2 px-2 mt-4 mr-4">
            <Icon icon="ph:heart-bold" />
          </p>
          <img
            src="/src/assets/terrah-holly-3.png"
            alt="Shoes"
            className="object-cover w-full group-hover:opacity-75"
          />
          <div className="absolute bottom-28 mb-2 flex">
            <p className=" bg-white items-center font-medium px-4 py-4  text-orange-500 shadow-sm">
              <i className="fa fa-camera mr-2 text-xl"></i>3 room
            </p>
          </div>
          <div className="p-4 bg-white">
            <p className="font-semibold text-3xl">Orange House</p>
            <p className="text-secondary">Jl Klapanunggal, cileungsi, bogor</p>
            <p className="text-xl text-orange-500 font-semibold ">$1,000,000</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
