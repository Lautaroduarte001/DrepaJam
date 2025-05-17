// src/components/Sidebar/SideBar.tsx
import React from "react";
import Styles from "./SideBar.module.css";
import { X } from "lucide-react";

interface MenuItem {
  name: string;
  icon: React.ReactNode;
  path: string;
}

interface Props {
  logo: string;
  bottomLogo: string;
  menuItems: MenuItem[];
  currentPath: string;
  isOpen: boolean;
  onClose: () => void;
}

const SideBar = ({
  logo,
  bottomLogo,
  menuItems,
  currentPath,
  isOpen,
  onClose
}:Props) => {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className={Styles.sidebarContainer}>
        <div className={Styles.logoContainer}>
          <img src={logo} alt="Logo" />
        </div>
        <nav className={Styles.menu}>
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={
                currentPath === item.path
                  ? `${Styles.menuItem} ${Styles.active}`
                  : Styles.menuItem
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </nav>
        <div className={Styles.bottomLogo}>
          <img src={bottomLogo} alt="Bottom Logo" />
        </div>
      </aside>

      {/* Mobile modal */}
      {isOpen && (
        <div className={Styles.mobileSidebar}>
          <div className={Styles.mobileHeader}>
            <X onClick={onClose} size={28} />
          </div>
          <div className={Styles.logoContainer}>
            <img src={logo} alt="Logo" />
          </div>
          <nav className={Styles.menu}>
            {menuItems.map((item) => (
              <div
                key={item.name}
                className={
                  currentPath === item.path
                    ? `${Styles.menuItem} ${Styles.active}`
                    : Styles.menuItem
                }
                onClick={onClose}
              >
                {item.icon}
                <span>{item.name}</span>
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default SideBar;