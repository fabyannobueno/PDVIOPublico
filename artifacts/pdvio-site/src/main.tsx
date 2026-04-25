import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const isMediaTarget = (el: EventTarget | null): boolean => {
  if (!(el instanceof Element)) return false;
  const tag = el.tagName;
  if (tag === "IMG" || tag === "PICTURE" || tag === "SVG" || tag === "VIDEO" || tag === "CANVAS") return true;
  return !!el.closest("img, picture, svg, video, canvas");
};

document.addEventListener("contextmenu", (e) => {
  if (isMediaTarget(e.target)) e.preventDefault();
});

document.addEventListener("dragstart", (e) => {
  if (isMediaTarget(e.target)) e.preventDefault();
});

createRoot(document.getElementById("root")!).render(<App />);
