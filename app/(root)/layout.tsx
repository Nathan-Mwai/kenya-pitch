import React from "react";
import Navbar from "@/components/Navbar";

export default function rootLayout({children}: Readonly<{children : React.ReactNode}>) {
    return (
        <main className="font-work-sans">
            <Navbar/>
            {children}
        </main>
    )
}