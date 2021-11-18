import React, { useState } from "react";
import {
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";
import axios from "axios";
import { useData } from "../hook/useData";
export function Test3() {
  const { data, mutate } = useData().GetData();
  const [datas, setDatas] = useState("");

  console.log(data);
  const Buttons = styled(Button)`
    background-color: gray;
  `;
  console.log("fet", data);
  // setOutput(fetchData);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = datas;
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    };

    axios
      .post("http://localhost:4000/api/textdata", { data }, headers)
      .then((response) => {
        console.log("Success");
        mutate();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container style={{ paddingTop: "100px" }}>
      <Grid container spacing={2}>
        <form style={{ width: "100%" }} onSubmit={onSubmit}>
          <Grid item xs={12}>
            <TextField
              id='outlined-number'
              label='ข้อความ'
              type='text'
              fullWidth
              value={datas}
              onChange={(e) => setDatas(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>{" "}
          <Grid
            item
            xs={12}
            style={{ textAlign: "center", paddingTop: "10px" }}
          >
            <Buttons variant='contained' type='submit'>
              SEND
            </Buttons>
          </Grid>
        </form>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ข้อความ</TableCell>
                <TableCell>ขนาด</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(data || []).map((outputs, i) => (
                <TableRow key={i}>
                  <TableCell component='th' scope='row'>
                    {outputs.data}
                  </TableCell>
                  <TableCell>{outputs.length}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Test3;
