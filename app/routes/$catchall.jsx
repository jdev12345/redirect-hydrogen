import { redirect } from "react-router";

export const loader = ({ request }) => {
  const url = new URL(request.url);
  return redirect(`https://www.superergo.in${url.pathname}${url.search}`, 302);
};

export default function CatchAll() {
  return null;
}
