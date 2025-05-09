import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import { Box, Button } from "@mui/material";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? "#fff" : "#ddd",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <NavLink to="/" style={linkStyle}>
        <Button color="inherit">Home</Button>
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" style={linkStyle}>
          <Button color="inherit">Contacts</Button>
        </NavLink>
      )}
    </Box>
  );
};
