import Image from 'next/image'
import logo from '../assets/logo.svg'

const Hero = () => {
  return (
    <div className="space-y-5">
      <Image src={logo} alt="NLW logo spaceTime" />

      <div>
        <h1 className="text-[40px] font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      <a
        className="text-small inline-block rounded-full bg-green-500 px-5 py-3 font-alt uppercase leading-none text-black hover:bg-green-600"
        href=""
      >
        CADASTRAR LEMBRANÇA
      </a>
    </div>
  )
}

export default Hero
