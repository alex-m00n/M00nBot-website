import Link from 'next/link';
import { FaDiscord, FaTwitch, FaYoutube, FaGlobe } from 'react-icons/fa6';
import CmdButton from '@/src/CmdButton';
import Thumbnail from '@/src/Thumbnail';
import { FaInstagram } from 'react-icons/fa';
import SpotlightButton from '@/src/SpotlightButton';

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-b from-primary/40 via-secondary/50 to-primary/0">
        <div className="herobanner mt-36">
          <center>
            <div className='relative inline-block'>
              <div className="absolute -inset-4 blur-[35px] bg-[url('/M00nBotBG.png')] bg-cover bg-center" style={{ width: '50dvh', height: '50dvh' }}></div>
              <img src={'/M00nBot.png'} alt="M00nBot Logo" className="rounded-full relative z-10" style={{ width: '50dvh', height: '50dvh' }} />
            </div>
          </center>
          <div>
            <h1 className="font-bold mb-4 text-center text-6xl">M00nBot</h1>
            <h2 className="text-xl mb-8 text-center">UN BOT DISCORD POUR LE SERVEUR D'ALEXM00N</h2>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <a href="#cmd"><h1 className="text-5xl font-bold">▼</h1></a>
        </div>
      </div>
      <section id="cmd">
        <div className='flex flex-col justify-center items-center mb-3 mt-10'>
          <center><h1 className="text-5xl font-bold"><p className='blink'>[</p>/cmd<p className='blink'>]</p></h1></center>
          <br />
          <div className='bg-primary/15 cmd-div'>
            <Thumbnail cmd="setup-tickets" />
            <div className='p-4 cmd-text'>
              <h1 className='text-3xl font-bold'>Un support ticket</h1>
              <p className='text-sm my-10 ml-3'>Créez un système de tickets de support personnalisé pour le serveur Discord. Gérez facilement les demandes d'aide, les rapports de bugs ou toute autre forme de support. Les tickets sont organisés dans des catégories dédiées avec des permissions spécifiques pour une gestion optimale.</p>
              <div className='cmd-btn'>
                <CmdButton cmd='/setup-tickets' className='cmd-btn1' />
                <SpotlightButton href="/cmd#/setup-tickets" className="cmd-btn2">+ En savoir plus</SpotlightButton>
              </div>
            </div>
          </div>
          <br />
          <div className='bg-secondary/15 cmd-div'>
            <Thumbnail cmd="play" />
            <div className='p-4 cmd-text'>
              <h1 className='text-3xl font-bold'>Un bot musical</h1>
              <p className='text-sm my-10 ml-3'>Profitez d'une expérience musicale de qualité sur le serveur Discord. Écoutez vos musiques préférées depuis YouTube, Spotify ou SoundCloud. Contrôlez la lecture avec des commandes simples : lecture, pause, reprise, file d'attente et bien plus encore.</p>
              <div className='cmd-btn'>
                <CmdButton cmd='/play' className='cmd-btn1' />
                <SpotlightButton href="/cmd#/play" className="cmd-btn2">+ En savoir plus</SpotlightButton>
              </div>
            </div>
          </div>
        </div>
        <center><SpotlightButton href="/cmd" className="text-2xl w-fit mb-10">+ Voir plus</SpotlightButton></center>
      </section >
      <br />
      <center><h1 className="text-5xl font-bold"><p className='blink'>[</p>/creator<p className='blink'>]</p></h1></center>
      <br />
      <center>
        <img src="/AlexM00n.gif" alt="AlexM00n" className='rounded-full w-40 shadow-md' />
        <h1 className='font-bold text-6xl inline-flex'>AlexM00n</h1><img src="/active-developer-badge.png" alt="Badge Développeur Actif" className='inline-flex -mt-6 ml-2 w-10 h-10' />
        <br />
        <h1 className='font-bold text-3xl inline-flex mt-1'>

          <Link href={'https://twitch.tv/alexm00ntv'} target='_blank'>
            <FaTwitch className='hover:text-violet-700 transition' />
          </Link>&nbsp;

          <Link href={'https://instagram.com/alex.m00n_'} target='_blank'>
            <FaInstagram className='hover:text-fuchsia-700 transition' />
          </Link>&nbsp;

          <Link href={'https://youtube.com/@AlexM00nTV'} target='_blank'>
            <FaYoutube className='hover:text-red-700 transition' />
          </Link>&nbsp;

          <Link href={'https://discord.gg/wpXyCHuyb6'} target='_blank'>
            <FaDiscord className='hover:text-blue-700 transition' />
          </Link>&nbsp;

          <Link href={'https://alexm00n-tv.vercel.app'} target='_blank'>
            <FaGlobe className='hover:text-primary transition' />
          </Link>
        </h1>
      </center>
      <br />
    </>
  );
}