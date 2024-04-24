import figma from "@/public/images/demo/figma.png";
import penNib from "@/public/images/demo/pen-nib.png";
import popular from "@/public/images/demo/popular.png";
import puzzle from "@/public/images/demo/puzzle.png";
import Image from "next/image";
const featuresData = [
  {
    id: 1,
    title: "Color and Font Variety Choices",
    desc: "Effortlessly modify colors and fonts, or select from available choices.",
    icon: figma,
  },
  {
    id: 2,
    title: "Impressive Attributes & Components",
    desc: "Loaded with captivating features and elements to craft attractive pages.",
    icon: penNib,
  },
  {
    id: 3,
    title: "Contemporary Portfolio Arrangements",
    desc: "Easily generate and uphold a visually striking and influential portfolio.",
    icon: puzzle,
  },
];

const PopularDesign = () => {
  return (
    <section className="bg-primary/5 dark:bg-bg3 relative">
      <div className="bg-[url(/images/demo/why-choose-bg.png)] bg-cover bg-no-repeat py-14 xl:py-28">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 xxl:gap-6 items-center">
            <div className="col-span-12 md:col-span-6">
              <span className="btn-outline font-semibold py-2 px-4">
                {" "}
                <i className="las la-rocket"></i> Popular & Sleek Design
                Assortment
              </span>
              <h2 className="h2 mt-4 mb-6">
                Efficiency Meets Innovation in FinTech Banking
              </h2>
              <p className="mb-10 lg:mb-14">
                We comes up with most creative and useful in FinTech Banking
                Purpose Related Dashboard Template. We offer an array of UI kits
                for effortless design
              </p>
              <div className="flex flex-col gap-6 xl:gap-8">
                {featuresData.map(({ id, desc, icon, title }) => (
                  <div key={id} className="flex items-center gap-4 xxl:gap-6 ">
                    <div className="hexagon my-6 mx-0 shrink-0 bg-n0 dark:bg-bg4 flex items-center justify-center shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)]">
                      <Image src={icon} className="relative z-[2]" alt="icon" />
                    </div>
                    <div>
                      <h5 className="h5 mb-4">{title}</h5>
                      <p className="text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <Image className="xxl:max-w-[unset]" src={popular} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDesign;
