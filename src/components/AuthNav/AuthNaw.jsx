import { NavLink } from "react-router-dom";
import { Button, Stack } from "@mui/material";

export const AuthNav = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        component={NavLink}
        to="/register"
        variant="contained"
        color="primary"
      >
        Register
      </Button>
      <Button
        component={NavLink}
        to="/login"
        variant="contained"
        color="primary"
      >
        Log In
      </Button>
    </Stack>
  );
};
