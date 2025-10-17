import { navigateTo } from '@devvit/web/client';
import { useCounter } from './hooks/useCounter';

export const App = () => {
  const { count, username, loading, increment, decrement } = useCounter();
  return (
    <div className="flex relative flex-col justify-center items-center min-h-screen bg-gradient-to-b from-pink-200 via-blue-200 to-pink-300">
      {/* Logo */}
      <div className="mb-8">
        <img 
          className="object-contain w-64 h-64 mx-auto drop-shadow-2xl" 
          src="/Image.png" 
          alt="Simulife Logo" 
        />
      </div>

      {/* Welcome Section */}
      <div className="flex flex-col items-center gap-4 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-2xl mx-4">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
          Welcome to Simuliv3
        </h1>
        
        <p className="text-lg text-center text-gray-700 leading-relaxed">
          Step into a world where <span className="font-bold text-pink-600">YOU</span> control the story! 
        </p>
        
        <p className="text-base text-center text-gray-600 max-w-lg">
          Guide our main character through life's biggest decisions. Vote on choices, 
          shape their destiny, and watch their story unfold based on the community's decisions!
        </p>

        {/* Start Button */}
        <button className="mt-6 px-8 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
          Start Playing
        </button>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 w-full">
          <div className="flex flex-col items-center p-4 bg-pink-100 rounded-2xl">
            <span className="text-3xl mb-2">🎭</span>
            <h3 className="font-bold text-gray-800">Vote on Choices</h3>
            <p className="text-sm text-gray-600 text-center">Decide what happens next</p>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-blue-100 rounded-2xl">
            <span className="text-3xl mb-2">👥</span>
            <h3 className="font-bold text-gray-800">Community Driven</h3>
            <p className="text-sm text-gray-600 text-center">Everyone shapes the story</p>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-purple-100 rounded-2xl">
            <span className="text-3xl mb-2">📖</span>
            <h3 className="font-bold text-gray-800">Watch It Unfold</h3>
            <p className="text-sm text-gray-600 text-center">See the results in real-time</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 text-sm text-gray-600 bg-white/60 px-6 py-2 rounded-full backdrop-blur-sm">
        <button
          className="cursor-pointer hover:text-pink-600 transition-colors"
          onClick={() => navigateTo('https://developers.reddit.com/docs')}
        >
          Docs
        </button>
        <span className="text-gray-300">|</span>
        <button
          className="cursor-pointer hover:text-pink-600 transition-colors"
          onClick={() => navigateTo('https://www.reddit.com/r/Devvit')}
        >
          r/Devvit
        </button>
        <span className="text-gray-300">|</span>
        <button
          className="cursor-pointer hover:text-pink-600 transition-colors"
          onClick={() => navigateTo('https://discord.com/invite/R7yu2wh9Qz')}
        >
          Discord
        </button>
      </footer>
    </div>
  );
};
