import { Rock_Salt } from "next/font/google"
import Image from "next/image"


const rock = Rock_Salt({ weight: ['400'], subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <div className="text-center bg-[#2b478b]">
        <p className={`text-5xl md:text-8xl pt-8 pb-4 text-white ${rock.className}`}>Let&rsquo;s Go</p>
        <p className="text-white text-3xl md:text-5xl pt-3 pb-8 font-light">Hablemos en English</p>
      </div>
      <div className="md:mx-24">
        <Image className="mx-auto w-full" height={500} width={1000} alt="Converzamos" src="/gconver.svg" />
      </div>
      <div className="text-3xl md:text-5xl py-8   bg-slate-300">
        <p className="w-4/6 mx-auto text-center font-light">Hablemos en English jugando al fútbol, o al basketball.</p>
      </div>
      <div>
        <Image className="mx-auto w-full" height={500} width={1000} alt="Converzamos" src="/gfutbol.svg" />
      </div>
      <div className="text-3xl md:text-5xl py-8   bg-slate-700">
        <p className="w-4/6 mx-auto text-center font-light text-white">Cantemos en English. Convercemos en English sobre una pelicula que viste.</p>
      </div>
      <div>
        <Image className="mx-auto w-full" height={500} width={1000} alt="Converzamos" src="/gsing.svg" />
      </div>
      <div className="text-center pt-8 bg-[#2b478b]">
        <p className={`text-5xl md:text-8xl  pb-4 text-white ${rock.className}`}>Learn English</p>
        <p className="text-white text-3xl md:text-5xl pt-6 pb-8 font-light">with Chris</p>
      </div>
      <div className="text-center py-8 bg-green-500">
        <a
          href="https://api.whatsapp.com/send?phone=+34603022372"
          className=" font-bold text-green-500 bg-white px-6 py-3 rounded-lg hover:bg-green-600 hover:text-white"
        >
          Contacto por WhatsApp
        </a>
      </div>
    </>
  )
}
