interface NavbarProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Navbar = ({ toggleSidebar, isSidebarOpen }: NavbarProps) => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="text-white text-2xl">Logo</div>
      <button onClick={toggleSidebar} className="text-white lg:hidden">
        {isSidebarOpen ? 'Close' : 'Menu'}
      </button>
    </nav>
  );
};

export default Navbar;
