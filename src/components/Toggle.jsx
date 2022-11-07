import React from 'react'
import { ThemeContext } from './ThemeContext'


const Toggle = () => {

  const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <div>
      {theme === 'dark' ? (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className=" text-gray-700 shadow-none p-2 focus:outline-none text-lg rounded-full outline-none ring-transparent cursor-pointer rotate-180 ease-in-out	duration-300"
        >
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z" fill="#fff"/></svg>
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className=" text-gray-700 focus:outline-none shadow-none p-2 text-lg rounded-full outline-none ring-transparent cursor-pointer ease-in-out duration-300"
        >
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z" fill="#212121"/></svg>
        </button>
      )}
    </div>
  );
}

export default Toggle