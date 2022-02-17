import { format } from "date-fns";

export function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(date: Date) {
  return format(date, "PPPP");
}
