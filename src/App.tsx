import React, { useState } from 'react';
import { Play, Gamepad2, Zap, Users, Trophy, Star } from 'lucide-react';

function App() {
  const [gameLoaded, setGameLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Gamepad2 className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">Ragdoll Hit</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#game" className="text-gray-700 hover:text-blue-600 transition-colors">Play Game</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Ragdoll Hit
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience hilarious physics-based combat with unpredictable ragdoll characters in this addictive browser game.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#game" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Play className="mr-2 h-5 w-5" />
              Play Now - Free
            </a>
            <a 
              href="#about" 
              className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg border border-gray-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Game Section */}
      <section id="game" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Play Ragdoll Hit Online
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jump straight into the action! No downloads required - play directly in your browser on any device.
            </p>
          </div>
          
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video w-full">
              {!gameLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">
                  <div className="text-center text-white">
                    <Gamepad2 className="h-16 w-16 mx-auto mb-4 animate-pulse" />
                    <p className="text-xl font-semibold mb-2">Loading Game...</p>
                    <p className="text-blue-100">Get ready for ragdoll physics fun!</p>
                  </div>
                </div>
              )}
              <iframe
                src="https://games.crazygames.com/en_US/ragdoll-archers/index.html?skipPrerollFirstSession=true&v=1.333"
                className="w-full h-full border-0"
                allowFullScreen
                onLoad={() => setGameLoaded(true)}
                title="Ragdoll Hit Game"
              />
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              <strong>Having trouble loading?</strong> Make sure your browser allows third-party cookies and try refreshing the page.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What is Ragdoll Hit?
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Ragdoll Hit is an entertaining physics-based game that combines strategic combat with hilarious ragdoll mechanics. 
                  Watch as characters react realistically to every hit, creating unpredictable and often comical scenarios.
                </p>
                <p>
                  The game features intuitive controls that are easy to learn but challenging to master. Whether you're looking 
                  for a quick gaming session or extended play, Ragdoll Hit delivers endless entertainment with its unique blend 
                  of strategy and physics-based chaos.
                </p>
                <p>
                  Built for modern browsers, the game runs smoothly on both desktop and mobile devices, ensuring you can enjoy 
                  the ragdoll action wherever you are.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Zap className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Fast-Paced</h3>
                <p className="text-gray-600 text-sm">Quick rounds perfect for short gaming sessions</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Users className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Easy to Play</h3>
                <p className="text-gray-600 text-sm">Simple controls that anyone can pick up instantly</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Trophy className="h-8 w-8 text-yellow-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Challenging</h3>
                <p className="text-gray-600 text-sm">Strategic depth that keeps you coming back</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Star className="h-8 w-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Free to Play</h3>
                <p className="text-gray-600 text-sm">Enjoy all features without any cost</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Game Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes Ragdoll Hit the perfect choice for casual gaming entertainment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Gamepad2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Physics-Based Combat</h3>
              <p className="text-gray-600">
                Experience realistic ragdoll physics that create unique and unpredictable combat scenarios every time you play.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Action</h3>
              <p className="text-gray-600">
                Jump right into the game with no lengthy tutorials or complex setups. Pure, immediate gaming fun.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cross-Platform</h3>
              <p className="text-gray-600">
                Play seamlessly on desktop, tablet, or mobile. The game adapts perfectly to your device and screen size.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Skill Development</h3>
              <p className="text-gray-600">
                Master the physics mechanics and develop your own strategies for defeating opponents in creative ways.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No Downloads</h3>
              <p className="text-gray-600">
                Play directly in your browser without installing anything. Your progress saves automatically as you play.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <Play className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regular Updates</h3>
              <p className="text-gray-600">
                Enjoy fresh content and improvements with regular game updates that enhance your playing experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How to Play Ragdoll Hit
            </h2>
            <p className="text-lg text-gray-600">
              Master the game with these simple instructions and become a ragdoll combat expert.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Aim Your Shot</h3>
              <p className="text-gray-600">Use your mouse or finger to aim at your target with precision.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Set Your Power</h3>
              <p className="text-gray-600">Hold to charge your shot and release to fire with the right force.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Watch Physics</h3>
              <p className="text-gray-600">Enjoy the realistic ragdoll reactions and physics-based outcomes.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Win Rounds</h3>
              <p className="text-gray-600">Defeat opponents strategically to advance and unlock new challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Experience Ragdoll Physics?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of players enjoying hilarious ragdoll combat action every day.
          </p>
          <a 
            href="#game" 
            className="inline-flex items-center px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <Play className="mr-3 h-6 w-6" />
            Start Playing Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Gamepad2 className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Ragdoll Hit</span>
            </div>
            <p className="text-gray-400 mb-4">
              The ultimate physics-based combat game experience.
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Ragdoll Hit. All rights reserved. | Made for gaming enthusiasts worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;