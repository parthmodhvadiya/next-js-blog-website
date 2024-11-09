import { ReactNode, FC } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Enhanced Header with Navbar */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo / Title */}
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              href="/admin"
              className="hover:bg-white hover:text-blue-500 transition-all duration-300 px-4 py-2 rounded-md"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/create"
              className="hover:bg-white hover:text-purple-600 transition-all duration-300 px-4 py-2 rounded-md"
            >
              Create Post
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white hover:text-gray-200 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto p-6 flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-4 border-t mt-8">
        <p className="text-gray-600">&copy; 2024 Blog Admin Dashboard</p>
      </footer>
    </div>
  );
};

export default Layout;
