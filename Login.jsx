import { Button, Container } from "@mui/material";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

const Login = () => {
    const { signInWithGoogle } = useContext(AuthContext); // Access signInWithGoogle from context

    const handleLogin = async () => {
      await signInWithGoogle(); // Call the function
    };
 
  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Button 
        onClick={handleLogin} 
        variant="contained" 
        fullWidth
        sx={{ background: "linear-gradient(45deg, #64b5f6, #2196f3)", color: "#fff" }}
      >
        Sign In with Google
      </Button>
    </Container>
  );
};

export default Login;
