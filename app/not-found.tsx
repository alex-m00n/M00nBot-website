import Link from 'next/link'
import { pagesMetadata } from "@/app/metadata";
import { Metadata } from 'next';

export const metadata: Metadata = pagesMetadata.notfound;

export default function NotFound() {
    return (
        <>
            <div className="flex flex-col items-center justify-center max-h-screen p-4 text-center">
                <center><img src="/M00nBotDead.png" alt="M00nBotDeadLogo" className='h-60 mt-28' /></center>
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <h2 className="text-2xl mb-8">Page non trouvée</h2>
                <p className="text-lg mb-8 text-center mx-16">
                    Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
                </p>
                <Link
                    href="/"
                    className="px-6 py-3 bg-primary rounded-lg hover:bg-primary/50 transition-colors duration-200"
                >
                    Retour à l'accueil
                </Link>
            </div>
        </>
    )
} 