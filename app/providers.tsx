"use client";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "sonner";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        disableTransitionOnChange
        enableSystem={false}
      >
        {children}
      </ThemeProvider>
    </>
  );
}
export default Providers;
