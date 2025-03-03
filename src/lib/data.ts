import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/social-icons'
import siteMeta from './metadata'

export const socials = [
  {
    name: 'Follow on X',
    href: siteMeta.author.x,
    icon: XIcon,
  },
  {
    name: 'Follow on GitHub',
    href: siteMeta.author.github,
    icon: GitHubIcon,
  },
  {
    name: 'Follow on LinkedIn',
    href: siteMeta.author.linkedin,
    icon: LinkedInIcon,
  },
]
