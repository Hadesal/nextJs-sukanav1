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
            Email:
            <input
              type={"email"}
              name={"email"}
              {...formik.getFieldProps("email")}
            />
            {/* TODO:Make error red please */}
            <span>{formik.errors.email ? formik.errors.email : null}</span>
          </div>
          <div className="input-field">
            Password:
            <input
              type={"password"}
              name={"password"}
              {...formik.getFieldProps("password")}
            />
            <span>
              {/* TODO:Make error red please */}
              {formik.errors.password ? formik.errors.password : null}
            </span>
          </div>
          {/* TODO:Make error red please */}
          <div>{errorMessage ? errorMessage : ""}</div>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
