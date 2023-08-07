import Link from "next/link";
import Image from "next/image";

export default function Landing() {
  return (
    <section className="bg-gradient-to-r from-yellow-100 via-gray-200 to-gray-100">
      <div className="py-8 mx-auto max-w-screen-xl">
        <div className="grid text-center md:grid-cols-2 gap-8 sm:grid-cols-1">
          <div className="bg-two bg-cover border-gray-200 h-72 rounded-lg p-8 md:p-12 shadow-lg"></div>
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 shadow-lg flex flex-col md:flex-row md:items-center max-h-72">
            <div className="md:flex-1">
              <h1 className="text-gray-900 dark:text-white text-xl md:text-xl font-extrabold mb-2">
                Equipment Rental Categories
              </h1>
              <div className="flex-box text-base md:text-lg underline">
                <ul className="grid grid-cols-2 gap-4">
                  <li>Aerial Lifts</li>
                  <li>Compressor</li>
                  <li>Compaction</li>
                  <li>Concrete</li>
                  <li>Earthmoving</li>
                  <li>Forklifts</li>
                  <li>Generators</li>
                  <li>Sanders/Saws</li>
                  <li>Lawn/Garden</li>
                  <li>Plumbing</li>
                </ul>
              </div>
            </div>
            {/* Add the following condition to hide the image on md screens */}
            <div className="md:flex-1 mt-4 md:mt-0 md:ml-8 items-center hidden md:block">
              <Image
                src="/Images/tools.jpeg"
                width={200}
                height={400}
                alt="Description of the image"
              />
            </div>
          </div>
          <div className="bg-one bg-cover border-gray-200 h-72 rounded-lg p-8 md:p-12 shadow-lg"></div>

          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 shadow-lg flex flex-col md:flex-row md:items-center max-h-72">
            <div className="md:flex-1">
              <h1 className="text-gray-900 dark:text-white text-xl font-extrabold mb-4">
                Party Rental Categories
              </h1>
              <div className="flex-box text-base md:text-lg underline">
                <ul className="grid grid-cols-2 gap-4">
                  <li>Tents</li>
                  <li>Tables</li>
                  <li>Chairs</li>
                  <li>Linen</li>
                  <li>Glassware</li>
                  <li>Flatware</li>
                  <li>Lighting</li>
                  <li>Concessions</li>
                  <li>Fountains</li>
                  <li>Wedding</li>
                </ul>
              </div>
            </div>
            {/* Add the following condition to hide the image on md screens */}
            <div className="md:flex-1 mt-4 md:mt-0 md:ml-8 items-center hidden md:block">
              <Image
                src="/Images/party.jpeg"
                width={200}
                height={400}
                alt="Description of the image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
