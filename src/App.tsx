/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import TechnologyPage from "./pages/TechnologyPage";
import CasesPage from "./pages/CasesPage";
import ContactPage from "./pages/ContactPage";
import GroqChatButton from "./components/GroqChatButton";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/tecnologia" element={<TechnologyPage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </main>
        <GroqChatButton />
      </div>
    </Router>
  );
}
