import "./globals.css";

export const metadata = {
  title: "Bare bone",
  description: "Template for nextjs",
};

import { Providers } from "@/features/plugins/redux/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="lg:p-2 md:p-1">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
