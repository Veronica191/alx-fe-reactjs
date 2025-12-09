import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    setError("");
    alert("Form submitted successfully!");
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px", width: "300px" }}>
      <h2>Registration Form (Controlled)</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        name="username"
        placeholder="Enter username"
        value={formData.username}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
      />

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
