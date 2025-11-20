interface Experience {
  date: string;
  description: string;
  name: string;
  role: string;
  url?: string;
}

export const experiences: Experience[] = [
  {
    date: "2022–Present",
    description: "An independent studio.",
    name: "Studio",
    role: "Design Engineer",
  },
  {
    date: "2019-2022",
    description: "An innovative company.",
    name: "Acme",
    role: "Design Engineer",
    url: "#",
  },
];
