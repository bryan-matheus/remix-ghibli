import {Outlet,} from "remix";
import type { MetaFunction } from "remix";
import { Document } from "./components/shared/Document";
import AllProviders  from "./providers/AllProviders";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Ghibli",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <Document>
        <AllProviders>
            <Outlet />
        </AllProviders>
    </Document>
  );
}
