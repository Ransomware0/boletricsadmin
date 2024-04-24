import SearchBar from "@/components/shared/SearchBar";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="box xl:p-6 ">
      <div className="box bg-primary/5 dark:bg-bg3 xl:p-10 xxxl:p-[60px] grid grid-cols-2 gap-4 items-center">
        <div className="col-span-2 md:col-span-1">
          <h2 className="display-4 mb-6">How Can We Help You?</h2>
          <p className="mb-7 lg:mb-10">
            Welcome to our Help Center! We&apos;re here to provide you with the
            assistance and information you need.
          </p>
          <SearchBar classes="bg-n0 dark:bg-bg4 xxl:max-w-[610px] max-w-[300px] flex p-1 w-full" />
        </div>
        <div className="col-span-2 md:col-span-1 flex justify-center md:justify-end">
          <Image
            src="/images/help-center.png"
            width={384}
            height={325}
            alt="help center img"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
