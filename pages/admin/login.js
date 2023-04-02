import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import loginValidate from "@/utils/validate";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState();
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/admin/addimmobile");
    }
  }, [router, status]);

  const handleLogin = async (values) => {
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    if (res.error) {
      setErrorMessage(res.error);
    }
    if (res?.ok) {
      router.replace("/admin/addimmobile");
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidate,
    onSubmit: handleLogin,
  });
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
        <form onSubmit={formik.handleSubmit}>
          <div className="input-field">
            <span className="input-span"> Email: </span>
            <input
              type={"email"}
              name={"email"}
              {...formik.getFieldProps("email")}
            />
          </div>
          <div className="input-field">
            <span className="input-span"> Password: </span>
            <input
              type={"password"}
              name={"password"}
              {...formik.getFieldProps("password")}
            />
          </div>

          <button type="submit" className="btn">
            Login
          </button>

          <div className="errors-cont">
            <span>
              {" "}
               {formik.errors.email ?  "email " + formik.errors.email : null}
            </span>
            <span>{formik.errors.password ? "password " + formik.errors.password : null}
            </span>
            <div>{errorMessage ? errorMessage : ""}</div>
          </div>
        </form>
      </div>
    </div>
  );
}
