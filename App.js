import React from "react";
import "./styles.css";
import SideNavBar from "/Components/Sidebar";
import HeaderBar from "/Components/HeaderBar";

export default function App() {
  return (
    <div>
      <HeaderBar />

      <SideNavBar />
    </div>
  );
}
