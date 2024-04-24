"use client";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const userReviews = [
  {
    id: 1,
    name: "Arlene McCoy",
    designation: "Software Developer",
    img: "/images/user-big-1.png",
    review:
      "Great job on the code quality! Your attention to detail and dedication to producing clean, well-structured, and efficient code is impressive. Keep up the excellent work!",
  },
  {
    id: 1,
    name: "Cody Fisher",
    designation: "Project manager",
    img: "/images/user-big-2.png",
    review:
      "Great job on the code quality! Your attention to detail and dedication to producing clean, well-structured, and efficient code is impressive. Keep up the excellent work!",
  },
  {
    id: 1,
    name: "James Fillip",
    designation: "Scrum Master",
    img: "/images/user-big-3.png",
    review:
      "Great job on the code quality! Your attention to detail and dedication to producing clean, well-structured, and efficient code is impressive. Keep up the excellent work!",
  },
  {
    id: 1,
    name: "John Snow",
    designation: "UI/UX Designer",
    img: "/images/user-big-4.png",
    review:
      "Great job on the code quality! Your attention to detail and dedication to producing clean, well-structured, and efficient code is impressive. Keep up the excellent work!",
  },
];

const Testimonial = () => {
  return (
    <section className="py-14 lg:py-28">
      <div className="container">
        <div className="max-w-[526px] mx-auto text-center mb-10 lg:mb-14">
          <span className="btn-outline font-semibold py-2 px-4">
            {" "}
            <i className="las la-rocket"></i> Testimonial
          </span>
          <h2 className="h2 mb-4 lg:mb-6 mt-4">What People Says</h2>
          <p className="text-sm md:text-base">
            Some of our happy customers review regarding our Products, Qualities
            and Supports.
          </p>
        </div>
        <div>
          <Swiper
            slidesPerView="auto"
            spaceBetween={12}
            loop
            modules={[Autoplay, Navigation]}
            // autoplay={{
            //   delay: 1200,
            // }}
            navigation={{
              prevEl: ".prev-review",
              nextEl: ".next-review",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
            }}>
            {userReviews.map(({ id, designation, img, name, review }) => (
              <SwiperSlide key={id} className="p-3">
                <div className="shadow-[0px_6px_30px_0px_rgba(0,0,0,0.06)] bg-n0 dark:bg-bg4 p-3 rounded-xl">
                  <div className="bg-primary/5 dark:bg-bg3 rounded-xl border border-n30 dark:border-n500 p-4 md:p-6">
                    <ul className="mb-4 flex gap-2">
                      {Array.from({ length: 5 }).map((item, index) => (
                        <i
                          key={index}
                          className="las la-star text-[#FFC700] text-lg"></i>
                      ))}
                    </ul>
                    <p className="md:text-lg mb-6 xl:mb-8">{review}</p>
                    <div className="flex items-center gap-4 lg:gap-6">
                      <Image
                        src={img}
                        width={60}
                        height={60}
                        className="rounded-full"
                        alt="img"
                      />
                      <div>
                        <h5 className="h5 mb-2">{name}</h5>
                        <p>{designation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center gap-3 mt-8">
            <button className="p-1.5 xl:p-2.5 rtl:rotate-180 disabled:cursor-not-allowed prev-review border hover:bg-primary hover:text-n0 duration-300 border-primary text-primary rounded-full">
              <IconChevronLeft />
            </button>
            <button className="p-1.5 xl:p-2.5 rtl:rotate-180 disabled:cursor-not-allowed next-review border hover:bg-primary hover:text-n0 duration-300 border-primary text-primary rounded-full">
              <IconChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
