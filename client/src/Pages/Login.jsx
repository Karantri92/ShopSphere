import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/orders`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      // Store JWT
      localStorage.setItem("token", data.token);

      // Store user information
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      alert("Login successful");

      navigate("/");
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 6 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 4 }}
        >
          Login
        </Typography>

        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
}