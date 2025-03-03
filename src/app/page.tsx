import Link from 'next/link'

import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/social-icons'
import siteMeta from '@/lib/metadata'

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link
      target="_blank"
      rel="noreferrer noopener"
      className="text-slate-400 transition-colors duration-200 hover:text-slate-500"
      {...props}
    >
      <Icon className="size-6" />
    </Link>
  )
}

const Home = () => {
  return (
    <main className="min-h-screen">
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10">
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl lg:text-5xl">
            Hey there, I&apos;m <strong>Siddharth</strong>{' '}
            <span role="presentation">&#128075;</span>
          </h1>
          <p className="mt-6 w-full max-w-prose leading-7 md:text-lg">
            A Computer Science grad student at Northern Arizona University,
            Flagstaff. Previously a full-stack developer and DevOps engineer at
            Betsol with a keen interest in building scalable and performant
            systems.
          </p>
          <div className="mt-8 flex items-center gap-5">
            <SocialLink
              href={siteMeta.author.x}
              icon={XIcon}
              aria-label="Follow on X"
            />
            <SocialLink
              href={siteMeta.author.github}
              icon={GitHubIcon}
              aria-label="Follow on GitHub"
            />
            <SocialLink
              href={siteMeta.author.linkedin}
              icon={LinkedInIcon}
              aria-label="Follow on LinkedIn"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
