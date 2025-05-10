import React from "react";
import SideBar from "../components/Sidebar/SideBar";
import logo from '/images/logo.png';
import bottomLogo from '/images/logo_letras.png';
import { Home as HomeIcon, Store, Music, ClipboardList, User, Settings } from 'lucide-react';

const Home = () => {
  return (
    <SideBar
      logo={logo}
      bottomLogo={bottomLogo}
      currentPath="/home" // o el path actual según react-router
      menuItems={[
        { name: "Inicio", icon: <HomeIcon size={20} />, path: "/home" },
        { name: "Tienda", icon: <Store size={20} />, path: "/tienda" },
        { name: "Canciones", icon: <Music size={20} />, path: "/canciones" },
        { name: "Votaciones", icon: <ClipboardList size={20} />, path: "/votaciones" },
        { name: "Mis datos", icon: <User size={20} />, path: "/mis-datos" },
        { name: "Configuración", icon: <Settings size={20} />, path: "/configuracion" },
      ]}
    />
  );
};

export default Home;
