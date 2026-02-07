import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="px-10 py-10 border-t border-white/10 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} ShopX. All rights reserved.
    </footer>
  );
};

export default Footer;
