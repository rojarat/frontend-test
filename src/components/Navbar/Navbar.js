import React from "react";
import { AppBar, Toolbar, Typography, Link, Grid } from "@mui/material";

import styled from "@emotion/styled";
export function Navbar() {
  const Topbar = styled(AppBar)`
    color: var(--lightest-slate) !important;
    background-color: black !important;

    pointer-events: auto !important;
    user-select: auto !important;
  `;

  return (
    <Grid container spaceing={12}>
      <Topbar position='static'>
        <Toolbar>
          <Grid item xs={6}>
            <Typography
              variant='h3'
              component='div'
              sx={{ flexGrow: 3 }}
              style={{ color: "white" }}
            >
              Test
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Link href='/' style={{ color: "white" }} underline='hover'>
              Test 1
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link href='/2' style={{ color: "white" }} underline='hover'>
              Test 2
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link href='/3 ' style={{ color: "white" }} underline='hover'>
              Test 3
            </Link>
          </Grid>
          Test 1
        </Toolbar>
      </Topbar>{" "}
    </Grid>
  );
}

export default Navbar;
