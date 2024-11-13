import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="p-8 bg-gray-100 min-h-screen">{children}</main>
    </div>
  );
};

export default Layout;
