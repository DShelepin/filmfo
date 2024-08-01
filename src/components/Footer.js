import { Link } from 'react-router-dom';
import { ReactComponent as Telegram } from '../assets/telegram.svg';
import { ReactComponent as GitHub } from '../assets/github.svg';

export function Footer() {
  return (
    <div className=" pt-24 pb-5">
      <div className=" flex gap-5 justify-center items-center mb-4">
        <Link to={'https://t.me/d_shelepin'} target="_blank">
          <Telegram className=" w-8 h-8 hover:-rotate-12 transition-all" />
        </Link>
        <Link to={'https://github.com/DShelepin'} target="_blank">
          <GitHub className=" w-8 h-8 hover:-rotate-12 transition-all" />
        </Link>
      </div>
      <div className="text-center text-sm text-orange-500">Made by Daniil Shelepin</div>
    </div>
  );
}
