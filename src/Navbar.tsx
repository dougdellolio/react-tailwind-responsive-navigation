interface NavbarProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Navbar = ({ toggleSidebar, isSidebarOpen }: NavbarProps) => {
  return (
    <nav className="p-4 flex justify-between items-center shadow">
      <div className="text-white text-2xl">Logo</div>
      <button onClick={toggleSidebar} className="text-white lg:hidden">
        {isSidebarOpen ? 'Close' : 'Menu'}
      </button>
    </nav>
  );
};

export default Navbar;
