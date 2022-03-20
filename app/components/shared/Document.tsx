import React from "react"
import { Links, LiveReload, Meta, Scripts, ScrollRestoration } from "remix"

export function Document({children}: {children: React.ReactNode}) {
    return (
    <html lang="en">
        <head>
            <Meta />
            <Links />
        </head>
        <body>
            {children}
            <ScrollRestoration />
            <Scripts />
            {process.env.NODE_ENV === "development" && <LiveReload />}
        </body>
    </html>
    )
}
