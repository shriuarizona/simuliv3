import { useState } from 'react';
import { Scene } from './Scene';

export const App = () => {
  const [sceneId, setSceneId] = useState('scene1');

  const handleChoice = (outcome: string) => {
    console.log('User chose:', outcome);
    // Later: setSceneId('scene2_' + outcome);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-200 flex items-center justify-center p-4">
      {sceneId === 'scene1' && (
        <Scene
          prompt={`🧃 Alex (24) just sat down for a first date at a quirky café.\n"I only drink raw celery juice and I think astrology is a government psyop."\nWhat should Alex do?`}
          choices={[
            { label: '😬 Stay and suffer', outcome: 'stay' },
            { label: '📱 Fake a phone call', outcome: 'escape' },
            { label: '🕵️ Investigate the psyop', outcome: 'digDeeper' },
          ]}
          onChoose={handleChoice}
        />
      )}
    </div>
  );
}; // 👈 This closing brace and semicolon must be here
