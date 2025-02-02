"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";


function createUserData(
  userId: string,
  name: string,
  email: string,
  joinDate: string,
  status: string
) {
  return { userId, name, email, joinDate, status };
}


const usersData = [
  createUserData("USR001", "John Doe", "john@example.com", "2024-11-15", "Active"),
  createUserData("USR002", "Jane Smith", "jane@example.com", "2025-01-20", "Active"),
  createUserData("USR003", "Alice Brown", "alice@example.com", "2023-12-01", "Inactive"),
  createUserData("USR004", "Michael Green", "michael@example.com", "2025-02-01", "Active"),
  createUserData("USR005", "Chris Wilson", "chris@example.com", "2024-10-05", "Inactive"),
];

const getStatusColor = (status: string) => {
  return status === "Active" ? { text: "green", bg: "#DDEBDC" } : { text: "red", bg: "#FFD4D2" };
};

export default function UsersTable() {
  const [filter, setFilter] = React.useState<string>("All");
  const [filteredUsers, setFilteredUsers] = React.useState(usersData);

  // Handle filter changes
  React.useEffect(() => {
    if (filter === "Active") {
      setFilteredUsers(usersData.filter((user) => user.status === "Active"));
    } else if (filter === "Recent") {
      setFilteredUsers(usersData.filter((user) => new Date(user.joinDate) > new Date("2024-11-01")));
    } else {
      setFilteredUsers(usersData);
    }
  }, [filter]);

  return (
    <div>
      <h3 className="text-xl font-medium text-gray-600 mb-4">Users Management</h3>

      <Stack direction="row" spacing={2} className="mb-4">
        <Button variant={filter === "All" ? "contained" : "outlined"} onClick={() => setFilter("All")}>
          All Users
        </Button>
        <Button variant={filter === "Active" ? "contained" : "outlined"} onClick={() => setFilter("Active")}>
          Active Users
        </Button>
        <Button variant={filter === "Recent" ? "contained" : "outlined"} onClick={() => setFilter("Recent")}>
          Recent Users
        </Button>
      </Stack>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="users table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#f2f2f2" }}>
              <TableCell style={{ fontWeight: "bold" }}>User ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="left">Join Date</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.userId} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {user.userId}
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell align="left">{user.joinDate}</TableCell>
                <TableCell align="right">
                  <span
                    style={{
                      color: getStatusColor(user.status)?.text,
                      background: getStatusColor(user.status)?.bg,
                      fontWeight: "bold",
                      padding: "3px 8px",
                      borderRadius: "4px",
                      display: "inline-block",
                    }}
                  >
                    {user.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
