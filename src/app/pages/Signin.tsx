"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
const submitEvent = new Event("submit") as Event;

const Signin = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    // Inputların doluluk durumunu kontrol edin
    if (!credentials.username || !credentials.password) {
      alert("Kullanıcı adı ve şifre gereklidir.");
      return;
    }
    const result = await signIn("credentials", {
      username: credentials.username,
      password: credentials.password,
      redirect: false,
    });
    if (result?.error) {
      console.error("Giriş hatası:", result.error);
    } else {
      console.log("Giriş başarılı!");
    }
  };
  const sahteKullaniciBilgileri = {
    username: "testuser",
    password: "testpassword",
  };
  const testGirisYap = () => {
    setCredentials(sahteKullaniciBilgileri);
    handleSubmit(new Event("submit") as Event);
  };
  return (
    <div className="container">
      <div className="w-100 h-screen flex justify-center items-center">
        <div className="card card-compact w-96 shadow-xl bg-gray-50">
          <div className="card-body text-center">
            <h2 className="text-lg font-bold py-2">Sign In</h2>
            <div className="gap-4 flex flex-col">
              <div>
                <input
                  type="text"
                  className="shadow-2xl w-full p-3 rounded-lg"
                  placeholder="Username"
                  onChange={(e) =>
                    setCredentials({
                      ...credentials,
                      username: e.target.value,
                    })
                  }
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="password"
                  className="shadow-2xl w-full p-3 rounded-lg"
                  placeholder="Password"
                  onChange={(e) =>
                    setCredentials({
                      ...credentials,
                      password: e.target.value,
                    })
                  }
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="card-actions justify-center pt-3 pb-1">
              <button
                className="btn w-full btn-info text-white"
                onClick={testGirisYap}
              >
                Login
              </button>
            </div>
            <div className="flex text-xs">
              Create a new account if you don't have one{" "}
              <Link className="underline ms-1 font-medium" href="/deneme">
                Open Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Signin };
