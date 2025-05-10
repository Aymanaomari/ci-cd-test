import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="header">
        <nav>
          <a href="#" className="logo-text">
            MyProduct
          </a>
          <ul className="nav-links">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>Welcome to MyProduct</h1>
          <p>Your solution for modern, efficient, and scalable workflows.</p>
          <button className="cta-btn">Get Started</button>
        </section>
        <section id="features" className="features">
          <h2>Features</h2>
          <ul>
            <li>🚀 Fast and reliable</li>
            <li>🔒 Secure by design</li>
            <li>⚙️ Easy integration</li>
          </ul>
        </section>
        <section id="pricing" className="pricing">
          <h2>Pricing</h2>
          <p>Simple and transparent pricing for everyone.</p>
          <ul>
            <li>Free Tier: $0/month</li>
            <li>Pro Tier: $10/month</li>
            <li>Enterprise: Contact us</li>
          </ul>
        </section>
        <section id="contact" className="contact">
          <h2>Contact Us</h2>
          <p>Email: support@myproduct.com</p>
        </section>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} MyProduct. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
