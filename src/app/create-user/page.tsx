"use client";

import { userDetails } from "@/services";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const CreateUser = () => {
  const router: any = useRouter();

  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const firstNameRef = useRef<any>("");
  const lastNameRef = useRef<any>("");
  const emailRef = useRef<any>("");

  const handleCreate = () => {
    const updatedUser = { ...user };

    if (firstNameRef.current.name === "firstName") {
      updatedUser.firstName = firstNameRef.current.value;
    }
    if (lastNameRef.current.name === "lastName") {
      updatedUser.lastName = lastNameRef.current.value;
    }
    if (emailRef.current.name === "email") {
      updatedUser.email = emailRef.current.value;
    }
    setUser(updatedUser);
    if (
      updatedUser.firstName.trim() !== "" &&
      updatedUser.lastName.trim() !== "" &&
      updatedUser.email.trim() !== ""
    ) {
      createUser();
    }
  };
  const createUser = async () => {
    const response = await userDetails.createUser(user);
    if(response.status===200) router.push('./user')
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
          Create New User
        </h1>
        <input
          ref={firstNameRef}
          name="firstName"
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
          name="lastName"
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
          Create
        </button>
      </div>
    </>
  );
};

export default CreateUser;
