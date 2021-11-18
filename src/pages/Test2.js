import React, { useState } from "react";
import { Container, Grid, TextField } from "@mui/material";
import { Calculate } from "../components/Calculate";

export function Test2() {
  const [inputNumber, setInputNumber] = useState("");
  const [outputNumber, setOutputNumber] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ inputNumber });
    const total = inputNumber / 100;
    setOutputNumber(total);
  };

  return (
    <Container style={{ paddingTop: "150px" }}>
      <form style={{ width: "100%" }} onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <TextField
              id='outlined-number'
              label='ใส่ตัวเลข'
              type='number'
              fullWidth
              value={inputNumber}
              onChange={(e) => setInputNumber(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Calculate total={outputNumber} />
        </Grid>
      </form>
    </Container>
  );
}

export default Test2;
