import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar, Footer } from "@/components";
export function Layout() {
  return (
    <div>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="relative">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
