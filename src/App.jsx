import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import PhoneInputForm from './components/PhoneInputForm'; // Corrected import for PhoneInputForm

import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Quickstart from "./pages/Quickstart";
import JavaScript from "./pages/JavaScript";
import TypeScript from "./pages/TypeScript";
import ReactPage from "./pages/React";
import Nextjs from "./pages/Nextjs";
import Vue from "./pages/Vue";
import Svelte from "./pages/Svelte";
import Nuxt from "./pages/Nuxt";
import Blocks from './pages/Blocks';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex h-screen overflow-hidden">
        <LeftSidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/quickstart" element={<Quickstart />} />
            <Route path="/javascript" element={<JavaScript />} />
            <Route path="/typescript" element={<TypeScript />} />
            <Route path="/react" element={<ReactPage />} />
            <Route path="/next.js" element={<Nextjs />} />
            <Route path="/vue" element={<Vue />} />
            <Route path="/svelte" element={<Svelte />} />
            <Route path="/nuxt" element={<Nuxt />} />
            <Route path="/Blocks" element={<Blocks />} />
          </Routes>
        </div>
        <RightSidebar />
      </div>
      <Footer />
    </div>
  );
};

export default App;
