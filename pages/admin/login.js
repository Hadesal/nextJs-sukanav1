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
          <label>
            Email:
            <input
              type={"email"}
              name={"email"}
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
          </label>
          <label>
            Password:
            <input
              type={"password"}
              name={"password"}
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
          </label>
          <button type="submit">Login</button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </>
  );
}
