import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

import { Button, Typography, Stack } from "@mui/material";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography variant="subtitle1" color="text.primary">
        Welcome, {user.name}
      </Typography>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </Stack>
  );
};
