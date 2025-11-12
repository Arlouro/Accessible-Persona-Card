import React from 'react';
import PersonaCard from './components/PersonaCard';
import { Persona } from './types';

const App: React.FC = () => {
  const personaData: Persona = {
    title: 'Global citizen with low vision',
    description: [
      {
        heading: 'Background and Vision Impairment',
        content: `These days, Singapore is a center of the world, and Vishnu is one of its global citizens. After graduating from one of India’s technology colleges, he went to a postgraduate program at the National University of Malaysia. His work on visualizing data landed him a job with a multinational medical technology company. Vishnu was diagnosed with glaucoma and his eyes have been getting steadily worse, despite treatment. He can adjust his monitor and his phone, but many of the technical programs he uses don’t have many options, so he has started using a screen magnifier and high-contrast mode.`,
      },
      {
        heading: 'Technology Use and Accessibility Challenges',
        content: `He has several mobile phones. One connects him to his family in India, one is for work, and one is for personal use. He’s lucky to have good bandwidth at home and at work. Some of his colleagues from the university live in places with much more erratic connections. Even so, downloading large pages from European or U.S. servers can be slow. But, if he had one wish, it would be that people would write technical papers and websites more clearly. His English is good, but idiomatic expressions can still be hard.`,
      },
    ],
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gray-100 dark:bg-gray-300 transition-colors duration-300">
      <PersonaCard persona={personaData} />
    </main>
  );
};

export default App;