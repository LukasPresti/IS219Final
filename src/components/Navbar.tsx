import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="w-full px-6 md:px-16 py-4 flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-bold tracking-tight text-white">
          IS219 Final Project
        </h1>
        <div className="space-x-6 text-sm md:text-base">
          <Link href="/" className="text-gray-300 hover:text-white transition">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition">
            About
          </Link>
          <Link href="/projects" className="text-gray-300 hover:text-white transition">
            Projects
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
