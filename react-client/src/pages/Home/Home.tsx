// src/pages/Home.tsx
import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/Sidebar/SideBar";
import logo from "/images/logo.png";
import bottomLogo from "/images/logo_letras.png";
import Post from "../../components/Post/Post";
import styles from "../Home/Home.module.css"
import RightSidebar from "../../components/RighSidebar/RightSidebar";

import {
  Home as HomeIcon,
  Store,
  Music,
  ClipboardList,
  User,
  Settings,
  Heart,
  MessageSquare,
  Share2
} from "lucide-react";

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen((p) => !p);

  const menuItemsDesktop = [
    { name: "Inicio", icon: <HomeIcon size={20} />, path: "/home" },
    { name: "Tienda", icon: <Store size={20} />, path: "/tienda" },
    { name: "Canciones", icon: <Music size={20} />, path: "/canciones" },
    { name: "Votaciones", icon: <ClipboardList size={20} />, path: "/votaciones" },
    { name: "Mis datos", icon: <User size={20} />, path: "/mis-datos" },
    { name: "Configuración", icon: <Settings size={20} />, path: "/configuracion" }
  ];

  const menuItemsMobile = [
    { name: "Inicio", icon: <HomeIcon size={20} />, path: "/home" },
    { name: "Tienda", icon: <Store size={20} />, path: "/tienda" },
    { name: "Votaciones", icon: <ClipboardList size={20} />, path: "/votaciones" },
  ];

  // Users posts

  const postContent = (
    <>
    <div className={styles.signUpPost}>
      <img src="/images/drum_icon.png" alt="" className={styles.instrumentLogo} />
      <p>@snati12 se ha anotado a la batería de Welcome to The Jungle!</p>
    </div>
    <div className={styles.signUpPost}>
      <img src="/images/guitar_icon.png" alt="" className={styles.instrumentLogo} />
      <p>@snati12 se ha anotado a la guitarra de Jump!</p>
    </div>
    
    </>
  );

  const interactions = [
    {
      name: "like",
      icon: <Heart size={16} />,
      count: 12,
      isActive: true
    },
    {
      name: "comment",
      icon: <MessageSquare size={16} />,
      count: 3,
      isActive: false
    },
    {
      name: "share",
      icon: <Share2 size={16} />,
      count: 1,
      isActive: false
    }
  ];

  const user = {
    photo: "/images/user.png",
    fullName: "Santiago Gimenez",
    username: "Snati12"
  };


  return (
    <div className={styles.wrapper}>
      <Navbar onToggleMobileMenu={toggleMobileMenu}
        menuItems={menuItemsMobile}
        currentPath="/home"
      />
      <div className={styles.inner}>
        <SideBar
          logo={logo}
          bottomLogo={bottomLogo}
          menuItems={menuItemsDesktop}
          currentPath="/home"
          isOpen={mobileMenuOpen}
          onClose={toggleMobileMenu}
        />
        <main className={styles.main}>
          <div className={styles.feed}>
           <Post
            userData={user}
            dateTime="hace 22 min"
            content={postContent}
            interaction={interactions}
            />
          </div>
        </main>
         <div className={styles.rightSidebarWrapper}>
          <RightSidebar
            ranking={<p>@jamer1 🏆<br />@jamer2 🔥<br />@jamer3 🎸</p>}
            ads={<p>🎁 ¡Canjeá tus Drepa Coins por una pizza! 🍕</p>}
          />
  </div>
      </div>
    </div>
  );
};

export default Home;