import "./Profile.css";

function Profile() {
  const user = {
    name: "Suriya",
    email: "suriya@gmail.com",
    phone: "+91 9876543210",
    city: "TamilNadu ,SALEM ",
    bookings: 3
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
          alt="Profile"
          className="profile-img"
        />

        <h1>{user.name}</h1>
        <p className="role">Premium Customer</p>

        <div className="profile-details">
          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Phone:</strong> {user.phone}
          </p>

          <p>
            <strong>Location:</strong> {user.city}
          </p>

          <p>
            <strong>Cars Booked:</strong> {user.bookings}
          </p>
        </div>

        <button className="edit-btn">
          Edit Profile
        </button>
      </div>

      <div className="booking-history">
        <h2>Booking History</h2>

        <div className="booking-card">
          <h3>BMW X5</h3>
          <p>Test Drive Booked</p>
          <span>15 June 2026</span>
        </div>

        <div className="booking-card">
          <h3>Mercedes C-Class</h3>
          <p>Inquiry Submitted</p>
          <span>05 June 2026</span>
        </div>

        <div className="booking-card">
          <h3>Toyota Fortuner</h3>
          <p>Purchased</p>
          <span>20 May 2026</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;