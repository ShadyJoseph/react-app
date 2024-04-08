import { Link } from 'react-router-dom';
import { useState } from 'react'; // Import useState hook for managing input state
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import cart from '../assets/images/Cart.png'; 
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  // State for managing search input
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    setSearchQuery('');
  };

  return (
    <nav className="bg-gray-800 fixed top-0 w-full z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img className="h-8 w-8" src={Logo} alt="Logo" />
              <span className="ml-2 text-white text-lg font-semibold">Your Brand</span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:justify-center sm:items-center space-x-4 flex-grow">
            <Link to="/men" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Men</Link>
            <Link to="/women" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Women</Link>
            <Link to="/kids" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Kids</Link>
          </div>
          <div className="flex items-center">
            <form onSubmit={handleSearchSubmit} className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="text-gray-300 bg-gray-700 px-3 py-1 rounded-md focus:outline-none focus:bg-gray-900 mr-2"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <button type="submit" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-base font-medium">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
            <Link to="/cart" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              <img src={cart} alt="Cart" className="h-8 w-8" /> {/* Making the cart icon bigger */}
            </Link>
          </div>
        </div>
      </div>
      {/* Responsive mobile menu */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/men" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Men</Link>
          <Link to="/women" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Women</Link>
          <Link to="/kids" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Kids</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;