import "./main.scss"

const Main = () => {
	return (
		<div className='main__container'>
			{/* what about use section for each part of page to simplify html structure?  */}
			<section className='header'>
				<div className='blueblob'></div>
				<h1>What happens in blockchain, stays in blockchain.</h1>
				<p>
					You can’t ignore the blockchain anymore. You’d better start
					learning it. The time is now.
				</p>
				<div className='greenblob'></div>
			</section>
		</div>
	)
}

export default Main
