// import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";

// const UserDataForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     email: "",
//     phone: "",
//   });
//   const [isDirty, setIsDirty] = useState(false); // Track unsaved changes

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setIsDirty(true); // Mark form as dirty
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const userId = uuidv4(); // Autogenerate user ID
//     const userData = { ...formData, id: userId };
//     localStorage.setItem("userData", JSON.stringify(userData)); // Save to localStorage
//     alert("Data saved successfully!");
//     setIsDirty(false); // Reset dirty state
//   };

//   // Warn about unsaved changes
//   useEffect(() => {
//     const handleBeforeUnload = (e) => {
//       if (isDirty) {
//         e.preventDefault();
//         e.returnValue = ""; // Required for Chrome
//       }
//     };

//     window.addEventListener("beforeunload", handleBeforeUnload);
//     return () => window.removeEventListener("beforeunload", handleBeforeUnload);
//   }, [isDirty]);

//   return (
//     <div>
//       <h2>User Data Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Address:</label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Phone:</label>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default UserDataForm;


import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, Button, TextField, Typography, Grid, Paper } from "@mui/material";

const UserDataForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [isDirty, setIsDirty] = useState(false); // Track unsaved changes

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setIsDirty(true); // Mark form as dirty
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = uuidv4(); // Autogenerate user ID
    const userData = { ...formData, id: userId };
    localStorage.setItem("userData", JSON.stringify(userData)); // Save to localStorage
    alert("Data saved successfully!");
    setIsDirty(false); // Reset dirty state
  };

  // Warn about unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = ""; // Required for Chrome
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)" }}>
      <Paper elevation={8} sx={{ p: 4, width: 400, borderRadius: "16px", backgroundColor: "#f9f9ff" }}>
        <Typography variant="h5" align="center" gutterBottom>
          User Data Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Address"
              variant="outlined"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Phone"
              variant="outlined"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              required
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              background: "linear-gradient(45deg, #6a11cb, #2575fc)",
              color: "white",
              fontWeight: "bold",
              py: 1.2,
              '&:hover': {
                background: "linear-gradient(45deg, #2575fc, #6a11cb)",
              },
            }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default UserDataForm;
