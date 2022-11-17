import { Link } from "react-router-dom";
const Sidebar = ({ side, closeSidebar }) => {
  return (
    <div
      className={`fixed top-0 ${side} sm:left-0 w-64 h-screen bg-gray-800 z-10 transition-all`}
    >
      <i
        className="bi bi-x-lg absolute top-4 right-4 sm:hidden block cursor-pointer text-lg"
        onClick={closeSidebar}
      ></i>
      <div className="bg-white p-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              src="https://www.kindpng.com/picc/m/50-505031_log-book-png-png-clip-art-transparent-books.png"
              className="object-contain w-10 h-10"
              alt="logo"
            />
            <p className="font-bold">VESIT BOOK STORE</p>
          </Link>
        </div>
      </div>
      <ul className="mt-4">
        <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-gray-600">
          <Link to="/dashboard/products" className="text-base capitalize">
            <i className="bi bi-card-list mr-2 inline-block text-lg"></i>{" "}
            products
          </Link>
        </li>
        <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-gray-600">
          <Link to="/dashboard/categories" className="text-base capitalize">
            <i className="bi bi-bar-chart mr-2 inline-block text-lg"></i>{" "}
            Categories
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
