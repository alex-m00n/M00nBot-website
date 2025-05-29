import { url } from 'inspector';
import Image from 'next/image';
import { FaDiscord, FaInstagram, FaTwitch, FaYoutube } from 'react-icons/fa';

export default function Header() {
    return (
        <>
            <div className='w-[90%] mx-[5%] fixed border-b-2 z-50 backdrop-blur-lg rounded-full h-28 bg-radial from-secondary/50 via-primary/50 to-transparent'>
                <div className='flex justify-center lg:justify-between items-center h-full lg:px-10'>
                    <a href='/' className='h-24 inline-flex items-center rounded-full'>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-[url('/M00nBotBG.png')] bg-cover w-32 h-32 blur-md"></div>
                            <Image src={'/M00nBot.png'} alt='M00nBot Logo' width={100} height={100} className='inline-flex rounded-full relative z-10' />
                        </div>
                        <h2 className='text-4xl font-bold inline-flex align-middle mr-4 hover:border-b-2'>&nbsp;M00nBot</h2>
                    </a>
                    <a href='/cmd' className='hidden lg:inline-block hover:border-b-2'>
                        <p className='blink'>[</p>
                        <p className='text-2xl mx-2 inline-block'>/cmd</p>
                        <p className='blink'>]</p>
                    </a>
                    <a href='https://alexm00n-tv.vercel.app' target='_blank' className='hidden lg:inline-block hover:border-b-2'>
                        <p className='blink'>[</p>
                        <p className='text-2xl mx-2 inline-block'>/creator</p>
                        <p className='blink'>]</p>
                    </a>
                    <a href='https://twitch.tv/alexm00ntv' target='_blank' className='hidden lg:inline-block hover:border-b-2'>
                        <p className='blink'>[</p>
                        <FaTwitch className='text-2xl mx-2 inline-block' />
                        <p className='blink'>]</p>
                    </a>
                    <a href='https://instagram.com/alex.m00n_' target='_blank' className='hidden lg:inline-block hover:border-b-2'>
                        <p className='blink'>[</p>
                        <FaInstagram className='text-2xl mx-2 inline-block' />
                        <p className='blink'>]</p>
                    </a>
                    <a href='https://youtube.com/@AlexM00nTV' target='_blank' className='hidden lg:inline-block hover:border-b-2'>
                        <p className='blink'>[</p>
                        <FaYoutube className='text-2xl mx-2 inline-block' />
                        <p className='blink'>]</p>
                    </a>
                    <a href='https://discord.gg/wpXyCHuyb6' target='_blank' className='hidden lg:inline-block hover:border-b-2'>
                        <p className='blink'>[</p>
                        <FaDiscord className='text-2xl mx-2 inline-block' />
                        <p className='blink'>]</p>
                    </a>
                </div>
            </div >
        </>
    );
}