import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import {
  BsBell,
  BsBellFill,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { upcomingEvents } from "../seeders/home";
import { getWindowDimensions } from "../utilities/basicUtils";
import { formatDate } from "../utilities/formatUtils";

const UpcomingEvents = () => {
  const { width } = getWindowDimensions();

  // Enable swiper for upcoming events
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

  return (
    <div className="relative">
      <div className="max-w-screen-xl min-w-full mx-auto py-16 lg:py-20 px-20">
        <div className="flex flex-col items-center sm:items-stretch sm:flex-row justify-between">
          <h2 className="text-4xl sm:text-5xl font-black tracking-wide text-center text-gray-900 ">
            Upcoming Events
          </h2>
          {/* Swiper Controls */}
          <div className="flex items-center">
            <button
              className="font-bold bg-red-600 text-gray-100 hover:bg-red-700 hover:text-gray-200 
            focus:outline-none transition duration-300 mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2 swiper-button-prev"
            >
              <BsChevronLeft size={24} className="text-white fill-current" />
            </button>
            <button
              className="font-bold bg-red-600 text-gray-100 hover:bg-red-700 hover:text-gray-200 
            focus:outline-none transition duration-300 mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2 swiper-button-next"
            >
              <BsChevronRight size={24} className="text-white fill-current" />
            </button>
          </div>
        </div>
      </div>
      {/* Swiper */}
      <div className="text-center md:text-left mx-3 lg:mx-5 xl:mx-20">
        <Swiper
          slidesPerView={width <= 500 ? 1 : width <= 770 ? 2 : 3}
          spaceBetween={width <= 500 ? 10 : width <= 770 ? 20 : 30}
          autoplay={true}
          loop={true}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {upcomingEvents.map((event, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className="h-full flex! flex-col max-w-sm sm:rounded-tl-4xl sm:rounded-br-3xl relative 
                focus:outline-none min-w-full rounded"
                >
                  {/* Background Image */}
                  <div
                    className={`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-3xl
                    relative`}
                    style={{ backgroundImage: `url(${event.imageUri})` }}
                  />
                  <div className="border px-5 py-3 space-y-2 sm:space-y-6">
                    {/* Title */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <h5 className="text-2xl font-bold text-gray-700 truncate text-left">
                          {event.title}
                        </h5>
                        <div className="flex items-center cursor-pointer sm:ml-0 mt-2 sm:mt-0 ml-2">
                          {event.reminderSet ? (
                            <BsBellFill className="text-red-600" />
                          ) : (
                            <BsBell />
                          )}
                          {event.virtual && (
                            <span className="ml-2 font-bold text-gray-800">
                              Virtual
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Secondary info */}
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:items-center">
                      {/* <div className="flex sm:space-x-6"> */}
                      {/* Event Location */}
                      <div className="flex items-center mr-6">
                        <div className="inline-block rounded-full p-2 bg-gray-700 text-gray-100">
                          <GoLocation />
                        </div>
                        <div className="ml-2 text-sm font-semibold text-gray-800">
                          {event.location}
                        </div>
                      </div>
                      {/* Event Date */}
                      <div className="flex items-center">
                        <div className="inline-block rounded-full p-2 bg-gray-700 text-gray-100">
                          <AiOutlineCalendar />
                        </div>
                        <div className="ml-2 text-sm font-semibold text-gray-800">
                          {formatDate(new Date(event.date))}
                        </div>
                      </div>
                    </div>
                    {/* Description */}
                    <p className="text-sm leading-loose line-clamp-3 mt-2 sm:mt-4 text-left">
                      {event.description}
                    </p>
                  </div>
                  <button
                    className="mt-auto sm:text-lg w-full rounded sm:rounded-none sm:rounded-br-3xl 
                  py-3 sm:py-6 font-bold px-8 bg-red-600 text-gray-100 hover:bg-red-700 hover:text-gray-200
                  focus:outline-none transition duration-300"
                  >
                    View details
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="flex justify-between h-7 mt-10">
            <div className="swiper-pagination px-10" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default UpcomingEvents;
