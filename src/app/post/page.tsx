"use client";
import React, { useEffect, useState } from "react";
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
import postDetails from "@/services/postDetails";
const Post = () => {
  const router: any = useRouter();
  const [postData, setPostData] = useState([]);

  const getData = async () => {
    const {
      data: { data },
    } = await postDetails.getPost();
    if (data?.length > 0) setPostData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  const handleDelete = async (id: any) => {
    const {
      data: { data },
    } = await postDetails.deletePost(id);
    console.log(data);
  };
  const handleCreateUser = () => {
    router.push('/create-post')
  };
  console.log(postData)
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ color: "white", fontSize: "35px", margin: "10px" }}>
        Post Details
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
        Create new post
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
          Go to user
        </Button>
      <div style={{ width: "50%" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Post Id</TableCell>
              <TableCell>Tags</TableCell>
              <TableCell>FirstName</TableCell>
              <TableCell>LastName</TableCell>
              <TableCell>Picture</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {postData?.map((items: any,index) => (
              <TableRow key={items.id}>
                <TableCell>{index+1}</TableCell>
                <TableCell>{items?.tags.join(", ")}</TableCell>
                <TableCell>{items?.owner?.firstName}</TableCell>
                <TableCell>{items?.owner?.lastName}</TableCell>
                <TableCell>
                  <img src={items?.image} style={{width:'50px', height:'50px'}} />
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
  );
};

export default Post;
