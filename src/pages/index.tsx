import { Link } from "gatsby"
import React from "react"

import { BsTwitter, BsDiscord, BsTelegram } from "react-icons/bs"
import Hourglass from '../images/hourglass.gif'

const IndexPage = () => {
  return (
    <div className="bg-black h-screen font-main text-5xl md:text-7xl text-white tracking-[0.07em] text-center pt-16 flex flex-col justify-between">
      <div>
        <h1>
          <span className="text-[#01ba7c]">{"["}</span>K
          <span className="text-[#01ba7c]">{"]"}</span>RYPTOKRACI
        </h1>

        <h2 className="text-xl md:text-3xl mt-8">COMING SOON</h2>
      </div>
      <img className="w-32 mx-auto" src={Hourglass} alt="hourglass animation" />
      <div className="w-full flex justify-center gap-16 mb-32">
        <Link to="https://twitter.com/kryptokraci" target="_blank">
          <BsTwitter color="white" size={36} />
        </Link>
        <Link to="https://discord.gg/hq3WRARb" target="_blank">
          <BsDiscord color="white" size={36} />
        </Link>
        <Link to="https://t.me/Kryptokraci" target="_blank">
          <BsTelegram color="white" size={36} />
        </Link>
      </div>
    </div>
  )
}

export default IndexPage
