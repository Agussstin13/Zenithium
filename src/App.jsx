import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageProvider";
import Index from "./pages/Index";
import { PrivacyPage, TermsPage } from "./pages/LegalPage";
import PaymentsPage from "./pages/PaymentsPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <LanguageProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/terminos-y-condiciones" element={<TermsPage />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPage />} />
          <Route path="/cobros" element={<PaymentsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </LanguageProvider>
  )
};