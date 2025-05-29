import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    template: "%s | M00nBot 🌙🤖",
    default: "Accueil | M00nBot 🌙🤖",
  },
  description: "Un bot Discord pour le serveur d'AlexM00n",
};

export const pagesMetadata: Record<string, Metadata> = {
  home: {
    title: "Accueil",
    description: "Bienvenue sur le site de M00nBot, le bot Discord pour le serveur d'AlexM00n",
  },
  commands: {
    title: "Commandes",
    description: "Découvrez toutes les commandes disponibles sur M00nBot, le bot Discord pour le serveur d'AlexM00n",
  },
  notfound: {
    title: "404",
    description: "Découvrez toutes les commandes disponibles sur M00nBot, le bot Discord pour le serveur d'AlexM00n",
  }
}; 