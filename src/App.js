import './App.css';
import React from 'react';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
  <div className="logo">Golden Aura</div>
  <ul className="nav-links">
    <li><a href="#hero">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#gallery">Gallery</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>


<header className="hero" id="hero">
  <video autoPlay loop muted playsInline className="hero-video">
    <source src="\videos\BanquetVideo.MP4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="hero-content">
    <h1>Welcome to The Golden Aura Resort</h1>
    <p>Where Your Celebrations Come to Life</p>
    <a href="#contact" className="book-now-btn">Book Now</a>
  </div>
</header>

      <section className="about" id="about">
        <h2>About Us</h2>
        <p>
          The Golden Aura Resort offers luxurious venues for weddings, parties, and corporate events. Our spacious
          interiors and premium service guarantee an unforgettable experience.
        </p>
      </section>

      <section className="services" id="services">
        <h2>Our Services</h2>
        <ul>
          <li>Wedding Receptions</li>
          <li>Birthday Parties</li>
          <li>Corporate Events</li>
          <li>Catering & Decoration</li>
        </ul>
      </section>
      <section className="gallery" id="gallery">
  <h2>Gallery</h2>
  <div className="gallery-grid">
    <img src="/images/GoldenAuraMainBuilding.jpeg" alt="Wedding" />
<img src="/images/BuildingBack.jpeg" alt="Party" />
<img src="/images/ParkSideBuilding.jpeg" alt="Banquet" />
<img src="/images/SideGallary.jpeg" alt="Event" />

  </div>
</section>
<section className="contact" id="contact">
  <h2>Contact Us</h2>
  <form className="contact-form">
    <input type="text" placeholder="Your Name" required />
    <input type="email" placeholder="Your Email" required />
    <textarea placeholder="Your Message" rows="5" required></textarea>
    <button type="submit">Send Message</button>
  </form>
</section>


      <footer className="footer">
        <p>© 2025 The Golden Aura Resort. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
