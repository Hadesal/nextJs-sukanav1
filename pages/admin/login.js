import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const { status } = useSession();
  const router = useRouter();
  console.log(status);
  const handleLogin = async (event) => {
    event.preventDefault();
    const res = await signIn("credentials", {
      email: loginData.email,
      password: loginData.password,
      redirect: false,
    });
  };
  useEffect(() => {
    if (status !== "loading" && status === "authenticated") {
      router.replace("/admin/addimmobile");
    }
  }, [router, status]);

  return (
    <div className="login-container">
      <div>
        <div className="logo-login">
          <Link
            href={{
              pathname: "/",
            }}
            className="nav__logo"
          >
            <Image src={logo} alt="" className="logo-login" />
          </Link>
        </div>
        <form onSubmit={handleLogin}>
          <div className="input-field">
            Email:
            <input
              type={"email"}
              name={"email"}
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
          </div>
          <div className="input-field">
            Password:
            <input
              type={"password"}
              name={"password"}
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
