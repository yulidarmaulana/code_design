import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-5xl font-semibold py-6 text-start leading-snug mt-12 mb-6">
        The latest
      </h1>
      <div className="grid grid-cols-3 gap-4 gap">
        <div className="card bg-slate-100 text-left">
          <figure>
            <img src="/src/assets/hero-image.svg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="font-semibold">Orange House</h2>
            <p className="">Jl Klapanunggal, cileungsi, bogor</p>
            <p className="text-lg font-semibold ">$1,000,000</p>
          </div>
        </div>

        <div className="card bg-slate-100">
          <figure>
            <img src="/src/assets/hero-image.svg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>

        <div className="card bg-slate-100">
          <figure>
            <img src="/src/assets/hero-image.svg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
