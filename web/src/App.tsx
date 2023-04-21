import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal } from './components/CreateAdModal';

import logoImg from './assets/logo.svg';

import './styles/main.css';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/games')
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col items-center my-8">
      <img src={logoImg} width="200px" alt="logo image" />

      <h1 className="text-5xl text-white font-black mt-8">
        Seu&#160;
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>
        &#160;esta aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-8 h-48">
        {games.map((game) => (
          <GameBanner
            key={game.id}
            bannerUrl={game.bannerUrl}
            title={game.title}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}
