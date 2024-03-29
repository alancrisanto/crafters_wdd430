import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { Provider } from "next-auth/providers/index";
import { Providers } from "./Providers";

import NavbarComponent from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";


export const metadata: Metadata = {
	title: "Crafter Heaven",
	description: "Crafters Page where you can see and share your creations!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<NavbarComponent />
					{children}
					<Footer/>
				</Providers>
			</body>
		</html>
	);
}
