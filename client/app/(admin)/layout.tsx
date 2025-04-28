import AdminNavbar from "../components/AdminNavbar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans ">
      <AdminNavbar />
      {children}
    </main>
  );
}
