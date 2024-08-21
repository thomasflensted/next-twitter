import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { title: "X++" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={inter.className + 'h-screen bg-neutral-50 flex justify-center dark:bg-neutral-800'}>
                {children}
                <SpeedInsights />
            </body>
        </html>
    );
}