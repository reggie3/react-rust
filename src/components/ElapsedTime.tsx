import { Typography } from "@mui/material";
import React, { ReactElement } from "react";

interface Props {
  timeEndMillis: number | undefined;
  timeStartMillis: number | undefined;
}

function ElapsedTime({
  timeEndMillis,
  timeStartMillis,
}: Props): ReactElement | null {
  if (!timeStartMillis || !timeEndMillis) return null;

  return (
    <Typography variant="body1" py={2}>
      ElapsedTime: {timeEndMillis - timeStartMillis} ms
    </Typography>
  );
}

export default ElapsedTime;
