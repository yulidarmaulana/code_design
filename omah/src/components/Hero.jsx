import "./Hero.css";
import navbarbrand from "../assets/hero-image.svg";

export default function Hero() {
  return (
    <>
      <div className="my-12">
        <div className="flex flex-row ps-12">
          <div className="flex-1">
            <h1 className="text-6xl font-semibold py-6 text-start leading-snug">
              Ready to <br /> find your new home
            </h1>
          </div>
          <div className="flex-none">
            <p className="py-8 text-start">
              looking for a house with a low price <br /> and quality here, and
              sell your house <br /> quickly here
            </p>
          </div>
        </div>
      </div>
      <img src={navbarbrand} className="max-w-full -ml-[20vw]" alt="hero" />

      <div className="card bg-base-100 shadow-xl rounded-none -mt-[8vh]">
        <div className="card-body">
          <div className="grid grid-flow-col gap-4 auto-rows-max items-center">
            <select className="select w-full max-w-xs font-semibold ">
              <option disabled selected>
                Select city
              </option>
              <option>Jakarta</option>
              <option>Surabaya</option>
            </select>

            <select className="select w-full max-w-xs font-semibold">
              <option disabled selected>
                Price
              </option>
              <option>$1000 - $2000</option>
              <option>$2000 - $3000</option>
            </select>

            <select className="select w-full max-w-xs font-semibold">
              <option disabled selected>
                Rooms
              </option>
              <option>2 rooms</option>
              <option>3 rooms</option>
            </select>

            <select className="select w-full max-w-xs font-semibold">
              <option disabled selected>
                Footage
              </option>
              <option>2 footage</option>
              <option>3 footage</option>
            </select>
            
            <button className="btn btn-lg rounded-none font-normal text-white bg-orange-400  hover:bg-orange-600">
              Search
            </button>

            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>
    </>
  );
}
