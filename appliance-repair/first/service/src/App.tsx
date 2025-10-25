import { ThemeProvider } from "@/components/theme/theme-provider";

import Navbar from "@/components/Navbar/Navbar";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
