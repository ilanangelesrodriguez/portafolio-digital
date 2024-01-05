import { links } from "./links"
import { menu, socials } from "./labels"

const socialMenu = {
  title: socials.title,
  links: [
    {
      to: links.github,
      label: socials.github,
    },
    {
      to: links.linkedin,
      label: socials.linkedin,
    },
  ],
}

const navMenu = {
  title: menu.title,
  links: [
    {
      to: links.work,
      label: menu.work,
    },
    {
      to: links.about,
      label: menu.about,
    },
    {
      to: links.services,
      label: menu.services,
    },
    {
      to: links.contact,
      label: menu.contact,
    },
  ],
}

export { navMenu, socialMenu }
