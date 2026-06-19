import "./Home.css";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Suriya Car Showroom</h1>
          <p>
            Discover Luxury, Performance and Innovation.
            Find your dream car today.
          </p>

          <button className="btn">
            Explore Cars
          </button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured">
        <h2 className="section-title">
          Featured Cars
        </h2>

        <div className="featured-cars">
          <div className="feature-card">
            <img
              src="https://images.unsplash.com/photo-1555215695-3004980ad54e"
              alt="BMW"
            />
            <h3>BMW X5</h3>
            <p>₹95,00,000</p>
          </div>

          <div className="feature-card">
            <img
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
              alt="Mercedes"
            />
            <h3>Mercedes C-Class</h3>
            <p>₹65,00,000</p>
          </div>

          <div className="feature-card">
            <img
              src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b"
              alt="Audi"
            />
            <h3>Audi A6</h3>
            <p>₹72,00,000</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2 className="section-title">
          Why Choose Us?
        </h2>

        <div className="reasons">
          <div className="reason">
            <h3>Premium Cars</h3>
            <p>
              Wide range of luxury and family cars.
            </p>
          </div>

          <div className="reason">
            <h3>Best Price</h3>
            <p>
              Competitive prices with finance options.
            </p>
          </div>

          <div className="reason">
            <h3>Trusted Service</h3>
            <p>
              Professional support and after-sales service.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats">
        <div className="stat-box">
          <h2>500+</h2>
          <p>Cars Sold</p>
        </div>

        <div className="stat-box">
          <h2>1000+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat-box">
          <h2>50+</h2>
          <p>Car Models</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          © 2026 DriveZone Car Showroom.
          All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default Home;