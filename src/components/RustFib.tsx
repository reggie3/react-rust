import { TextField, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { ReactElement, useRef, useState } from "react";

interface Props {}

function RustFib({}: Props): ReactElement {
  const [fibSequence, setFibSequence] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickGo = () => {};

  return (
    <Box
      sx={{
        border: "1px dashed red",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 2,
      }}
    >
      <Typography variant="h4" py={2}>
        Rust Fibonacci
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="number"
          inputRef={inputRef}
          defaultValue={100000}
        />
        <Button variant="contained" color="primary" onClick={onClickGo}>
          Go!
        </Button>
      </Box>
      <Box
        sx={{
          flex: 1,
          overflowY: "scroll",
          margin: 2,
          background: "aliceblue",
          padding: 2,
          width: "100%",
        }}
      >
        <Typography variant="caption">{fibSequence.reverse()}</Typography>
      </Box>
    </Box>
  );
}

export default RustFib;
