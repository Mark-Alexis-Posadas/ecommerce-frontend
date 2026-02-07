import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 mb-5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-extrabold text-white">
            S
          </div>
          <span className="text-xl font-bold text-white tracking-wide">
            ShopX
          </span>
        </div>

        {/* SEARCH (DESKTOP) */}
        <div className="hidden md:flex flex-1 mx-10">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-6">
          <button className="hidden md:block text-sm font-medium text-gray-300 hover:text-white transition">
            Products
          </button>
          <button className="hidden md:block text-sm font-medium text-gray-300 hover:text-white transition">
            Categories
          </button>

          {/* CART */}
          <div className="relative">
            <button className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
              🛒
            </button>

            {/* CART BADGE */}
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-indigo-600 text-xs font-bold text-white flex items-center justify-center">
              2
            </span>
          </div>

          {/* MOBILE MENU */}
          <button className="md:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE SEARCH */}
      <div className="md:hidden px-6 pb-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </nav>
  );
};

export default Navbar;
