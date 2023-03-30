import { useState } from "react";
import { useRouter } from "next/router";
import { adminLogin } from "@/utils/fechtMethods";

export default function Login() {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await adminLogin(loginData);
    if (response.isAdmin) {
      router.replace({
        pathname: "/admin/addimmobile",
        query: response.is,
      });
    } else {
      setErrorMessage(response.message);
    }
  };

  return (
    <>
      <div>
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
          <button type="submit" className="btn">Login</button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </>
  );
}
