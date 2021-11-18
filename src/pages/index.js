import React from "react";
import {
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

export function Test1() {
  const rows = [
    {
      name: "Wanwisa",
      lastname: "Sawatdee",
      age: 20,
    },
    {
      name: "Panee",
      lastname: "Tawan",
      age: 35,
    },
    {
      name: "Nuttanan",
      lastname: "Koonmin",
      age: 29,
    },
    {
      name: "Janjao",
      lastname: "kKhondon",
      age: 25,
    },
    {
      name: "Phumjai",
      lastname: "Fahkam",
      age: 33,
    },
    {
      name: "attama",
      lastname: "polawat",
      age: 30,
    },
    {
      name: "Wanrun",
      lastname: "Sasisan",
      age: 29,
    },
    {
      name: "Panuwat",
      lastname: "Nuntita",
      age: 34,
    },
    {
      name: "Ponlawat",
      lastname: "Khawjarern",
      age: 28,
    },
    {
      name: "Sawatdee",
      lastname: "Lowata",
      age: 23,
    },
    {
      name: "Adisorn",
      lastname: "Pornsawan",
      age: 30,
    },
    {
      name: "Bina",
      lastname: "Sara",
      age: 25,
    },
    {
      name: "Mullika",
      lastname: "Puwadit",
      age: 20,
    },
    {
      name: "Apichaya",
      lastname: "Ponsawan",
      age: 33,
    },
    {
      name: "Nuthapong",
      lastname: "Ponpom",
      age: 26,
    },
    {
      name: "Adithep",
      lastname: "Pongpun",
      age: 28,
    },
    {
      name: "Namwan",
      lastname: "Nita",
      age: 34,
    },
    {
      name: "Woradech",
      lastname: "Apinihan",
      age: 29,
    },
  ];
  console.log("rowwwwwww", rows);
  return (
    <Container>
      <Grid container spaceing={12}></Grid>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ชื่อ</TableCell>
            <TableCell>นามสกุล</TableCell>
            <TableCell>อายุ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((employee, i) => (
            <TableRow key={i}>
              <TableCell component='th' scope='row'>
                {employee.name}
              </TableCell>
              <TableCell>{employee.lastname}</TableCell>
              <TableCell>{employee.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default Test1;
