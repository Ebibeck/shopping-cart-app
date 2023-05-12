import Navbar from "../components/navbar";

export default function DashboardLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
          <div className="flex flex-col h-screen w-screen">
            <Navbar />
            <div className="h-full w-full p-1">{children}</div>
          </div>
    );
  }
  