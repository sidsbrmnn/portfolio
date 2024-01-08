import clsx from 'clsx'

const Svg = ({
  className,
  children,
  viewBox,
}: {
  className?: string
  children?: React.ReactNode
  viewBox?: string
}) => {
  return (
    <svg
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('fill-current', className)}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export default Svg
