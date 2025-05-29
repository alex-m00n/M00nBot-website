'use client'

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface Command {
  name: string;
  description: string;
  category: '👑 Admin' | '🛠️ Utilitaires' | '🛡️ Modération' | '🎵 Musique'| '🎲 Fun' | '··· Autres';
}

const commands: Command[] = [
  { name: '/add-role', description: 'Ajoute un rôle à un utilisateur', category: '🛡️ Modération' },
  { name: '/ban', description: 'Bannit un membre du serveur', category: '🛡️ Modération' },
  { name: '/bug-report', description: 'Report un bug', category: '🛠️ Utilitaires' },
  { name: '/clear', description: 'Supprime un nombre spécifié de messages', category: '🛡️ Modération' },
  { name: '/clear-all', description: 'Supprime tous les messages du salon', category: '🛡️ Modération' },
  { name: '/doc', description: 'Affiche le lien vers la documentation du bot', category: '🛠️ Utilitaires' },
  { name: '/help', description: 'Affiche la liste des commandes disponibles', category: '🛠️ Utilitaires' },
  { name: '/info', description: 'Envoie les infos d\'un utilisateur', category: '🛠️ Utilitaires' },
  { name: '/info-serv', description: 'Affiche les informations sur le serveur', category: '🛠️ Utilitaires' },
  { name: '/kick', description: 'Expulse un membre du serveur', category: '🛡️ Modération' },
  { name: '/modo-warn', description: 'Avertit un membre du serveur', category: '🛡️ Modération' },
  { name: '/move', description: 'Déplace un membre dans un autre salon vocal', category: '🛠️ Utilitaires' },
  { name: '/ping', description: 'Affiche la latence du bot', category: '🛠️ Utilitaires' },
  { name: '/play', description: 'Joue une musique depuis YouTube', category: '🎵 Musique' },
  { name: '/protect-serv', description: 'Setup le système de protection du serveur', category: '👑 Admin' },
  { name: '/remove-role', description: 'Enlève un rôle à un utilisateur', category: '🛡️ Modération' },
  { name: '/rules', description: 'Affiche les règles du serveur', category: '🛠️ Utilitaires' },
  { name: '/set-rules', description: 'Setup les règles du serveur', category: '👑 Admin' },
  { name: '/setup-tickets', description: 'Setup le système de tickets', category: '👑 Admin' },
  { name: '/suggest', description: 'Propose une suggestion pour le serveur', category: '🛠️ Utilitaires' },
  { name: '/tic-tac-toe', description: 'Jouer au morpion contre le bot', category: '🎲 Fun' },
  { name: '/warn', description: 'Warn un utilisateur', category: '🛡️ Modération' },
  { name: 'Informations sur l\'utilisateur', description: 'Envoie les informations d\'un utilisateur', category: '🛠️ Utilitaires' },
  { name: 'Move l\'utilisateur', description: 'Déplace un utilisateur dans un salon vocal', category: '🛠️ Utilitaires' },
  { name: 'Warn l\'utilisateur', description: 'Warn un utilisateur', category: '🛡️ Modération' },
];

const categoryColors = {
  '👑 Admin': 'bg-violet-500/20',
  '🛠️ Utilitaires': 'bg-blue-500/20',
  '🛡️ Modération': 'bg-red-500/20',
  '🎵 Musique': 'bg-green-500/20',
  '🎲 Fun': 'bg-yellow-500/20',
  '··· Autres': 'bg-gray-500/20'
};

export default function CommandsList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | Command['category'] | ''>('All');

  const filteredCommands = commands.filter(cmd => 
    (selectedCategory === 'All' || cmd.category === selectedCategory) &&
    (cmd.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const uniqueCategories = Array.from(new Set(commands.map(cmd => cmd.category)));

  return (
    <>
      <center><h1 className="text-5xl font-bold pt-36 mb-10"><p className='blink'>[</p>/cmd<p className='blink'>]</p></h1></center>
      <div className="max-w-4xl mx-auto p-4">
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Rechercher une commande..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-lg focus:outline-none ring-2 ring-primary/15 focus:ring-primary/75"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2" />
        </div>

        <div className="mb-8">
          <label htmlFor="category-select" className="block text-sm font-medium mb-2">Filtrer par catégorie:</label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as 'All' | Command['category'] | '')}
            className="w-full px-4 py-3 bg-background rounded-lg focus:outline-none ring-2 ring-primary/15 focus:ring-primary/75 text-foreground"
          >
            <option value="All">Toutes les catégories</option>
            {uniqueCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          {filteredCommands.map(cmd => (
            <div key={cmd.name} className={`${categoryColors[cmd.category as keyof typeof categoryColors]} rounded-lg p-4 transition-all hover:scale-[1.02]`}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-mono">{cmd.name}</h3>
                  <p className="text-sm opacity-80 mt-1">{cmd.description}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm text-center ${
                  cmd.category === '👑 Admin' ? 'bg-violet-500/30' :
                  cmd.category === '🛠️ Utilitaires' ? 'bg-blue-500/30' :
                  cmd.category === '🛡️ Modération' ? 'bg-red-500/30' :
                  cmd.category === '🎵 Musique' ? 'bg-green-500/30':
                  cmd.category === '🎲 Fun' ? 'bg-yellow-500/30' :
                  cmd.category === '··· Autres' ? 'bg-gray-500/30' :
                  ''
                }`}  id={cmd.name}>
                  {cmd.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredCommands.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            Aucune commande trouvée pour "{searchTerm}"
          </div>
        )}
      </div>
    </>
  );
} 