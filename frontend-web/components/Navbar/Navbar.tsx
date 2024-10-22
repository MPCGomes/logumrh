import React from 'react'
import { IoMenu } from "react-icons/io5";
import Logo from '../../public/logo.svg'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <img
        src={Logo}
        alt="Logo"
      />
      <div>
        <Link href={''}>Ínicio</Link>
        <Link href={''}>Vagas</Link>
        <Link href={''}>Sobre Nós</Link>
      </div>
      <div>
        <button>
          adas
        </button>
        <button>
          asdas
        </button>
        <button>
          <IoMenu />
        </button>
      </div>
    </nav>
  )
}

export default Navbar