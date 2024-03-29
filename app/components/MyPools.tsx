import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function MyPools() {
  const [addresses, setAddresses] = useState<string[]>([]);

  useEffect(() => {
    const pools = JSON.parse(localStorage.getItem("appAddresses") || "[]");
    setAddresses(pools);
  }, [addresses]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h5">Pools</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ padding: "5px" }}>
          {addresses.length > 0 ? (
            addresses.map((row, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link
                    href={`https://sepolia.etherscan.io/address/${row}`}
                    target="_blank"
                  >
                    <Typography variant="subtitle1" color="text.primary">
                      {row.substring(0, 10)}...
                    </Typography>
                  </Link>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Typography
                  textAlign="center"
                  variant="h6"
                  color="text.secondary"
                >
                  No Pools Available
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
