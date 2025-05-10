import React, { useState } from 'react';
import Styles from './SideBar.module.css';
import { Menu, X } from 'lucide-react'; // Íconos de hamburguesa y cierre

interface Props {
  logo: string;
  bottomLogo: string;
  menuItems: {
    name: string;
    icon: React.ReactNode;
    path: string;
  }[];
  currentPath: string;
  children?: React.ReactNode;
}

const SideBar = ({
  logo,
  bottomLogo,
  menuItems,
  currentPath,
}: Props) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileOpen(prev => !prev);

  return (
    <>
      {/* Botón hamburguesa visible solo en mobile */}
      <div className={Styles.hamburgerMenu} onClick={toggleMobileMenu}>
        <Menu size={28} />
      </div>

      {/* Sidebar Desktop */}
      <aside className={Styles.sidebarContainer}>
        <div className={Styles.logoContainer}>
          <img src={logo} alt="Logo" />
        </div>

        <nav className={Styles.menu}>
          {menuItems.map(item => (
            <div
              key={item.name}
              className={`${Styles.menuItem} ${currentPath === item.path ? Styles.active : ''}`}
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

      {/* Sidebar Mobile Modal */}
      {isMobileOpen && (
        <div className={Styles.mobileSidebar}>
          <div className={Styles.mobileHeader}>
            <X onClick={toggleMobileMenu} size={28} />
          </div>
          <div className={Styles.logoContainer}>
            <img src={logo} alt="Logo" />
          </div>
          <nav className={Styles.menu}>
            {menuItems.map(item => (
              <div
                key={item.name}
                className={`${Styles.menuItem} ${currentPath === item.path ? Styles.active : ''}`}
                onClick={toggleMobileMenu}
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
