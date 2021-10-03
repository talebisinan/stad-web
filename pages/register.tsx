import { createUserWithEmailAndPassword } from "@firebase/auth";
import { FirebaseError } from "@firebase/util";
import React from "react";
import { useForm } from "react-hook-form";
import AuthPage from "../components/AuthPage";
import { auth } from "../lib/firebase";

export default function RegisterPage(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user", user);
      })
      .catch((error: FirebaseError) => {
        const errorCode = error.code;
        if (errorCode === "auth/email-already-in-use") {
          setError("email", {
            type: "manual",
            message: "Email is already in use",
          });
        } else if (errorCode === "auth/weak-password") {
          setError("password", {
            type: "manual",
            message: "Password is too weak",
          });
        }
      });
  };
  return (
    <AuthPage
      title="Register to Stad"
      alternativeUrl="/login"
      alternativeText="Go to login page"
    >
      <form
        id="register"
        className="space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              type="email"
              {...register("email", { required: true })}
              autoComplete="email"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="mt-1">
            <input
              id="password"
              type="password"
              {...register("password", { required: true })}
              autoComplete="current-password"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>
        </div>

        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </a>
        </div>

        <div>
          <button
            form="register"
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </div>
      </form>
    </AuthPage>
  );
}
