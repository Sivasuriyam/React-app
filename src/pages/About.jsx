import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About DriveZone</h1>
        <p>
          Your trusted destination for premium cars,
          luxury vehicles, and exceptional customer service.
        </p>
      </div>

      <div className="about-section">
        <h2>Who We Are</h2>
        <p>
          DriveZone Car Showroom is one of the leading automobile
          dealerships offering a wide range of luxury, SUV,
          sedan, and family vehicles. We are committed to
          helping customers find the perfect car that matches
          their lifestyle and budget.
        </p>
      </div>

      <div className="about-cards">
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            To provide high-quality vehicles with outstanding
            customer satisfaction and affordable pricing.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Vision</h3>
          <p>
            To become the most trusted and innovative car
            showroom in the automotive industry.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Values</h3>
          <p>
            Integrity, quality, transparency, and customer
            happiness are at the heart of everything we do.
          </p>
        </div>
      </div>

      <div className="stats-section">
        <div className="stat">
          <h2>500+</h2>
          <p>Cars Sold</p>
        </div>

        <div className="stat">
          <h2>1000+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat">
          <h2>50+</h2>
          <p>Car Models</p>
        </div>

        <div className="stat">
          <h2>10+</h2>
          <p>Years Experience</p>
        </div>
      </div>
    </div>
  );
}

export default About;