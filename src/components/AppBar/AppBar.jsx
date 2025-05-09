import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";

import { AppBar as MuiAppBar, Toolbar, Container, Box } from "@mui/material";
import { AuthNav } from "../AuthNav/AuthNaw";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <MuiAppBar position="static" color="primary" elevation={3}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Navigation />
          </Box>
          <Box>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};
