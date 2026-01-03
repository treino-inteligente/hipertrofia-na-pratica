import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { useMemo } from "react";

// Custom hook for base path routing in GitHub Pages
function useBaseLocation() {
  const base = import.meta.env.BASE_URL || "/";
  
  return useMemo(() => {
    return () => {
      const path = window.location.pathname;
      // Remove base from path
      const relativePath = path.startsWith(base) 
        ? path.slice(base.length - 1) || "/"
        : path;
      
      return [
        relativePath,
        (to: string) => {
          // Add base when navigating
          const fullPath = to === "/" ? base : `${base}${to.replace(/^\//, "")}`;
          window.history.pushState(null, "", fullPath);
          // Trigger popstate to update wouter
          window.dispatchEvent(new PopStateEvent("popstate"));
        }
      ] as [string, (path: string) => void];
    };
  }, [base]);
}

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  const hook = useBaseLocation();
  
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router hook={hook}>
            <Routes />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
