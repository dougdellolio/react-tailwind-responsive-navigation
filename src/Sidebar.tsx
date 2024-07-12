import { PiAcorn } from 'react-icons/pi';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
    return (
        <aside
            className={`fixed top-0 left-0 h-full border-r border-gray-200 text-black transform ${isOpen ? 'w-64' : 'w-15'
                } transition-width duration-300 ease-in-out`}
        >
            <div className='flex items-center justify-center py-10'>
                <div className="inline-flex">

                </div>
            </div>
            <ul className="p-4 space-y-4">
                <li className="flex items-center">
                    <PiAcorn className="w-6 h-6" />
                    {isOpen && <span className="ml-2">Home</span>}
                </li>
                <li className="flex items-center">
                    <PiAcorn className="w-6 h-6" />
                    {isOpen && <span className="ml-2">About</span>}
                </li>
                <li className="flex items-center">
                    <PiAcorn className="w-6 h-6" />
                    {isOpen && <span className="ml-2">Contact</span>}
                </li>
            </ul>
            <button
                onClick={toggleSidebar}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-2 rounded-full"
            >
                {isOpen ? 'Collapse' : 'Expand'}
            </button>
        </aside>
    );
};

export default Sidebar;
