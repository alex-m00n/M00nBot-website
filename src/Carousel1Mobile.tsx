"use client";

import CommandCard from "./CommandCard";
import React from 'react';

export default function Carousel1Mobile() {
    return (
        <div className="carousel">
            <div className="carousel-container">
                <div className="carousel-item" id="addrole"><CommandCard command="/addrole" tag="Admin" description="Ajoute un rôle à un utilisateur" /></div>
                <div className="carousel-item" id="bug-report"><CommandCard command="/bug-report" tag="Info" description="Signale un bug" /></div>
                <div className="carousel-item" id="clear"><CommandCard command="/clear" tag="Admin" description="Supprime des messages" /></div>
                <div className="carousel-item" id="clear-all"><CommandCard command="/clear-all" tag="Admin" description="Supprime tous les messages de salon" /></div>
                <div className="carousel-item" id="doc"><CommandCard command="/doc" tag="Info" description="Envoie la documentation du bot" /></div>
                <div className="carousel-item" id="help"><CommandCard command="/help" tag="Info" description="Envoie les commandes du bot" /></div>
                <div className="carousel-item" id="move"><CommandCard command="/move" tag="Admin" description="Déplace un utilisateur dans un salon vocal" /></div>
                <div className="carousel-item" id="ping"><CommandCard command="/ping" tag="Info" description="Renvoie Pong et la latence du bot" /></div>
                <div className="carousel-item" id="play"><CommandCard command="/play" tag="Fun" description="Joue une musique depuis YouTube" /></div>
                <div className="carousel-item" id="protect-serv"><CommandCard command="/protect-serv" tag="Admin" description="Setup le système de protection du serveur" /></div>
                <div className="carousel-item" id="removerole"><CommandCard command="/removerole" tag="Admin" description="Enlève un rôle à un utilisateur" /></div>
                <div className="carousel-item" id="rules"><CommandCard command="/rules" tag="Info" description="Affiche les règles du serveur" /></div>
                <div className="carousel-item" id="set-rules"><CommandCard command="/set-rules" tag="Admin" description="Setup les règles du serveur" /></div>
                <div className="carousel-item" id="setup-tickets"><CommandCard command="/setup-tickets" tag="Admin" description="Setup le système de tickets" /></div>
                <div className="carousel-item" id="suggest"><CommandCard command="/suggest" tag="Info" description="Faire une suggestion" /></div>
                <div className="carousel-item" id="warn"><CommandCard command="/warn" tag="Admin" description="Warn un utilisateur" /></div>
            </div>
        </div>
    );
}