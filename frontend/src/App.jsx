import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="mx-auto max-w-4xl px-4 py-4 flex items-center justify-between">
          <Link to="/" className="font-semibold">Barcode Health Scan</Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
