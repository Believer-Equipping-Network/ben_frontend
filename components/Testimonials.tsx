import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../seeders/home";

const Testimonials = () => {
  // Enable swiper for testimonials
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

  return (
    <section className="relative">
      <div className="max-w-screen-xl mx-auto px-10 py-20 lg-py-24">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Image Column */}
          <div className="relative w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-5/12 xl:w-6/12 flex-shrink-0">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="svgs/testimonial.svg"
              alt="banner image"
            />
          </div>
          {/* Text Column */}
          <div className="w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-7/12 xl:w-6/12 mt-16 md:mt-0 md:pl-12 lg:pl-16 md:order-last">
            <h5 className="font-bold text-red-600 text-center md:text-left">
              Testimonials
            </h5>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight tracking-wide mt-4 text-gray-900">
              Hear from some of our beloved{" "}
              <span className="text-red-600">members</span>
            </h2>
            <p className="mt-6 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
              minim veniam.
            </p>
            {/* Testimonials */}
            <div className="mt-10 text-center md:text-left">
              <Swiper
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={true}
                loop={true}
                pagination={{ clickable: true }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
              >
                {testimonials?.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="outline-none h-full flex! flex-col">
                      <div>
                        {Array.from({ length: testimonial?.stars }).map(
                          (_, i) => (
                            <AiFillStar
                              key={i}
                              className="inline-block w-5 h-5 text-yellow-400 fill-current mr-1 last:mr-0"
                            />
                          )
                        )}
                      </div>
                      <div className="mt-4 text-xl font-bold text-gray-700">
                        {testimonial?.heading}
                      </div>
                      <blockquote className="mt-4 mb-8 sm:mb-10 leading-relaxed font-medium text-gray-700">
                        {testimonial?.quote}
                      </blockquote>
                      {/* User */}
                      <div className="mt-auto flex justify-between items-center flex-col sm:flex-row">
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start">
                          <img
                            className="rounded-full w-16 h-16 sm:w-20 sm:h-20"
                            src={testimonial.profileImageSrc}
                            alt={testimonial.name}
                          />
                          <div className="text-center md:text-left sm:ml-6 mt-2 sm:mt-0">
                            <h5 className="font-bold text-xl">
                              {testimonial.name}
                            </h5>
                            <p className="font-medium text-gray-500">
                              {testimonial.profession}
                            </p>
                          </div>
                        </div>
                        {/* Controls */}
                        <div className="flex mt-8 sm:mt-0 my-3">
                          <button
                            // onClick={(e) => toggleSwiper(e)}
                            className="mx-3 p-4 rounded-full transition duration-300 bg-gray-200 hover:bg-gray-300 text-red-600 hover:text-red-700
                        focus:outline-none focus:shadow-outline swiper-button-prev"
                          >
                            <BsArrowLeft size={24} className="text-red-600" />
                          </button>
                          <div className="my-3 border-r"></div>
                          <button
                            className="mx-3 p-4 rounded-full transition duration-300 bg-gray-200 hover:bg-gray-300 text-red-600 hover:text-red-700
                        focus:outline-none focus:shadow-outline swiper-button-next"
                          >
                            <BsArrowRight size={24} className="text-red-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="flex justify-between h-7">
                  <div className="swiper-pagination px-10"></div>
                  <div className="navigations-controls w-full">
                    <div
                      className="swiper-button-prev"
                      style={{
                        color: "red",
                        paddingRight: 20,
                      }}
                    ></div>
                    <div
                      className="swiper-button-next"
                      style={{
                        color: "rosybrown",
                        paddingLeft: 20,
                      }}
                    ></div>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
