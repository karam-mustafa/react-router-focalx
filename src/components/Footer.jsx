import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "20px 0",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
        flexWrap: "wrap",
        textAlign: "center",
      }}
    >
      <div
        style={{
          flex: "1 1 200px",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        <h3>About Us</h3>
        <p>
          We provide exceptional services to our clients, ensuring customer
          satisfaction at all times.
        </p>
      </div>
      <div
        style={{
          flex: "1 1 200px",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        <h3>Social Links</h3>
        <p>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
            Facebook
          </a>
        </p>
        <p>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
            Twitter
          </a>
        </p>
        <p>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
            LinkedIn
          </a>
        </p>
      </div>
      <div
        style={{
          flex: "1 1 200px",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        <h3>Logo</h3>
        <p>Our Company Logo</p>
      </div>
    </footer>
  );
}
