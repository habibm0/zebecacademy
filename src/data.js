import { IoGameController, IoMusicalNote } from "react-icons/io5";
import { FaSmileWink, FaFilm, FaQq } from "react-icons/fa";
import { GiAngelOutfit } from "react-icons/gi";
import { MdEmojiNature } from "react-icons/md";

export const categories = [
  {
    id: 1,
    name: "Blockchain 101",
    iconSrc: <IoGameController fontSize={30} />,
  },
  { id: 2, name: "Blockchain 201", iconSrc: <FaSmileWink fontSize={30} /> },
  { id: 3, name: "Javascript", iconSrc: <FaQq fontSize={30} /> },
  { id: 4, name: "Rust", iconSrc: <FaFilm fontSize={30} /> },
  { id: 5, name: "Solidity", iconSrc: <GiAngelOutfit fontSize={30} /> },
  { id: 6, name: "Zebec", iconSrc: <IoMusicalNote fontSize={30} /> },
  { id: 7, name: "Advice", iconSrc: <MdEmojiNature fontSize={30} /> },
];
