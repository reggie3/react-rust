import { Box, CssBaseline, makeStyles } from "@mui/material";
import { useState } from "react";
import JSFib from "./components/JSFib";
import RustFib from "./components/RustFib";

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          border: "1px dashed blue",
          height: "100vh",
        }}
      >
        <JSFib />
        <RustFib />
      </Box>
    </>
  );
}

export default App;
