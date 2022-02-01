import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import GameListItem from '../GameListItem/GameListItem';
import './GameList.css'

const GameList = () => {
  const { games} = useSelector((state) => state.gameReducer);

  console.log(games)

  return (
    <div className='wrapper overflow-hidden '>
      <div className="container-sm game-list row g-4 row-cols-lg-3  gx-4">
         {games.map((game)=>{          
          return <Link key={game.key} to={`/games/${game.id}`}>
            <div className="col"  >
            <div className="game-item">
                <img src={game.image} alt={game.title} className="game-item__cover" />
                <div className="game-item__details">
                    <div className="game-item__details-title">{game.title}</div>
                    <div className="game-item__details-genres">
                        {game.genres.map(genre=>{
                            return <div className="game-item__details-genres__item">{genre}</div>
                        })} 
                    </div>
                    <div className="game-item__details-buy">
                        <div className="game-item__details-buy__price">{game.price} руб.</div>
                        <button className="game-item__details-buy__btn">В корзину</button>
                    </div>
                </div>
            </div>
        </div>
          </Link>
        })}
      </div>
    </div>
  );
};

export default GameList;
