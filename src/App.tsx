import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { hello } from "@scalajs/main";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(5);
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        size="small"
        label="hello count"
        variant="outlined"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setCount(Number(event.target.value));
        }}
      />
      <Button
        variant="contained"
        onClick={() => {
          hello(count);
        }}
      >
        hello
      </Button>
    </Box>
  );
}
