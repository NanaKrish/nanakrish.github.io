import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we're on the home page ('/')
  const isHomePage = location.pathname === '/';

  // Determine the base classes for the navigation bar
  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isScrolled 
      ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-neutral-200/50' // Scrolled state for all pages
      : isHomePage 
        ? 'bg-transparent' // Transparent only on home page when not scrolled
        : 'bg-white/50 backdrop-blur-sm shadow-sm border-b border-neutral-200' // Default slightly tinted for other pages
  }`;

  // Determine the text color classes for links inside the navigation bar
  const linkTextColorClasses = isScrolled || !isHomePage 
    ? 'text-neutral-700 hover:text-primary-600' // Dark text when scrolled or on non-home pages
    : 'text-white hover:text-white/90 drop-shadow-md'; // White text only on home page when not scrolled

  return (
    <nav className={navClasses}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link 
            to="/" 
            className={`text-2xl transition-all duration-300 hover:scale-105 ${linkTextColorClasses}`}
            style={{ fontWeight: '200' }}
          >
            KN
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {/* Academics Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
                className={`nav-link flex items-center space-x-1 transition-all duration-300 ${
                  isActive('/education') || isActive('/research') ? 'active' : ''
                } ${linkTextColorClasses}`}
              >
                <span>Academics</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isAcademicsOpen ? 'rotate-180' : ''}`}
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isAcademicsOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-neutral-200/50 py-2 animate-in slide-in-from-top-2 duration-200">
                  <Link
                    to="/education"
                    className="dropdown-item text-neutral-700 hover:text-primary-600 block px-4 py-2 text-sm" 
                    onClick={() => setIsAcademicsOpen(false)}
                  >
                    Education/TAship
                  </Link>
                  <Link
                    to="/research"
                    className="dropdown-item text-neutral-700 hover:text-primary-600 block px-4 py-2 text-sm" 
                    onClick={() => setIsAcademicsOpen(false)}
                  >
                    Research
                  </Link>
                </div>
              )}
            </div>

            {/* Experience */}
            <Link 
              to="/experience" 
              className={`nav-link transition-all duration-300 ${
                isActive('/experience') ? 'active' : ''
              } ${linkTextColorClasses}`}
            >
              Experience
            </Link>

            {/* Interests (formerly Miscellaneous) */}
            <Link 
              to="/miscellaneous" 
              className={`nav-link transition-all duration-300 ${
                isActive('/miscellaneous') ? 'active' : ''
              } ${linkTextColorClasses}`}
            >
              Interests
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;