import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bottom-0 container mx-auto bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full container mx-auto p-4 md:px-6 md:py-2">
          
          
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
