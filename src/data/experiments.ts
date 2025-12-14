import { reverseArray } from "@/helpers/array";

const _experiments = [
  {
    title: "Tab Bar Component",
    url: "/experiments/tab-bar",
    date: "2025-12-02",
  },
  {
    title: "Animated Number Counter",
    url: "/experiments/animated-number-counter",
    date: "2025-12-02",
  },
  {
    title: "Animated Placeholder",
    url: "/experiments/animated-placeholder",
    date: "2025-12-02",
  },
  {
    title: "Glowing Cards",
    url: "/experiments/glowing-cards",
    date: "2025-12-03",
  },
  {
    title: "Cookie Settings",
    url: "/experiments/cookie-settings",
    date: "2025-12-03",
  },
  {
    title: "Hold to Confirm",
    url: "/experiments/hold-to-confirm",
    date: "2025-12-13",
  },
];

export const experiments = reverseArray(_experiments);
