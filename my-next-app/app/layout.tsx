import Navbar from "./components/navbar";
import "./globals.css";
export const metadata = {
  title: "Shoping-cart-app",
  description: "Buy Your Stuffs",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen w-screen">
          <Navbar />
          <div className="h-full w-full p-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
