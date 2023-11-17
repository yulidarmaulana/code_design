import "./Footer.css";
// import { Icon } from '@iconify/react';
export default function Footer() {
  return (
      <div className="max-w-full mx-auto">
        <footer className="pt-4 rounded-lg md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Omah design by @dzakimuzh | code by @yulidarmaulana            
          </span>
          <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
            <li>
              <a
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                Licensing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-500 hover:underline dark:text-gray-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </footer>
      </div>

  );
}
