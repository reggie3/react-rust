import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { ReactElement, useRef, useState } from "react";
import ElapsedTime from "./ElapsedTime";

function JSFib(): ReactElement {
  const [fibSequence, setFibSequence] = useState<string[]>([]);
  const [timeStartMillis, setTimeStartMillis] = useState<number>();
  const [timeEndMillis, setTimeEndMillis] = useState<number>();
  const inputRef = useRef<HTMLInputElement>(null);

  const getFibonacciSequence = (
    num: number
  ): Promise<{ fibs: string[]; endMillis: number }> => {
    return new Promise((resolve) => {
      const fibs: string[] = [];
      var a = 1,
        b = 0,
        temp;

      while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
        fibs.push(b + ", ");
      }
      resolve({ fibs, endMillis: new Date().getTime() });
    });
  };

  const onClickGo = async () => {
    if (inputRef.current) {
      setTimeStartMillis(new Date().getTime());
      const { fibs, endMillis } = await getFibonacciSequence(
        inputRef.current.valueAsNumber
      );
      setFibSequence(fibs);
      setTimeEndMillis(endMillis);
    }
  };

  return (
    <Box
      sx={{
        border: "1px dashed green",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 2,
      }}
    >
      <Typography variant="h4" pb={1}>
        JS Fibonacci
      </Typography>
      <ElapsedTime
        timeStartMillis={timeStartMillis}
        timeEndMillis={timeEndMillis}
      />
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

export default JSFib;
