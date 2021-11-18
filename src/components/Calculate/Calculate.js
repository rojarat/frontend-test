import React from "react";
import { Button, TextField, Grid } from "@mui/material";

export function Calculate(props) {
  return (
    <>
      <Grid item xs={3}>
        <Button variant='contained' type='submit'>
          CALCULATE
        </Button>
      </Grid>
      <Grid item xs={6}>
        <TextField
          id='outlined-number'
          label='ผลลัพธ์'
          value={props.total}
          disabled
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </>
  );
}

export default Calculate;
