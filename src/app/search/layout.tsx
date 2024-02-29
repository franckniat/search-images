import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Search free pictures",
    description: "Search for free photos and videos on Pexels",
};

export default function SearchLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
