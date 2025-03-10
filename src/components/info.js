import { v4 as uuidv4 } from "uuid";

export const initial = [
  {
    name: "Math",
    id: uuidv4(),
    checked: true,
  },
  {
    name: "English",
    id: uuidv4(),
    checked: false,
  },
  {
    name: "History",
    id: uuidv4(),
    checked: false,
  },
];
