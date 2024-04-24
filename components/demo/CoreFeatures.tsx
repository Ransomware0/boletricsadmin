import apexchart from "@/public/images/demo/apexchart.png";
import eslint from "@/public/images/demo/eslint.png";
import form from "@/public/images/demo/form.png";
import nextjs from "@/public/images/demo/nextjs.png";
import nodejs from "@/public/images/demo/nodejs.png";
import npm from "@/public/images/demo/npm.png";
import prettier from "@/public/images/demo/prettier.png";
import react from "@/public/images/demo/react.png";
import sass from "@/public/images/demo/sass.png";
import tailwindcss from "@/public/images/demo/tailwindcss.png";
import typescript from "@/public/images/demo/typescript.png";
import webpack from "@/public/images/demo/webpack.png";
import Image from "next/image";

const featuresData = [
  {
    id: 1,
    title: "Typescript",
    desc: "A superset of JavaScript that adds static typing to the language.",
    icon: typescript,
  },
  {
    id: 2,
    title: "NextJS",
    desc: "A React framework for building server-side rendered and static web applications.",
    icon: nextjs,
  },
  {
    id: 3,
    title: "ReactJS",
    desc: "A JavaScript library for building user interfaces, particularly for single-page applications.",
    icon: react,
  },
  {
    id: 11,
    title: "Tailwindcss",
    desc: "A utility-first CSS framework that makes styling your web applications easy and efficient.",
    icon: tailwindcss,
  },
  {
    id: 4,
    title: "Npm",
    desc: "A package manager for JavaScript that helps in managing project dependencies.",
    icon: npm,
  },
  {
    id: 5,
    title: "NodeJS",
    desc: "A JavaScript runtime that allows developers to run JavaScript on the server side.",
    icon: nodejs,
  },
  {
    id: 6,
    title: "Apexcharts",
    desc: "A modern charting library that helps in creating interactive visualizations.",
    icon: apexchart,
  },
  {
    id: 7,
    title: "Prettier",
    desc: "An opinionated code formatter that ensures consistent code style across the project.",
    icon: prettier,
  },
  {
    id: 8,
    title: "ESLint",
    desc: "A tool for identifying and fixing code errors and enforcing coding standards.",
    icon: eslint,
  },
  {
    id: 9,
    title: "Form",
    desc: "Refers to various libraries and techniques for handling forms in web development.",
    icon: form,
  },
  {
    id: 10,
    title: "Webpack",
    desc: "A module bundler that helps in managing and bundling project assets.",
    icon: webpack,
  },
  {
    id: 12,
    title: "Sass",
    desc: "A popular CSS preprocessor that extends CSS with features like variables and nesting.",
    icon: sass,
  },
];

const CoreFeatures = () => {
  return (
    <section className="bg-primary/5 dark:bg-bg3 relative">
      <div className="bg-[url(/images/demo/why-choose-bg.png)] py-14 xl:py-28">
        <div className="container">
          <div className="max-w-[636px] mx-auto mb-10 lg:mb-14 text-center">
            <span className="btn-outline font-semibold py-2 px-4">
              {" "}
              <i className="las la-rocket"></i> Core Features
            </span>
            <h2 className="h2 mt-4 mb-6">
              Presenting our Fundamental Attributes
            </h2>
            <p>
              Discover myriad incredible features in BankHub admin template,
              with responsive cleanliness. Utilizing folder structure.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-4 xxl:gap-6">
            {featuresData.map(({ id, desc, icon, title }) => (
              <div
                key={id}
                className="col-span-12 md:col-span-6 lg:col-span-4 box p-3 shadow-[0px_6px_30px_0px_rgba(0,0,0,0.06)]">
                <div className="flex flex-col items-center gap-4 xxl:gap-6 p-4 md:p-5 xl:p-6 rounded-xl bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500">
                  <div className="hexagon shrink-0 bg-n0 dark:bg-bg4 flex items-center justify-center shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)]">
                    <Image src={icon} className="relative z-[3]" alt="icon" />
                  </div>
                  <div className="text-center">
                    <h5 className="h5 mb-4">{title}</h5>
                    <p className="text-sm">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
