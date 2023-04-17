import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // Form  function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        { email, newPassword, answer }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast("Something went wrong in frontended !");
    }
  };
  return (
    <Layout title={"Forgot Password - Ecommerce App"}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">RESET PASSWORD</h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter Your Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
              required
            />
          </div>
          
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter Your Favourite Cartoon ?"
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Reset
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
