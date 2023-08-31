import Link from './Link'
import Footer from './Footer'

const LayoutWrapper = ({ children }) => {
  return (
      <div className="flex h-screen flex-col justify-between pt-5 text-yellow-600 sm:pb-10">
        <header className="flex w-full items-center justify-between">
          <div>
            <Link href="/" aria-label="alex">
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base  leading-5">
          </div>
        </header>
        <main>{children}</main>
        <Footer />
      </div>

  )
}

export default LayoutWrapper
