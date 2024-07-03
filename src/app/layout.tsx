import "@mantine/carousel/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/nprogress/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/tiptap/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import type { Metadata } from "next";
import "./globals.scss";
import { theme } from "./theme/theme";
import { Notifications } from "@mantine/notifications";
import NavBar from "./components/navbar/NavBar";

export const metadata: Metadata = {
  title: "Loded Frezeer",
  description: "An in-flat web app for managing flat chores, bills, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          <Notifications />
          <NavBar /> 
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
