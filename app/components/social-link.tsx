const SocialLink = ({
  href,
  altText,
  children,
}: {
  href: string
  altText: string
  children?: React.ReactNode
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="block text-slate-400 transition-colors duration-200 hover:text-slate-500"
    >
      <span className="sr-only">{altText}</span>
      {children}
    </a>
  )
}

export default SocialLink
