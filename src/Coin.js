import React from 'react';
import './Coin.css';

const Coin = ({ rank, image, name, symbol, price, volume, priceChange, marketcap }) => {
	return (
		<>
			<div className="coin-container">
				<div className="coin-row">
					<div className="coin">
						<p className="coin-rank">{rank}</p>
						<p className="coin-name">
							<img src={image} alt="Crypto" /> {name}</p>
						<p className="coin-symbol">{symbol}</p>
						<p className="coin-price">₹ {price.toLocaleString()}</p>
						<p className="coin-volume">₹ {volume.toLocaleString()}</p>
						{priceChange < 0 ?
							(<p className="coin-percent red">{priceChange?.toFixed(2)}%</p>) :
							(<p className="coin-percent green">{priceChange?.toFixed(2)}%</p>)}
						<p className="coin-marketcap">₹ {marketcap.toLocaleString()}</p>
					</div>
				</div>
			</div>
		</>
	);

}

export default Coin;
