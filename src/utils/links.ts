import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const links = {
  routes: [
    {
      "slug": "/about",
      "name": "About",
      "description": "Who is OSMX!?"
    },
    {
      "slug": "/projects",
      "name": "Projects",
      "description": "Sample projects"
    },
    {
      "slug": "/toolbox",
      "name": "Toolbox",
      "description": "What is included in my brain!"
    },
    {
      "slug": "/contact",
      "name": "Contact",
      "description": "Lets Talk!"
    },
  ],
  social: [
    {
      icon: FaGithub,
      href: "https://github.com/itsosmx",
    },
    {
      icon: MdAlternateEmail,
      href: "mailto:itsosmx@gmail.com",
    },
    {
      icon: FaXTwitter,
      href: "https://twitter.com/ItsOsMx",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/itsosmx/",
    },
  ]
}

export default links;