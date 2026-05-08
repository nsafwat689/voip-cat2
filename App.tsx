import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import AIChatbot from "./components/AIChatbot";
import FloatingSalesCTA from "./components/FloatingSalesCTA";
import MobileStickyCTA from "./components/MobileStickyCTA";

// ── Task 17: Lazy-load all pages (code-split per route) ──────────────────────
const Home         = lazy(() => import("./pages/Home"));
const Articles     = lazy(() => import("./pages/Articles"));
const ArticleDetail= lazy(() => import("./pages/ArticleDetail"));
const FAQ          = lazy(() => import("./pages/FAQ"));
const VoipRates    = lazy(() => import("./pages/VoipRates"));
const SipTrunk     = lazy(() => import("./pages/SipTrunk"));
const WholesaleVoip= lazy(() => import("./pages/WholesaleVoip"));
const VoipReseller = lazy(() => import("./pages/VoipReseller"));
const VoipApi      = lazy(() => import("./pages/VoipApi"));
const Contact      = lazy(() => import("./pages/Contact"));
const CloudPBX     = lazy(() => import("./pages/CloudPBX"));
const FreeTest     = lazy(() => import("./pages/FreeTest"));
const Network      = lazy(() => import("./pages/Network"));
const Coverage     = lazy(() => import("./pages/Coverage"));
const Security     = lazy(() => import("./pages/Security"));
const Status       = lazy(() => import("./pages/Status"));
const Integrations = lazy(() => import("./pages/Integrations"));
const Developers   = lazy(() => import("./pages/Developers"));
const Sip3CX       = lazy(() => import("./pages/Sip3CX"));
const SipFreePBX   = lazy(() => import("./pages/SipFreePBX"));
const AZTermination= lazy(() => import("./pages/AZTermination"));
const PremiumRouting= lazy(() => import("./pages/PremiumRouting"));
const NotFound      = lazy(() => import("./pages/NotFound"));
const CountryVoip   = lazy(() => import("./pages/CountryVoip"));

// Minimal full-screen spinner — shown during code-split loading (Task 17)
function PageLoader() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        <span className="text-xs text-muted-foreground uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>Loading…</span>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location]);
  return null;
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <ScrollToTop />
      <Switch>
        <Route path="/"                    component={Home} />
        <Route path="/articles"            component={Articles} />
        <Route path="/articles/:id"        component={ArticleDetail} />
        <Route path="/faq"                 component={FAQ} />
        <Route path="/voip-rates"          component={VoipRates} />
        <Route path="/sip-trunk"           component={SipTrunk} />
        <Route path="/sip-trunk/3cx"       component={Sip3CX} />
        <Route path="/sip-trunk/freepbx"   component={SipFreePBX} />
        <Route path="/wholesale-voip"      component={WholesaleVoip} />
        <Route path="/a-z-termination"     component={AZTermination} />
        <Route path="/premium-routing"     component={PremiumRouting} />
        <Route path="/voip-reseller"       component={VoipReseller} />
        <Route path="/voip-api"            component={VoipApi} />
        <Route path="/contact"             component={Contact} />
        <Route path="/cloud-pbx"           component={CloudPBX} />
        <Route path="/free-test"           component={FreeTest} />
        <Route path="/network"             component={Network} />
        <Route path="/coverage"            component={Coverage} />
        <Route path="/security"            component={Security} />
        <Route path="/status"              component={Status} />
        <Route path="/integrations"        component={Integrations} />
        <Route path="/developers"          component={Developers} />
        <Route path="/voip/:country"        component={CountryVoip} />
        <Route path="/404"                 component={NotFound} />
        <Route                             component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable={false}>
        <TooltipProvider>
          <Toaster />
          <Router />
          {/* Task 17: Chatbot lazy-mounts only after page load */}
          <AIChatbot />
          <FloatingSalesCTA />
          <MobileStickyCTA />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
