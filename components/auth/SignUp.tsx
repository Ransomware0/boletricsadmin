import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="box xl:p-6 grid grid-cols-12 gap-4 xxxl:gap-6 items-center shadow-[0px_6px_30px_0px_rgba(0,0,0,0.04)]">
      <div className="col-span-12 lg:col-span-7">
        <div className="box bg-primary/5 dark:bg-bg3 lg:p-6 xl:p-8 border border-n30 dark:border-n500">
          <h3 className="h3 mb-4">Let&apos;s Get Started!</h3>
          <p className="md:mb-6 pb-4 mb-4 md:pb-6 bb-dashed text-sm md:text-base">
            Please Enter your Email Address to Start your Online Application
          </p>
          <div className="grid grid-cols-2 gap-x-4 xxxl:gap-x-6">
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="name"
                className="md:text-lg font-medium block mb-3">
                First Name
              </label>
              <input
                type="name"
                className="w-full text-sm bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 mb-5"
                placeholder="Jone"
                id="name"
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="lname"
                className="md:text-lg font-medium block mb-3">
                Last Name
              </label>
              <input
                type="lname"
                className="w-full text-sm bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 mb-5"
                placeholder="Doe"
                id="lname"
                required
              />
            </div>
          </div>
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
            htmlFor="referralcode"
            className="md:text-lg font-medium block mb-4">
            Someone invited you over?
          </label>
          <div className=" bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 mb-7 relative">
            <input
              type="text"
              className="w-full text-sm bg-transparent "
              placeholder="Enter the referral code"
              id="referralcode"
              required
            />
          </div>

          <p>
            By clicking submit, you agree to{" "}
            <Link className="text-primary" href="#">
              Terms of Use
            </Link>
            ,{" "}
            <Link className="text-primary" href="#">
              Privacy Policy
            </Link>
            ,{" "}
            <Link className="text-primary" href="#">
              E-sign
            </Link>{" "}
            &{" "}
            <Link className="text-primary" href="#">
              Communication Authorization
            </Link>
            .
          </p>
          <div className="mt-8">
            <button className="btn px-5">Sign Up</button>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-5 flex justify-center items-center">
        <Image src="/images/auth.png" alt="img" width={533} height={560} />
      </div>
    </div>
  );
};

export default SignUp;
