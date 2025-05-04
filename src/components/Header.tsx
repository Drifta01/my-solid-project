import { render } from "solid-js/web";
import { createSignal } from "solid-js";

export const Header = () => {
  const [dropdownOpen, setDropdownOpen] = createSignal(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen());
  const closeDropdown = () => setDropdownOpen(false);
  return (
    <header class="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 class="text-2xl">My App</h1>
      <nav class="relative">
        <button onClick={toggleDropdown} class="bg-blue-500 px-4 py-2 rounded">
          Menu
        </button>
        {dropdownOpen() && (
          <ul class="absolute right-0 bg-white text-black mt-2 rounded shadow-lg w-48">
            <li class="px-4 py-2 hover:bg-gray-200" onClick={closeDropdown}>
              Item 1
            </li>
            <li class="px-4 py-2 hover:bg-gray-200" onClick={closeDropdown}>
              Item 2
            </li>
            <li class="px-4 py-2 hover:bg-gray-200" onClick={closeDropdown}>
              Item 3
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};
