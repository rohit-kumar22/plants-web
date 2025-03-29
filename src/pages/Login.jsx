import React, { useState } from "react";
import Input from "../components/common/Input";
import { FiMail, FiUser } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formFields.email.trim()) newErrors.email = "Email is required";
    if (!formFields.password.trim())
      newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const { email, password } = formFields;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      setErrors({
        email: "Invalid email or password",
        password: "Invalid email or password",
      });
      return;
    }

    const token = JSON.stringify({
      email,
      timestamp: new Date().toISOString(),
    });

    localStorage.setItem("authToken", token);
    setSuccess("Login successful!");
    setErrors({});
    navigate("/dashboard");
  };

  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
      <div className=" h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        We are The RapiFuzz Team
                      </h4>
                    </div>

                    <p className="mb-4">Please login to your account</p>
                    <div className="flex flex-col gap-5">
                      <Input
                        icon={FiUser}
                        placeholder="Enter your email"
                        name="email"
                        onChange={handleChange}
                        error={errors.email}
                      />

                      <Input
                        icon={FiMail}
                        placeholder="Enter your Password"
                        name="password"
                        type="password"
                        onChange={handleChange}
                      />

                      <div className="mb-12 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out"
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                          onClick={handleSubmit}
                        >
                          Log in
                        </button>

                        <Link to="/password-reset">Forgot password?</Link>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pb-6">
                      <p className="mb-0 mr-2">Don't have an account?</p>

                      <button
                        type="button"
                        className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10"
                        onClick={() => navigate("/")}
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {success && (
              <p className="text-green-500 text-center mt-4">{success}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
