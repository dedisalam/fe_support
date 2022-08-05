import { useRoutes } from "react-router";
import Routes from "./routes";

export default function App(): JSX.Element {
  document.body.classList.add("bg-secondary");
  document.body.classList.add("bg-gradient");
  document.body.classList.add("bg-opacity-25");
  document.body.classList.add("min-vh-100");

  const Element = useRoutes(Routes());

  return Element;
}
