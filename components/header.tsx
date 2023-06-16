import Image from 'next/image'
import React from 'react'
import logo from '../images/logo.gif'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSteam } from "@fortawesome/free-brands-svg-icons";



function header() {
  return (
    <nav className='flex items-center justify-between bg-[#0c1b21] p-3'>
    <div className='flex items-center'>
      <Link href='/' className='flex items-center'>
        <Image
          className='flex lg:min-w-[12rem] md: min-w-[9rem] sm:min-w-[7rem]'
          src={logo}
          alt="Picture of the author"
          width={100}
          height={100}
        />
         </Link>
              <button className='inline-flex p-3 rounded lg:hidden text-white ml-auto hover:text-white outline-none'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
      
          <div className="flex items-center justify-between mr-8">
          <Link className="flex items-center px-3 py-2 font-bold text-lg text-white" href="/dashboard">Ana Sayfa</Link>
          <Link className="flex items-center px-3 py-2 font-bold text-lg text-white" href="/dashboard">CS:GO BET</Link>
          <Link className="flex items-center px-3 py-2 font-bold text-lg text-white" href="/dashboard">KASA BET</Link>
          <div className="relative ml-5 md:flex hidden">
            <button className="button button-primary h-13 flex items-center" style={{ backgroundColor: "#3e321e", border: "1px solid #3e321e", padding: "8px 20px", borderRadius: "20px" }}>
              <svg viewBox="0 0 24 24" className="w-5 h-5 mr-3 fill-current">
                <path d="M24 12c0 6.627-5.373 12-12 12C6.218 24 1.392 19.909.256 14.463l4.764 2.003c.285 1.441 1.56 2.547 3.115 2.534 1.723-.017 3.105-1.414 3.116-3.129l.007-.003 3.602-2.684c2.304.024 4.14-1.833 4.14-4.091C19 6.833 17.166 5 14.907 5c-2.234 0-4.048 1.791-4.09 4.015l-2.64 3.693c-.668-.014-1.269.169-1.791.51L.092 10.572C.8 4.619 5.857 0 12 0c6.627 0 12 5.373 12 12zM7.423 17.477l-1.544-.649c.38.858 1.236 1.461 2.249 1.457 1.346-.012 2.422-1.11 2.41-2.455-.012-1.329-1.104-2.41-2.432-2.41-.287.001-.57.05-.86.16l1.542.648c.898.378 1.319 1.411.941 2.308-.376.896-1.409 1.318-2.306.941zm7.484-5.602c-1.533 0-2.781-1.249-2.781-2.782 0-1.534 1.248-2.782 2.781-2.782 1.534 0 2.781 1.248 2.781 2.782 0 1.533-1.247 2.782-2.781 2.782zm0-.682c1.159 0 2.1-.942 2.1-2.101 0-1.158-.94-2.102-2.1-2.102-1.16 0-2.102.943-2.102 2.102.001 1.159.943 2.101 2.102 2.101z"></path>
              </svg>
              <span className="text-white font-bold" style={{ marginLeft: "8px", marginRight: "8px", marginTop: "4px", marginBottom: "4px" }}>
                STEAM İLE GİRİŞ YAP
              </span>
            </button>
          </div>
        </div>
  </nav>
  )
}

export default header