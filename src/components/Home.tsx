import React, { useState, useMemo } from 'react';
import { games } from '../data/games';
import GameCard from './GameCard';
// import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';

const Home: React.FC = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredGames = useMemo(() => {
    return games.filter(game => {
      // const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      //                      game.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
      // return matchesSearch && matchesCategory;
      return matchesCategory;
    });
  }, [selectedCategory]);

  const featuredGames = games.filter(game => game.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        {/* <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} /> */}
        <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

        {/* Featured Games */}
        {selectedCategory === 'All' && (
          <section id="featured" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredGames.map(game => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </section>
        )}

        {/* All Games */}
        <section id="categories">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {selectedCategory === 'All' ? 'All Games' : `${selectedCategory} Games`}
          </h2>
          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGames.map(game => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No games found matching your criteria.</p>
              <button
                onClick={() => {
                  // setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>

        {/* About Section */}
        <section id="about" className="mt-20 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">About Ragdoll Hit Games</h2>
          <div className="max-w-4xl mx-auto text-gray-600 space-y-4">
            <p>
              Welcome to RagdollHit.co, your ultimate destination for physics-based ragdoll games! 
              Our carefully curated collection features the most entertaining and realistic ragdoll 
              physics games available online.
            </p>
            <p>
              From classic ragdoll smashing to innovative physics puzzles, we offer a diverse range 
              of games that showcase the hilarious and unpredictable nature of ragdoll physics. 
              Each game is hand-picked for its quality, entertainment value, and unique gameplay mechanics.
            </p>
            <p>
              Whether you're looking for a quick laugh or an engaging physics challenge, our games 
              provide hours of entertainment with realistic ragdoll mechanics that never fail to amuse. 
              All games are free to play and require no downloads - just click and start playing!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;