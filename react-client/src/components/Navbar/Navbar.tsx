// src/components/Navbar/Navbar.tsx
import React from "react";
import styles from "./Navbar.module.css";
import { Bell, Wallet, Menu } from "lucide-react";
import { Home as HomeIcon, Store, ClipboardList, User } from "lucide-react";


// Mobile
interface MenuItem {
  name: string;
  icon: React.ReactNode;
  path: string;
}


interface Props {
  onToggleMobileMenu: () => void;
  menuItems: MenuItem[];
  currentPath: string;
}

const Navbar = ({ onToggleMobileMenu, menuItems, currentPath }: Props) => {
  return (
    <nav className={styles.navbar}>
      {/* 1. Wallet (solo desktop) */}
      <div className={styles.walletContainer}>
        <div className={styles.wallet}>
          <Wallet size={20} color="#D8A95D" />
          <span className={styles.coinCount}>50.00</span>
        </div>
      </div>

      {/* 2. Iconos rápidos de navegación (solo mobile) */}
      {menuItems.map((item) => (
            <div
              key={item.name}
              className={
                currentPath === item.path
                  ? `${styles.menuItem} ${styles.active}`
                  : styles.menuItem
              }
            >
              {item.icon}
            </div>
          ))}

      {/* 3. Notificación + Avatar + Hamburger (desktop: oculta hamburger; mobile: oculta noti/avatar) */}
      <div className={styles.right}>
        <div className={styles.notification}>
          <Bell size={20} />
          <span className={styles.badge}>3</span>
        </div>
        <div className={styles.avatar}>
          <img src="images/user.png" alt="Usuario" />
          <span >@usuario</span>
        </div>
        <div className={styles.hamburgerContainer}>
            <button className={styles.hamburger} onClick={onToggleMobileMenu}>
          <Menu size={24} color="white" />
        </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;