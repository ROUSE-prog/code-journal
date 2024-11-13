import Link from 'next/link';

const Navbar = () => {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 10, // Ensure it sits above the splash screen
      }}
      className="bg-stone-400 p-4 text-white"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Code Journal</h1>
        <div className="space-x-4">
          <Link href="/home" legacyBehavior>
            <a className="hover:underline">Home</a>
          </Link>
          <Link href="/profile" legacyBehavior>
            <a className="hover:underline">Profile</a>
          </Link>
          <Link href="/community" legacyBehavior>
            <a className="hover:underline">Community</a>
          </Link>
          <Link href="/settings" legacyBehavior>
            <a className="hover:underline">Settings</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
