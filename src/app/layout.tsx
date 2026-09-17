import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "여우제이 | 링크 나무",
  description: "여우제이의 링크 모음",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
