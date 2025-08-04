import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Option1 from "@/pages/option1";
import Option2 from "@/pages/option2";
import Option3 from "@/pages/option3";
import Option4 from "@/pages/option4";
import Option5 from "@/pages/option5";
import Option6 from "@/pages/option6";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      {/* <Route path="/" component={Home} /> */}
      <Route path="/" component={Option1} />
      {/* <Route path="/option2" component={Option2} />
      <Route path="/option3" component={Option3} />
      <Route path="/option4" component={Option4} />
      <Route path="/option5" component={Option5} />
      <Route path="/option6" component={Option6} /> */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
