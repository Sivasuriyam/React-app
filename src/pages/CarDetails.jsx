import { useParams } from "react-router-dom";
import "./CarDetails.css";

function CarDetails() {
  const { id } = useParams();

  const cars = [
    {
      id: 1,
      name: "BMW X5",
      price: "₹95,00,000",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200",
      engine: "2998cc Turbo Petrol",
      power: "375 HP",
      mileage: "12 km/l",
      topSpeed: "250 km/h",
      transmission: "Automatic",
      color: "Black"
    },
    {
      id: 2,
      name: "Mercedes C-Class",
      price: "₹65,00,000",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200",
      engine: "1999cc Petrol",
      power: "255 HP",
      mileage: "15 km/l",
      topSpeed: "240 km/h",
      transmission: "Automatic",
      color: "White"
    },
    {
    id: 3,
    name: "Audi A6",
    price: "₹72,00,000",
     engine: "2.0L Turbocharged Petrol",
      power: "250 HP",
     mileage: "15 km/l",
    topSpeed: "240 km/h",
    transmission: "6-Speed Automatic",
    color: "Dark Blue",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800",
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

  const car = cars.find(
    (item) => item.id === Number(id)
  );

  if (!car) {
    return <h2>Car Not Found</h2>;
  }

  return (
    <div className="details-page">
      <div className="details-container">
        <div className="details-image">
          <img src={car.image} alt={car.name} />
        </div>

        <div className="details-content">
          <h1>{car.name}</h1>

          <h2>{car.price}</h2>

          <p>
            <strong>Engine:</strong> {car.engine}
          </p>

          <p>
            <strong>Power:</strong> {car.power}
          </p>

          <p>
            <strong>Mileage:</strong> {car.mileage}
          </p>

          <p>
            <strong>Top Speed:</strong> {car.topSpeed}
          </p>

          <p>
            <strong>Transmission:</strong>{" "}
            {car.transmission}
          </p>

          <p>
            <strong>Color:</strong> {car.color}
          </p>
          <p>
            <strong>Engine:</strong>{car.engine}
          </p>

          <button className="book-btn">
            Book Test Drive
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;