import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <AppBar
      position="static"
      style={{
        margin: "10px"
      }}
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Typography variant="h5" component="div">
          Weather App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
