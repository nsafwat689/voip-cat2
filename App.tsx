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
import FreeTest from "./pages/FreeTest";
import Network from "./pages/Network";
import Coverage from "./pages/Coverage";
import Security from "./pages/Security";
import Status from "./pages/Status";
import Integrations from "./pages/Integrations";
import Developers from "./pages/Developers";
import AIChatbot from "./components/AIChatbot";
import FloatingSalesCTA from "./components/FloatingSalesCTA";
import MobileStickyCTA from "./components/MobileStickyCTA";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/"               component={Home} />
        <Route path="/articles"       component={Articles} />
        <Route path="/articles/:id"   component={ArticleDetail} />
        <Route path="/faq"            component={FAQ} />
        <Route path="/voip-rates"     component={VoipRates} />
        <Route path="/sip-trunk"      component={SipTrunk} />
        <Route path="/wholesale-voip" component={WholesaleVoip} />
        <Route path="/voip-reseller"  component={VoipReseller} />
        <Route path="/voip-api"       component={VoipApi} />
        <Route path="/contact"        component={Contact} />
        <Route path="/cloud-pbx"      component={CloudPBX} />
        <Route path="/free-test"      component={FreeTest} />
        {/* New pages — Tasks 6-9, 23, 24 */}
        <Route path="/network"        component={Network} />
        <Route path="/coverage"       component={Coverage} />
        <Route path="/security"       component={Security} />
        <Route path="/status"         component={Status} />
        <Route path="/integrations"   component={Integrations} />
        <Route path="/developers"     component={Developers} />
        <Route path="/404"            component={NotFound} />
        <Route                        component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable={false}>
        <TooltipProvider>
          <Toaster />
          <Router />
          <AIChatbot />
          {/* Task 15: Floating WhatsApp / Telegram */}
          <FloatingSalesCTA />
          {/* Task 3: Mobile sticky CTA bar */}
          <MobileStickyCTA />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
