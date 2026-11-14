import { FaClipboardList } from 'react-icons/fa';

function Header() {
  return (
    <header className="flex items-center justify-center gap-3 text-black px-6 py-5 rounded-t-xl shadow-md">
      <FaClipboardList className="text-2xl" />
      <h3 className="text-2xl font-bold tracking-wide">
        To-Do List
      </h3>
    </header>
  );
}

export default Header;
