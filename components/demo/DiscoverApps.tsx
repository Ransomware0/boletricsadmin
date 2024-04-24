import chart from "@/public/images/demo/chart.png";
import illustration from "@/public/images/demo/why-illustration.png";
import Image from "next/image";
import Link from "next/link";

const DiscoverApps = () => {
  return (
    <section className="bg-primary/5 dark:bg-bg3 relative">
      <Image
        className="absolute max-md:hidden bottom-5 left-4"
        src={illustration}
        alt="banner image"
      />
      <Image
        className="absolute max-md:hidden top-8 right-8"
        src={chart}
        alt="banner image"
      />
      <div className="bg-[url(/images/demo/why-choose-bg.png)] bg-cover bg-no-repeat py-14 xl:py-28">
        <div className="container">
          <div className="max-w-[1000px] mx-auto text-center">
            <h2 className="display-4 mt-4 mb-6">
              Discover Our Dashboard with Mobile Apps Stunning Today.
            </h2>
            <p className="m-7 lg:mb-10">
              A single license includes free support, free lifetime updates, and
              all the features listed above.
            </p>
            <Link href="/dashboards/style-01" className="btn">
              View Our Demos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverApps;
