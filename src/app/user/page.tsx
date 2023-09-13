"use client";
import React, { useEffect, useState } from "react";
import userDetails from "@/services/userDetails";
import { useRouter } from "next/navigation";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
const User = () => {
  const router: any = useRouter();
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const {
      data: { data },
    } = await userDetails.getUser();
    if (data?.length > 0) setUserData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  const handleDelete = async (id: any) => {
    const {
      data: { data },
    } = await userDetails.deleteUser(id);
    console.log(data);
  };
  const handleCreateUser = () => {
    router.push("/create-user");
  };
  
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "white", fontSize: "35px", margin: "10px" }}>
          User Details
        </h1>
        <Button
          onClick={() => {
            handleCreateUser();
          }}
          style={{
            backgroundColor: "blue",
            color: "black",
            fontSize: "12px",
            margin: "10px",
          }}
        >
          Create new user
        </Button>
        <Button
          onClick={() => {
            router.push('/post')
          }}
          style={{
            backgroundColor: "blue",
            color: "black",
            fontSize: "12px",
            margin: "10px",
          }}
        >
          Go to post
        </Button>
        <div style={{ width: "50%" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User Id</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>FirstName</TableCell>
                <TableCell>LastName</TableCell>
                <TableCell>Picture</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData?.map((items: any, index) => (
                <TableRow key={items.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{items?.title}</TableCell>
                  <TableCell>{items?.firstName}</TableCell>
                  <TableCell>{items?.lastName}</TableCell>
                  <TableCell>
                    <img src={items?.picture} />
                  </TableCell>
                  <TableCell>
                    <EditIcon />
                  </TableCell>
                  <TableCell>
                    <DeleteIcon
                      onClick={() => {
                        handleDelete(items?.id);
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default User;
