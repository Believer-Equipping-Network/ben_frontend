import { MessageProps, ResourcesProps } from "./../interfaces/home";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiBible, BiHelpCircle } from "react-icons/bi";

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
