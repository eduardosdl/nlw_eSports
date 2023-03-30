import logoImg from './assets/logo.svg';

import './styles/main.css';

export function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-8">
      <img src={logoImg} width="200px" alt="logo image" />

      <h1 className="text-5xl text-white font-black mt-8">
        Seu&#160;
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>
        &#160;esta aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative">
          <img src="/game1.png" width="130px" />
        </a>
        <a href="" className="relative">
          <img src="/game2.png" width="130px" />
        </a>
        <a href="" className="relative">
          <img src="/game3.png" width="130px" />
        </a>
        <a href="" className="relative">
          <img src="/game4.png" width="130px" />
        </a>
        <a href="" className="relative">
          <img src="/game5.png" width="130px" />
        </a>
        <a href="" className="relative">
          <img src="/game6.png" width="130px" />
        </a>
      </div>
    </div>
  );
}
