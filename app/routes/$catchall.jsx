import { redirect } from "react-router";

export const loader = () => {
  return redirect("https://www.superergo.in/", 302);
};

export default function CatchAll() {
  return null;
}
