import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header
        style={{
          background: "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "var(--shadow-md)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "#fff", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: "1.5rem" }}>&#127754;</span>
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>
            Explorador de Playas
          </span>
        </Link>

        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "0.8rem",
            fontWeight: 500,
            color: "rgba(255,255,255,0.75)",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Uruguay
        </span>
      </header>

      <main style={{ flex: 1, padding: "20px 24px", maxWidth: 1200, width: "100%", margin: "0 auto" }}>
        <Outlet />
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "16px 24px",
          fontSize: "0.8rem",
          color: "var(--color-text-muted)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        Explorador de Playas del Uruguay
      </footer>
    </div>
  );
}

export default Layout;
