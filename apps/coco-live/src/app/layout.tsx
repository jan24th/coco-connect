import "../tailwind-input/globals.css";
import "ui/styles.css";
import { Roboto } from "next/font/google";
import { CcHeader } from "../components/molecules/CcHeader";
import clsx from "clsx";

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
      <body className={clsx(`${robot.variable} font-sans`, "min-h-screen")}>
        <CcHeader />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
