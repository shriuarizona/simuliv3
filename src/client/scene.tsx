import { useState } from 'react';

type Choice = {
  label: string;
  outcome: string;
};

type SceneProps = {
  prompt: string;
  choices: Choice[];
  onChoose: (outcome: string) => void;
};

export const Scene = ({ prompt, choices, onChoose }: SceneProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-6 flex flex-col gap-6">
      <div className="text-gray-800 text-lg whitespace-pre-line leading-relaxed">
        {prompt}
      </div>

      <div className="flex flex-col gap-3">
        {choices.map((choice) => (
          <button
            key={choice.outcome}
            className={`px-4 py-3 rounded-lg text-white font-semibold transition-all duration-200 ${
              selected === choice.outcome
                ? 'bg-green-600 scale-105'
                : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
            onClick={() => {
              setSelected(choice.outcome);
              onChoose(choice.outcome);
            }}
          >
            {choice.label}
          </button>
        ))}
      </div>
    </div>
  );
};
