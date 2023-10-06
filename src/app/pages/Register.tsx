"use client";
import Link from "next/link";
import { useState } from "react";
const submitEvent = new Event("submit") as Event;
import { useRouter } from "next/navigation";
import router from "next/router";
const Register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("user exist");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
    }
    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
      }
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.ok) {
        const formElement = document.getElementById(
          "formElement"
        ) as HTMLFormElement | null;
        const form = e.target as HTMLFormElement;

        if (formElement) {
          formElement.reset();
          router.push("/");
        }
      } else {
        alert("User registration failed.");
      }
    } catch (error) {
      alert(`Error during registration: ${error}`);
    }
  };

  return (
    <div className="container">
      <div className="w-100 h-screen flex justify-center items-center">
        <div className="card card-compact w-96 shadow-xl bg-gray-50">
          <div className="card-body text-center">
            <h2 className="text-lg font-bold py-2">Register</h2>
            <form
              id="formElement"
              onSubmit={handleSubmit}
              className="gap-4 flex flex-col"
            >
              <div>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="shadow-2xl w-full p-3 rounded-lg"
                  placeholder="Username"
                />
              </div>
              <div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="Email"
                  className="shadow-2xl w-full p-3 rounded-lg"
                  placeholder="E-Mail"
                />
              </div>
              <div>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="shadow-2xl w-full p-3 rounded-lg"
                  placeholder="Password"
                />
              </div>
              <button className="btn w-full btn-info text-white">
                Register
              </button>
            </form>
            {error && <p className="bg-red-500 text-white p-1">{error}</p>}
            <div className="flex text-xs">
              Create a new account if you don't have one{" "}
              <Link className="underline ms-1 font-medium" href={"/"}>
                Open Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Register };
