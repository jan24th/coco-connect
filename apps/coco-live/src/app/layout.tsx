import "../tailwind-input/globals.css";
// include styles from the ui package
import "ui/styles.css";
import { Roboto } from "next/font/google";
import { CcHeader } from "../components/molecules/CcHeader";

const robot = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*todo:locale=>fonts chinese*/}
      <body className={`${robot.variable} font-sans`}>
        <CcHeader />
        <div className="container bg-zinc-900">{children}</div>
      </body>
    </html>
  );
}
