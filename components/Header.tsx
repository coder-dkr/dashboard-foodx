"use client";

import * as R from "react";
import Image from "next/image";
import { getAdmin } from "@/constants";

export default function Header() {
  const [isDark, setIsDark] = R.useState(false);
  const [searchQuery, setSearchQuery] = R.useState("");
  const [isMenuOpen, setIsMenuOpen] = R.useState(false);
  const [notifications] = R.useState(1);
  const [cartItems] = R.useState(2);
  const [adminPfp, setAdminPfp] = R.useState('/github.svg')

  R.useEffect(() => {
    async function fetchAdminData() {
      try {
        const data = await getAdmin();
        setAdminPfp(data?.avatar_url || '/github.svg');
      } catch {}
    }
    fetchAdminData();
  }, []);

  const handleAdminProfileView = () => {
    const isModalOpen = JSON.parse(localStorage.getItem("isModal") || "false");
    localStorage.setItem("isModal", JSON.stringify(!isModalOpen));
    window.dispatchEvent(new Event("storage"));
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="w-full sticky top-0 bg-white backdrop-blur-xl border-b border-gray-800 bg-background z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="relative flex w-full max-w-md items-center">
          <input
            type="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 pl-4 pr-10 text-sm outline-none focus:border-gray-300 "
          />
          <button
            className="absolute right-3 text-gray-400"
            aria-label="Search"
          >
            <SearchIcon className="h-4 w-4" />
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <button className="flex items-center gap-1 text-sm">
            <GlobeIcon className="h-4 w-4" />
            <span>English</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-full p-2  "
            aria-label="Toggle theme"
          >
            {isDark ? (
              <SunIcon className="h-4 w-4" />
            ) : (
              <MoonIcon className="h-4 w-4" />
            )}
          </button>

          {/* Notifications */}
          <button className="relative rounded-full p-2  ">
            <BellIcon className="h-4 w-4" />
            {notifications > 0 && (
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                {notifications}
              </span>
            )}
          </button>

          {/* Cart */}
          <button className="relative rounded-full p-2  ">
            <CartIcon className="h-4 w-4" />
            {cartItems > 0 && (
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                {cartItems}
              </span>
            )}
          </button>

          {/* Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full p-2  "
          >
            <MenuIcon className="h-4 w-4" />
          </button>

          {/* Avatar */}
          <button onClick={handleAdminProfileView} className="h-8 w-8 overflow-hidden rounded-full">
            <Image
              src={adminPfp ?? "/github.svg"}
              alt="User avatar"
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

// Custom Icon Components
function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function BellIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
