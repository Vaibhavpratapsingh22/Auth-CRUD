"use client";

import { userDetails } from "@/services";
import postDetails from "@/services/postDetails";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const CreatePost = () => {
  const router: any = useRouter();

  const [postData, setPostData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const firstNameRef = useRef<any>("");
  const lastNameRef = useRef<any>("");
  const emailRef = useRef<any>("");

  const handleCreate = () => {
    const updatedPOst = { ...postData };

    if (firstNameRef.current.name === "ownerFname") {
      updatedPOst.firstName = firstNameRef.current.value;
    }
    if (lastNameRef.current.name === "ownerLname") {
      updatedPOst.lastName = lastNameRef.current.value;
    }
    if (emailRef.current.name === "email") {
      updatedPOst.email = emailRef.current.value;
    }
    setPostData(updatedPOst);
    if (
      updatedPOst.firstName.trim() !== "" &&
      updatedPOst.lastName.trim() !== "" &&
      updatedPOst.email.trim() !== ""
    ) {
      createPost();
    }
  };
  const createPost = async () => {
    const response = await postDetails.createPost(postData);
    if (response.status === 200) router.push("./user");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10%",
          flexDirection: "column",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "white" }}>
          Create New Post
        </h1>
        <input
          ref={firstNameRef}
          name="ownerFname"
          type="text"
          required
          placeholder="First Name"
          style={{
            color: "black",
            borderRadius: "20px",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          ref={lastNameRef}
          name="ownerLname"
          type="text"
          required
          placeholder="Last Name"
          style={{
            borderRadius: "20px",
            color: "black",
            padding: "10px",
            marginBottom: "10px",
          }}
        />
        <input
          ref={emailRef}
          name="email"
          type="text"
          required
          placeholder="Email"
          style={{ borderRadius: "20px", color: "black", padding: "10px" }}
        />
        <button
          onClick={handleCreate}
          style={{
            backgroundColor: "red",
            padding: "10px",
            margin: "10px",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Create Post
        </button>
      </div>
    </>
  );
};

export default CreatePost;
