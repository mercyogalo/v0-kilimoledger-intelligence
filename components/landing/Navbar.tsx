import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/180/524/original/ChatGPT_Image_Jun_15__2026__09_51_23_PM.png?1781549585"
            alt="KilimoLedger logo"
            className="w-8 h-8 object-contain rounded"
          />
          <span className="text-black font-bold text-xl" style={{ fontFamily: 'Georgia, serif' }}>
            KilimoLedger
          </span>
        </Link>

        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="text-sm text-gray-600 hover:text-green-700 font-medium transition-colors">
            How It Works
          </Link>
          <Link href="#features" className="text-sm text-gray-600 hover:text-green-700 font-medium transition-colors">
            Features
          </Link>
          <Link href="#about" className="text-sm text-gray-600 hover:text-green-700 font-medium transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-sm text-gray-600 hover:text-green-700 font-medium transition-colors">
            Contact
          </Link>
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <button className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-semibold px-4 py-2 rounded text-sm transition-colors">
              Log In
            </button>
          </Link>
          <Link href="/dashboard/manager">
            <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-4 py-2 rounded text-sm transition-colors">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex flex-col gap-1.5 cursor-pointer">
          <span className="block w-6 h-0.5 bg-black" />
          <span className="block w-6 h-0.5 bg-black" />
          <span className="block w-6 h-0.5 bg-black" />
        </div>

      </div>
    </nav>
  );
}