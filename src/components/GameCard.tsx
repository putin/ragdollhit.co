import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Star } from 'lucide-react';
import { Game } from '../data/games';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Link
      to={`/game/${game.id}`}
      className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative overflow-hidden">
        <img
          src={game.thumbnail}
          alt={game.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/90 rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="h-6 w-6 text-blue-600" />
          </div>
        </div>
        {game.featured && (
          <div className="absolute top-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
            <Star className="h-3 w-3 mr-1" />
            Featured
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {game.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {game.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
            {game.category}
          </span>
          <span className="text-blue-600 text-sm font-medium group-hover:text-blue-700">
            Play Now →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;