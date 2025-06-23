import React from 'react';
import { Gamepad2, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Gamepad2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">RagdollHit.co</span>
            </div>
            <p className="text-gray-400 mb-4">
              The ultimate destination for ragdoll physics games. Experience realistic physics, 
              hilarious gameplay, and endless entertainment.
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-400" />
              <span>for gamers worldwide</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Game Categories</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Classic Games</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Action Games</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sandbox Games</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fighting Games</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Submit a Game</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 RagdollHit.co. All rights reserved. | 
            <a href="https://ragdollhit.co" className="hover:text-white transition-colors ml-1">
              ragdollhit.co
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;