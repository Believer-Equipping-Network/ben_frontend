import {
  MessageProps,
  ResourcesProps,
  TestimonialsProps,
} from "./../interfaces/home";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiBible, BiHelpCircle } from "react-icons/bi";
import { HiOutlineAnnotation } from "react-icons/hi";
// import {
//   AnnotationIcon,
//   GlobeAltIcon,
//   LightningBoltIcon,
//   ScaleIcon,
// } from "@heroicons/react/outline";

export const resources: ResourcesProps[] = [
  {
    name: "Upcoming Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: AiOutlineCalendar,
  },
  {
    name: "Bible Reading",
    description: "Follow our daily plan of bible reading",
    href: "#",
    icon: BiBible,
  },
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: BiHelpCircle,
  },
];

export const recentMessages: MessageProps[] = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

export const testimonials: TestimonialsProps[] = [
  {
    id: 1,
    stars: 5,
    profileImageSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
    heading: "Amazing User Experience",
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    name: "Charlotte Hale",
    profession: "CEO, Delos Inc.",
  },
  {
    id: 2,
    stars: 3,
    profileImageSrc:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
    heading: "Love the Developer Experience and Design Principles !",
    quote:
      "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    name: "Adam Cuppy",
    profession: "Founder, EventsNYC",
  },
];

export const features = [
  {
    name: "Competitive exchange rates",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: HiOutlineAnnotation,
  },
  {
    name: "No hidden fees",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: HiOutlineAnnotation,
  },
  {
    name: "Transfers are instant",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: HiOutlineAnnotation,
  },
  {
    name: "Mobile notifications",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: HiOutlineAnnotation,
  },
];
