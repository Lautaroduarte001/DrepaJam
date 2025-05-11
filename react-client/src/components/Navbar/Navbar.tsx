// src/components/Navbar/Navbar.tsx
import React from "react";
import styles from "./Navbar.module.css";
import { Bell, Wallet, Menu } from "lucide-react";
import { Home as HomeIcon, Store, ClipboardList } from "lucide-react";

interface Props {
  onToggleMobileMenu: () => void;
}

const Navbar = ({ onToggleMobileMenu }: Props) => {
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
      <div className={styles.menuMobile}>
        <a href="/home">
          <HomeIcon size={23} color="white" />
        </a>
        <a href="/tienda" >
          <Store size={23} color="white" />
        </a>
        <a href="/votaciones">
          <ClipboardList size={23} color="white" />
        </a>
      </div>

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