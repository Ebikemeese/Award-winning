import { BsWhatsapp } from "react-icons/bs"
import { BiMailSend } from "react-icons/bi"

const Footer = () => {
    return (
        <footer className="w-screen bg-violet-300 py-4 text-black">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-center text-sm md:text-left">Developed by Ebikeme Ese</p>
            
                <div className="flex justify-center gap-4 md:justify-start text-black">
                    <a href='https://wa.me/2348123208257' target='_blank'>
                        <BsWhatsapp />
                    </a>

                    <a href='mailto:ebikemeese@gmail.com?subject=Zentry-Clone' target='_blank'>
                        <BiMailSend />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer