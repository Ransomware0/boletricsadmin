import chart from "@/public/images/demo/chart.png";
import tailwind from "@/public/images/demo/tailwindcss.png";
import illustration from "@/public/images/demo/why-illustration.png";
import Image from "next/image";
const whyusData = [
  {
    id: 1,
    title: "Quality & Clean Code",
    desc: "Master clean code for amazing team and software excellence.",
    icon: <i className="las relative text-4xl text-primary z-[2] la-code"></i>,
  },
  {
    id: 2,
    title: "Tailwindcss v3.3.36",
    desc: "Master clean code for amazing team and software excellence.",
    icon: <Image src={tailwind} className="relative z-[2]" alt="tailwind" />,
  },
  {
    id: 3,
    title: "Handmade Icons",
    desc: "Create Icon System using SVG Sprites in BankHub.",
    icon: (
      <i className="las relative text-4xl text-primary z-[2] la-pen-nib"></i>
    ),
  },
  {
    id: 4,
    title: "Limitless Components",
    desc: "Vast web design layouts and UI kits in limitless collection.",
    icon: (
      <i className="las relative text-4xl text-primary z-[2] la-layer-group"></i>
    ),
  },
  {
    id: 5,
    title: "Easy Customizable",
    desc: "Customize layout, settings, and content with easy steps.",
    icon: <i className="las relative text-4xl text-primary z-[2] la-edit"></i>,
  },
  {
    id: 6,
    title: "Responsive & Friendly",
    desc: "Use Responsive Design to Connect with all Device Users.",
    icon: (
      <i className="las relative text-4xl text-primary z-[2] la-street-view"></i>
    ),
  },
  {
    id: 7,
    title: "Premium Support",
    desc: "Constant support create a ticket for any faced issues.",
    icon: (
      <i className="las relative text-4xl text-primary z-[2] la-hands-helping"></i>
    ),
  },
  {
    id: 8,
    title: "Colors Options",
    desc: "Alter others via SCSS variables effortlessly.",
    icon: (
      <i className="las relative text-4xl text-primary z-[2] la-palette"></i>
    ),
  },
  {
    id: 9,
    title: "Icon Options",
    desc: "Alter others via SCSS variables effortlessly.",
    icon: <i className="las relative text-4xl text-primary z-[2] la-robot"></i>,
  },
];

const WhyChoose = () => {
  return (
    <section id="whyus" className="bg-primary/5 dark:bg-bg3 relative">
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
          <div className="max-w-[636px] mx-auto mb-10 lg:mb-14 text-center">
            <span className="btn-outline font-semibold py-2 px-4">
              {" "}
              <i className="las la-rocket"></i> Why you choose us
            </span>
            <h2 className="h2 mt-4 mb-6">Exclusive Key Features</h2>
            <p>
              Seamless Flow, Uninterrupted Style: Embrace Excellence with
              Built-in Support.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-4 xxl:gap-6 relative z-[2]">
            {whyusData.map(({ id, desc, icon, title }) => (
              <div
                key={id}
                className="col-span-12 md:col-span-6 lg:col-span-4 box p-3 shadow-[0px_6px_30px_0px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-4 xxl:gap-6 p-4 md:p-5 xl:p-6 rounded-xl bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500">
                  <div className="hexagon shrink-0 bg-n0 dark:bg-bg4 flex items-center justify-center shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)]">
                    {icon}
                  </div>
                  <div>
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

export default WhyChoose;
