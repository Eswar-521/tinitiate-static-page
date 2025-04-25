import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Footer from "./components/Footer";

// Importing the pages
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
import Defaultphoneinput from "./pages/DefaultPhoneinput";
import Phoneinputcountrycode from "./pages/Phoneinputcountrycode";
import Floatinglabelinput from "./pages/Floatinglabelinput";
import Verificationcodeinput from './pages/Verificationcodeinput';
import Phonenumberselect from './pages/Phonenumberselect';
import Authenticationform from './pages/Authenticationform';
import License from "./pages/License"; 
import Changelog from './pages/Changelog';  


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
            <Route path="/blocks" element={<Blocks />} />
            <Route path="/default-phone-input" element={<Defaultphoneinput />} />
            <Route path="/phone-input-country-code" element={<Phoneinputcountrycode />} />
            <Route path="/floating-label-input" element={<Floatinglabelinput />} />
            <Route path="/verification-code-input" element={<Verificationcodeinput />} />
            <Route path="/phone-number-select" element={<Phonenumberselect />} />
            <Route path="/authentication-form" element={<Authenticationform />} />
            <Route path="/license" element={<License />} />
            <Route path='/Changelog' element={<Changelog/>}/> 
          </Routes>
        </div>
        <RightSidebar />
      </div>
      <Footer />
    </div>
  );
};

export default App;
