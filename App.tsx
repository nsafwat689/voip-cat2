import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import FAQ from "./pages/FAQ";
import VoipRates from "./pages/VoipRates";
import SipTrunk from "./pages/SipTrunk";
import WholesaleVoip from "./pages/WholesaleVoip";
import VoipReseller from "./pages/VoipReseller";
import VoipApi from "./pages/VoipApi";
import Contact from "./pages/Contact";
import CloudPBX from "./pages/CloudPBX";
import AIChatbot from "./components/AIChatbot";

// ScrollToTop component to reset scroll position on route change
function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <Switch>
            <ScrollToTop />
      <Route path={"/"} component={Home} />
      <Route path={"/articles"} component={Articles} />
      <Route path={"/articles/:id"} component={ArticleDetail} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/voip-rates"} component={VoipRates} />
      <Route path={"/sip-trunk"} component={SipTrunk} />
      <Route path={"/wholesale-voip"} component={WholesaleVoip} />
      <Route path={"/voip-reseller"} component={VoipReseller} />
      <Route path={"/voip-api"} component={VoipApi} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/cloud-pbx"} component={CloudPBX} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        switchable={false}
      >
        <TooltipProvider>
          <Toaster />
          <Router />
          <AIChatbot />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
