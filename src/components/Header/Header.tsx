import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <div className="mt-5 flex justify-around">
      <div>
        <Link href={"/"}>
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="text-white"
          />
        </Link>
      </div>
      <div className="flex items-center justify-between text-white gap-7">
        <Link href={"/zanas"} >
          <p>ЗА НАС</p>
        </Link>

        <Link href={"/programi"} >
          <p>ПРОГРАМИ</p>
        </Link>

        <Link href={"/kalendar"} >
          <p>КАЛЕНДАР</p>
        </Link>

        <Link href={"/informacii"} >
          <p>ИНФОРМАЦИИ</p>
        </Link>

        <Link href={"/proekti"} >
          <p>ПРОЕКТИ</p>
        </Link>

        <Link href={"/blog"} >
          <p>БЛОГ</p>
        </Link>

        <Link href={"/kontakt"} >
          <p>КОНТАКТ</p>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Header