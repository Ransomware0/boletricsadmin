"use client";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="box p-3 md:p-4 xl:p-6 grid grid-cols-12 gap-6 items-center">
      <form className="col-span-12 lg:col-span-7">
        <div className="box bg-primary/5 dark:bg-bg3 lg:p-6 xl:p-8 border border-n30 dark:border-n500">
          <h3 className="h3 mb-4">Welcome Back!</h3>
          <p className="md:mb-6 md:pb-6 mb-4 pb-4 bb-dashed text-sm md:text-base">
            Sign in to your account and join us
          </p>
          <label htmlFor="email" className="md:text-lg font-medium block mb-4">
            Enter Your Email ID
          </label>
          <input
            type="email"
            className="w-full text-sm bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 mb-5"
            placeholder="Enter Your Email"
            id="email"
            required
          />
          <label
            htmlFor="password"
            className="md:text-lg font-medium block mb-4">
            Enter Your Password
          </label>
          <div className=" bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 mb-4 relative">
            <input
              type={showPass ? "text" : "password"}
              className="w-11/12 text-sm bg-transparent"
              placeholder="Enter Your Password"
              id="password"
              required
            />
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute ltr:right-5 rtl:left-5 top-1/2 cursor-pointer -translate-y-1/2">
              {showPass ? <IconEye /> : <IconEyeOff />}
            </span>
          </div>

          <Link href="#" className="flex justify-end text-primary">
            Forgot Password
          </Link>
          <p className="mt-3">
            Don&apos;t have an account?{" "}
            <Link className="text-primary" href="/auth/sign-up">
              Signup
            </Link>
          </p>
          <div className="mt-8 flex gap-6">
            <button type="submit" className="btn px-5">
              Login
            </button>
          </div>
        </div>
      </form>
      <div className="col-span-12 lg:col-span-5">
        <Image src="/images/auth.png" alt="img" width={533} height={560} />
      </div>
    </div>
  );
};

export default SignIn;
