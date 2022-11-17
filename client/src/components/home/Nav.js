import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Search from "./Search";
import { toggleSearchBar } from "../../store/reducers/globalReducer";
import SearchBook from "./SearchBook";
const Nav = () => {
  const { userToken, user } = useSelector((state) => state.authReducer);
  const { searchBar } = useSelector((state) => state.globalReducer);
  const { items, total } = useSelector((state) => state.cartReducer);
  console.log(total);
  const dispatch = useDispatch();
  return (
    <>
      <nav className="nav">
        <div className="my-container">
          <div className="flex justify-between items-center">
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
            <ul className="flex items-center">
              <SearchBook />
              <button className="bg-green-300 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-full">
                <Link to="/dashboard/products">Sell</Link>
              </button>
              {userToken ? (
                <li className="nav-li">
                  <Link to="/user" className="nav-link">
                    {user?.name}
                  </Link>
                </li>
              ) : (
                <li className="nav-li">
                  <Link to="/login" className="nav-link">
                    signIn
                  </Link>
                </li>
              )}

              <li className="nav-li relative">
                <Link to="/cart">
                  <BsHandbag size={20} />
                  <span className="nav-circle">{items}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
