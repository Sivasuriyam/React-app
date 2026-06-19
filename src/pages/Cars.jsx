import { Link } from "react-router-dom";
import "./Car.css"
const cars = [
  {
    id: 1,
    name: "BMW X5",
    price: "₹95,00,000",
    year: 2025,
    fuel: "Petrol",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800"
  },
  {
    id: 2,
    name: "Mercedes C-Class",
    price: "₹65,00,000",
    year: 2025,
    fuel: "Diesel",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800"
  },
  {
    id: 3,
    name: "Audi A6",
    price: "₹72,00,000",
    year: 2025,
    fuel: "Petrol",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800"
  },
  {
    id: 4,
    name: "Toyota Fortuner",
    price: "₹42,00,000",
    year: 2025,
    fuel: "Diesel",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800"
  },
  {
    id: 5,
    name: "Hyundai Creta",
    price: "₹18,00,000",
    year: 2025,
    fuel: "Petrol",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800"
  },
  {
    id: 6,
    name: "Mahindra Scorpio N",
    price: "₹22,00,000",
    year: 2025,
    fuel: "Diesel",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800"
  }
];

function Cars() {
  return (
    <div className="cars-page">
      <h1 className="cars-title">
        Explore Our Premium Collection
      </h1>

      <div className="cars-grid">
        {cars.map((car) => (
          <div className="car-card" key={car.id}>
            <img
              src={car.image}
              alt={car.name}
              className="car-image"
            />

            <div className="car-content">
              <h2>{car.name}</h2>

              <p>Year: {car.year}</p>
              <p>Fuel: {car.fuel}</p>

              <h3>{car.price}</h3>

              <Link
                to={`/car/${car.id}`}
                className="details-btn"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;