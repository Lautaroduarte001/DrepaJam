// src/pages/Home.tsx
import React, { useState } from "react";
import Navbar from "../components/Navbar/NavBar";
import SideBar from "../components/Sidebar/SideBar";
import logo from "/images/logo.png";
import bottomLogo from "/images/logo_letras.png";

import {
  Home as HomeIcon,
  Store,
  Music,
  ClipboardList,
  User,
  Settings
} from "lucide-react";

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen((p) => !p);

  const menuItems = [
    { name: "Inicio", icon: <HomeIcon size={20} />, path: "/home" },
    { name: "Tienda", icon: <Store size={20} />, path: "/tienda" },
    { name: "Canciones", icon: <Music size={20} />, path: "/canciones" },
    { name: "Votaciones", icon: <ClipboardList size={20} />, path: "/votaciones" },
    { name: "Mis datos", icon: <User size={20} />, path: "/mis-datos" },
    { name: "Configuración", icon: <Settings size={20} />, path: "/configuracion" }
  ];

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar onToggleMobileMenu={toggleMobileMenu} />
      <div style={{ display: "flex", flexGrow: 1, minHeight: 0 }}>
        <SideBar
          logo={logo}
          bottomLogo={bottomLogo}
          menuItems={menuItems}
          currentPath="/home"
          isOpen={mobileMenuOpen}
          onClose={toggleMobileMenu}
        />
        <main style={{ padding: "1rem", flexGrow: 1 }}>
          <h1>Bienvenido a DREPA JAM</h1>
        </main>
      </div>
    </div>
  );
};

export default Home;