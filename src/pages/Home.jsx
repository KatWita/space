import './home.scss'

const Home = () => {
	return (
		<main className="home">
			<div className="container">
				<div className="home__content">
					<p className="home__headline">So, you want to travel to</p>
					<h1 className="home__title">Space</h1>
					<p className="text">
						Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
						of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
					</p>
				</div>
				<button className="btn-explore">Explore</button>
			</div>
		</main>
	)
}
export default Home
