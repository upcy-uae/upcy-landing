// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
import "@/src/assets/styles/globals.css";

export default function RootLayout({ children }) {
  return children;
}
