import Image from 'next/image'
import Link from 'next/link'
import 'tailwindcss/tailwind.css'

export function Header() {
  return (
  <header className="w-full bg-white fixed top-0 z-50">
    <div className="flex items-center h-14 max-w-screen-lg md:p-0">
      <div className="header_logo">
        <Link href="/">
          <p>OICHI SHOTEN</p>
        </Link>
      </div>

          {/* <div className="header_login">
            <a href="/account/login" id="customer_login_link">ログイン</a>
          </div> */}

      <div className="flex cursor-pointer">
        {/* <Image src="" alt="menu"/> */}
      </div>
    </div>
  </header>
  )
}
