import React, { useState } from "react";
import Input from "../components/common/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function ForgetPassword() {
  const [formFields, setFormFields] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((u) => u.email === formFields.email);

    if (!formFields.email.trim()) newErrors.email = "Email is required";
    else if (!userExists) newErrors.email = "Email does not exist";

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    if (!formFields.newPassword)
      newErrors.newPassword = "New Password is required";
    else if (!passwordRegex.test(formFields.newPassword)) {
      newErrors.newPassword =
        "Password must be 8-15 characters long with 1 capital letter, 1 number, and 1 special character";
    }

    if (!formFields.confirmPassword)
      newErrors.confirmPassword = "Confirm Password is required";
    else if (formFields.newPassword !== formFields.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users = users.map((user) =>
      user.email === formFields.email
        ? { ...user, password: formFields.newPassword }
        : user
    );

    localStorage.setItem("users", JSON.stringify(users));
    alert("Password Reset successful! Please log in.");
    setTimeout(() => navigate("/login"), 1000);
  };

  return (
    <section className="h-[100vh] bg-neutral-200 dark:bg-neutral-700">
      <div className=" h-full p-10">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full max-w-md">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800 p-6">
              <h2 className="text-xl font-semibold text-center mb-4">
                Reset Your Password
              </h2>
              <div className="flex flex-col gap-5">
                <Input
                  icon={FiMail}
                  placeholder="Enter your email"
                  name="email"
                  onChange={handleChange}
                  error={errors.email}
                />
                <Input
                  icon={FiLock}
                  placeholder="Enter new password"
                  name="newPassword"
                  type="password"
                  onChange={handleChange}
                  error={errors.newPassword}
                />
                <Input
                  icon={FiLock}
                  placeholder="Confirm new password"
                  name="confirmPassword"
                  type="password"
                  onChange={handleChange}
                  error={errors.confirmPassword}
                />
                <div className="flex gap-5">
                  <button
                    className="w-full rounded bg-blue-500 text-white px-4 py-2 font-semibold"
                    onClick={handleSubmit}
                  >
                    Reset Password
                  </button>
                  <button
                    className="w-full rounded bg-pink-700 text-white px-4 py-2 font-semibold"
                    onClick={() => navigate("/login")}
                  >
                    Back to Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
