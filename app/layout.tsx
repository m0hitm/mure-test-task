import type { Metadata } from "next";
import { type ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";

import { Providers } from "./components/providers";
import { Container, CssBaseline } from "@mui/material";
import { theme } from "./themes/themes";

export const metadata: Metadata = {
  title: "Mure Pools",
  description: "Test Task",
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Providers>
            <Container
              maxWidth="lg"
              sx={{ minHeight: "100vh", padding: "20px 0" }}
            >
              {props.children}
            </Container>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
