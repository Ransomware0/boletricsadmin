"use client";
import comingSoon from "@/public/images/demo/layouts/coming-soon.png";
import detachedDark from "@/public/images/demo/layouts/detached-dark.png";
import detached from "@/public/images/demo/layouts/detached.png";
import horizontalDark from "@/public/images/demo/layouts/horizontal-dark.png";
import horizontal from "@/public/images/demo/layouts/horizontal.png";
import hoveredDark from "@/public/images/demo/layouts/hovered-dark.png";
import hovered from "@/public/images/demo/layouts/hovered.png";
import twoColumnDark from "@/public/images/demo/layouts/two-column-dark.png";
import twoColumn from "@/public/images/demo/layouts/two-column.png";
import verticalDark from "@/public/images/demo/layouts/vertical-dark.png";
import vertical from "@/public/images/demo/layouts/vertical.png";
import { useTheme } from "next-themes";
import Image from "next/image";

const whyusData = [
  {
    id: 1,
    title: "Vertical Layout",
    desc: 'A "vertical layout" refers to an arrangement or design where elements are positioned from top to bottom.',
    img: vertical,
    imgDark: verticalDark,
  },
  {
    id: 2,
    title: "Two Column layout",
    desc: 'A "Two Column" layout is a design structure that divides content into two distinct columns, typically side by side.',
    img: twoColumn,
    imgDark: twoColumnDark,
  },
  {
    id: 3,
    title: "Hovered Layout",
    desc: 'The term "Hovered Layout" isn\'t a standard design term, and it might refer to different things depending on the context.',
    img: hovered,
    imgDark: hoveredDark,
  },
  {
    id: 4,
    title: "Horizontal Layout",
    desc: 'A "vertical layout" refers to an arrangement or design where elements are positioned from top to bottom.',
    img: horizontal,
    imgDark: horizontalDark,
  },
  {
    id: 5,
    title: "Detached Layout",
    desc: 'A "vertical layout" refers to an arrangement or design where elements are positioned from top to bottom.',
    img: detached,
    imgDark: detachedDark,
  },
  {
    id: 6,
    title: "Coming Soon",
    desc: 'A "Coming Soon" layout is a design or webpage that is used to tease or announce the imminent launch of a new product.',
    img: comingSoon,
    imgDark: comingSoon,
  },
];

const CreativeLayouts = () => {
  const { theme } = useTheme();
  return (
    <section id="layouts" className="bg-n0 dark:bg-bg4 relative">
      <div className="py-14 xl:py-28">
        <div className="container">
          <div className="max-w-[636px] mx-auto mb-10 lg:mb-14 text-center">
            <span className="btn-outline font-semibold py-2 px-4">
              {" "}
              <i className="las la-rocket"></i> Stylist layout
            </span>
            <h2 className="h2 mt-4 mb-6">Creative Dashboard layouts</h2>
            <p>
              We comes up with most creative and useful main general Purpose
              Dashboard Template with Stylist Layouts
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 xxl:gap-6">
            {whyusData.map(({ id, desc, img, imgDark, title }) => (
              <div
                key={id}
                className="col-span-2 lg:col-span-1 after:inset-0 after:duration-500 block rounded-xl relative">
                <Image
                  src={theme == "dark" ? imgDark : img}
                  className="relative z-[2]"
                  alt="layout img"
                />
                <div className="max-w-[90%] text-center -translate-y-1/2 bg-n0 dark:border dark:border-n700 dark:bg-bg4 mx-auto relative z-[3] -mb-10 rounded-xl p-4 xl:p-6 shadow-[0px_6px_30px_0px_rgba(0,0,0,0.06)]">
                  <h4 className="h4 mb-1 font-semibold">{title}</h4>
                  <p className="text-xs">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeLayouts;
