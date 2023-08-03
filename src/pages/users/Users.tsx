import "./users.scss";
import { userRows } from "../../data";
import AddUserModal from "../../components/addModal/AddUserModal";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Profile",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} />;
    },
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];
const Users = () => {
  const [open, setOpen] = useState(false);
  // Test the API
  // const { isLoading, data } = useQuery({
  //   queryKey: ["allusers"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/users").then((res) => res.json()),
  // });

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )} */}

      <DataTable slug="users" columns={columns} rows={userRows} />

      {open && <AddUserModal slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
