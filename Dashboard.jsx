import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { Container, Typography, Box, Button, Paper, Grid } from "@mui/material";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from "recharts";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [counter, setCounter] = useState(0);
  const [activityData, setActivityData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  // Mock API calls
  useEffect(() => {
    // Simulate fetching activity trends
    setActivityData([
      { name: "Jan", value: 5 },
      { name: "Feb", value: 8 },
      { name: "Mar", value: 3 },
      { name: "Apr", value: 10 },
      { name: "May", value: 7 },
    ]);

    // Simulate fetching category distribution
    setCategoryData([
      { name: "Work", value: 40 },
      { name: "Exercise", value: 25 },
      { name: "Leisure", value: 35 },
    ]);
  }, []);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
        Welcome, {user?.displayName || "User"}
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5">Counter</Typography>
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Button onClick={() => setCounter(counter + 1)} variant="contained">
            Increment
          </Button>
          <Button onClick={() => setCounter(counter - 1)} variant="outlined">
            Decrement
          </Button>
          <Button onClick={() => setCounter(0)} variant="text">
            Reset
          </Button>
          <Typography variant="h6" sx={{ ml: 2 }}>
            Count: {counter}
          </Typography>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          User Activity Trends (Line Chart)
        </Typography>
        <LineChart width={600} height={300} data={activityData}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Monthly Activity (Bar Chart)
            </Typography>
            <BarChart width={500} height={300} data={activityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Activity Distribution (Pie Chart)
            </Typography>
            <PieChart width={400} height={300}>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                fill="#8884d8"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </Paper>
        </Grid>
      </Grid>

      <Grid container justifyContent="flex-end" sx={{ mt: 3 }}>
        <Button onClick={handleSignOut} variant="outlined" color="error">
          Sign Out
        </Button>
      </Grid>
    </Container>
  );
};

export default Dashboard;
