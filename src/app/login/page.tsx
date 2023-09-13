"use client";

import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    username: "",
    email: "",
  });
  const onLogin = async () => {
    try {
      const response = await axios.post("/api/login", user);
      router.push("/user");
    } catch (err: any) {
      console.error(err.message);
    }
  };
  const handleChange = (e: any) => {
    const { name, value }: any = e.target;
    if (name === "email") setUser({ ...user, email: value });
    if (name === "username") setUser({ ...user, username: value });
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
        <h1 style={{ marginBottom: "20px", color:"white" }}>Login</h1>
        <input
          onChange={(e: any) => handleChange(e)}
          name="email"
          type="text"
          placeholder="Email"
          style={{
            color: "black",
            borderRadius: "20px",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          onChange={(e: any) => handleChange(e)}
          name="username"
          type="text"
          placeholder="username"
          style={{ borderRadius: "20px", color: "black", padding: "10px" }}
        />
        <button
          onClick={onLogin}
          style={{
            backgroundColor: "red",
            padding: "10px",
            margin: "10px",
            color:"white",
            borderRadius: "5px",
          }}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
