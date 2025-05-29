"use client";

import CommandCard from "./CommandCard";
import React from 'react';

export default function Carousel2Mobile() {
    return (
        <div className="carousel">
            <div className="carousel-container">
                <div className="carousel-item"><CommandCard command="Move l'utilisateur" tag="Admin" description="Déplace un utilisateur dans un salon vocal" /></div>
                <div className="carousel-item"><CommandCard command="Informations sur l'utilisateur" tag="Info" description="Envoie des informations sur l'utilisateur" /></div>
                <div className="carousel-item"><CommandCard command="Warn l'utilisateur" tag="Admin" description="Warn l'utilisateur" /></div>
            </div>
        </div>
    );
};

