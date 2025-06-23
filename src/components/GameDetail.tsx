import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Info, Gamepad2 } from 'lucide-react';
import { games } from '../data/games';

const GameDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const game = games.find(g => g.id === id);

  if (!game) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Game Not Found</h2>
          <p className="text-gray-600 mb-6">The game you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Games
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Games
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">{game.name}</h1>
          <p className="text-gray-600 mt-2">{game.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Game Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="aspect-video bg-gray-900">
                <iframe
                  src={game.iframeUrl}
                  title={game.name}
                  className="w-full h-full border-0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Game loaded successfully</span>
                    <p className="text-xs mt-1">Click inside the game area to start playing</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                      Live
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Game Info */}
          <div className="space-y-6">
            {/* Game Details */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Info className="h-5 w-5 mr-2 text-blue-600" />
                Game Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Category</label>
                  <div className="mt-1">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                      {game.category}
                    </span>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Status</label>
                  <div className="mt-1">
                    <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
                      Available
                    </span>
                  </div>
                </div>
                {game.featured && (
                  <div>
                    <label className="text-sm font-medium text-gray-700">Featured</label>
                    <div className="mt-1">
                      <span className="inline-block bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full font-medium">
                        Featured Game
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* How to Play */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Gamepad2 className="h-5 w-5 mr-2 text-blue-600" />
                How to Play
              </h2>
              <div className="text-gray-600 text-sm leading-relaxed">
                {game.gameplay.split(':').map((part, index) => (
                  <div key={index} className="mb-3">
                    {index === 0 ? (
                      <p className="font-medium text-gray-800">{part}</p>
                    ) : (
                      <p className="pl-4">{part}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Related Games */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Related Games</h2>
              <div className="space-y-3">
                {games
                  .filter(g => g.category === game.category && g.id !== game.id)
                  .slice(0, 3)
                  .map(relatedGame => (
                    <Link
                      key={relatedGame.id}
                      to={`/game/${relatedGame.id}`}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <img
                        src={relatedGame.thumbnail}
                        alt={relatedGame.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {relatedGame.name}
                        </p>
                        <p className="text-xs text-gray-500">{relatedGame.category}</p>
                      </div>
                    </Link>
                  ))}
                {games.filter(g => g.category === game.category && g.id !== game.id).length === 0 && (
                  <p className="text-sm text-gray-500 text-center py-4">No related games found</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;