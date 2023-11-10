import navbarbrand from '../assets/navbar-brand.svg'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-500">
        <div className="flex-1">
          <a href="https://vitejs.dev">
            <img src={navbarbrand} className="logo" alt="Vite logo" />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-14">
            <li className="px-5">
              <a>Home</a>
            </li>
            <li className="px-5">
              <a>To rent</a>
            </li>
            <li className="px-5">
              <a>For sale</a>
            </li>
            <li className="px-5">
              <a>Blog</a>
            </li>
          </ul>
          <button className="btn btn-lg btn-ghost rounded-none text-white bg-orange-400  hover:bg-orange-600">Log In</button>
        </div>
      </div>
    </>
  );
}
