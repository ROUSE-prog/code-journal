import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Code Journal
        </Link>
        <div className="space-x-6 hidden md:flex">
          <Link href="/home" className="hover:underline">
            Home
          </Link>
          <Link href="/profile" className="hover:underline">
            Profile
          </Link>
          <Link href="/community" className="hover:underline">
            Community
          </Link>
          <Link href="/settings" className="hover:underline">
            Settings
          </Link>
        </div>
        <Link href="/get-started" className="btn btn-outline rounded-full px-4 py-2">
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
