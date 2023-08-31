import Link from './Link'

import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="googleScholar" href='https://scholar.google.nl/citations?user=SA91dyQAAAAJ&hl=en' size="6" />
          <SocialIcon kind="linkedin" href='https://www.linkedin.com/in/aringrams/?originalSubdomain=nl' size="6" />
          <SocialIcon kind="twitter" href='https://twitter.com/alexingrams' size="6" />
          <SocialIcon kind="researchGate" href='https://www.researchgate.net/profile/Alex-Ingrams' size="6" />
          <SocialIcon kind="mail" href='mailto:a.r.ingrams@fgga.leidenuniv.nl' size="6" />
        </div>
        <div className="mb-2 flex flex-col items-center space-x-2 text-sm text-gray-600 ">
          <Link href='mailto:a.r.ingrams@fgga.leidenuniv.nl'>a.r.ingrams@fgga.leidenuniv.nl</Link>
        </div>
        <div className="mb-8 text-center text-sm font-medium text-gray-600 ">
          <Link href="https://www.universiteitleiden.nl/en/staffmembers/alex-ingrams#tab-1">
            Leiden University Institute of Public Administration
            <p>The Netherlands</p>
          </Link>
        </div>
      </div>
    </footer>
  )
}
