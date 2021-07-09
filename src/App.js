import React, { useEffect, useState } from 'react';
import Coin from './Coin'
import './App.css';

function App() {
	const [coins, setCoins] = useState([])
	const [search, setSearch] = useState('')

	useEffect(() => {
		getCrypto();
	}, [])

	const getCrypto = async () => {
		try {
			const cryptoObject = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=250&page=1&sparkline=false');
			const coins = await cryptoObject.json();
			setCoins(coins)
		}
		catch (error) {
			alert(error)
		}
	}

	const handleChange = (e) => {
		setSearch(e.target.value);
	}

	const filteredCoins = coins.filter(coin =>
		coin.name.toLowerCase().includes(search.toLowerCase())
	)

	return (
		<div className="App">
			<div className="fork">
				<div className="logo">
					<a href={"https://github.com/Rakeshgombi/CrypTracker/tree/master"} title="Fork this project on github">
						<h1><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"
							data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-w-16" role="img"
							viewBox="0 0 496 512">
							<path fill="currentColor"
								d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
						</svg> </h1>
					</a>
				</div>
			</div>
			<h2>CrypTracker - A simplified Cryptocurrency Tracker</h2>
			<div className="coin-search">
				<div className="form__group field">
					<input type="input" className="form__field" placeholder="Search a coin" autoComplete="off" name="name" id='name' onChange={handleChange} />
					<label htmlFor="name" className="form__label">Search a Coin</label>
				</div>
				<div className="coin-container">
					<div className="coin-head-row">
						<div className="coin-head">
							<h3 className="coin-head-rank">Rank</h3>
							<h3 className="coin-head-name">Name</h3>
							<h3 className="coin-head-symbol">Symbol</h3>
							<h3 className="coin-head-price">Price</h3>
							<h3 className="coin-head-volume">Volume</h3>
							<h3 className="coin-head-percent">24h</h3>
							<h3 className="coin-head-marketcap">Market Cap</h3>
						</div>
					</div>
				</div>
				{filteredCoins.map(coin => {
					return (
						<Coin
							key={coin.id}
							rank={coin.market_cap_rank}
							name={coin.name}
							image={coin.image}
							symbol={coin.symbol}
							volume={coin.total_volume}
							price={coin.current_price}
							priceChange={coin.price_change_percentage_24h}
							marketcap={coin.market_cap}
						/>
					)
				})}
			</div>
			<footer>
				<p>Contact me on</p>
				<ul>
					<li><a href={"https://www.instagram.com/_.__no.one_.__/"} title="Contact me through Instagram"><i className="fab">&#xf16d;</i></a></li>
					<li><a href={"https://github.com/Rakeshgombi/"} title="Find me on Github"><i className="fab">&#xf09b;</i></a></li>
					<li><a href={"https://in.linkedin.com/in/rakesh-gombi-8b8412170"} title="Contact me through Linkedin"><i className="fab">&#xf0e1;</i></a></li>
					<li><a href={"mailto:rakeshgombi18@gmail.com"} title="Mail to: rakeshgombi18@gmail.com"><i className="far">&#xf0e0;</i></a></li>
				</ul>
			</footer>
		</div >
	);
}

export default App;
