import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <header
        style={{
          padding: 16,
          borderBottom: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <strong>Explorador de Playas</strong>
        </Link>

        <span style={{ fontSize: 12, opacity: 0.7 }}>Uruguay</span>
      </header>

      <main style={{ padding: 16, maxWidth: 900, margin: "0 auto" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
