const Container = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10">
      {children}
    </div>
  )
}

export default Container
