import { useRoutes } from "react-router-dom/dist";

export default function Router() {
  let element = useRoutes([{}]);
  return element;
}
