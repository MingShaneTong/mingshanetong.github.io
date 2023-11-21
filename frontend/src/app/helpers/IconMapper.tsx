import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function IconMapper(icon: string) {
  switch (icon) {
    case "FaLinkedinIn":
      return <FaLinkedinIn />
      case "FaGithub":
        return <FaGithub />
  }
}