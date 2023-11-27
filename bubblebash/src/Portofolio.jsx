export default function Portofolio() {
  return (
    <>
      <div className="mx-auto sm:px-6 lg:py-28 w-full">
        <div className="lg:max-w-full lg:px-8">
          <p className="text-base font-normal mb-1">Our Portofolio</p>
          <h2 className="text-4xl font-semibold text-gray-900">
          Recent Projects
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3">
                

            <div className="max-w-full bg-white border-0 dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="w-full" src="/src/assets/photo-2.png" alt="" />
                </a>
                <div className="py-4">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Website My Hospital</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Create a hospital website with patient, doctor, and drug logistics features that help hospital operations</p>
                    
                </div>
            </div>

            <div className="max-w-ful bg-white500 border-0 dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="w-full" src="/src/assets/photo-3.png" alt="" />
                </a>
                <div className="py-4">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Food & Beverages Corp Logo</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Create a logo for a food & beverage company, with emphasis on aesthetics and user requests</p>
                    
                </div>
            </div>

            <div className="max-w-ful bg-white border-0 dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="w-full" src="/src/assets/photo-4.png" alt="" />
                </a>
                <div className="py-4">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Supermarket Mobile Apps</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Develop mobile applications for supermarkets with buy, auto-pay, and marketplace features</p>
                    
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
