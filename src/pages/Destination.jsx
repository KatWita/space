import { useState } from 'react'
import './destination.scss'
import { AnimatePresence, motion } from 'motion/react'
import { variantsContent, variantsPlanet } from '../utils/variants'
import { useLoaderData } from 'react-router'

const Destination = () => {
	const [activeTab, setActiveTab] = useState(0)

	const planets = useLoaderData()

	return (
		<main className="destination page-styles">
			<div className="page-container">
				<p className="page-headline">
					<span>01</span>Pick your destination
				</p>
				<div className="destination-cont">
					<AnimatePresence mode="wait">
						<motion.img
							key={planets[activeTab].name}
							variants={variantsPlanet}
							initial="hidden"
							animate="visible"
							exit="hidden"
							transition={{ duration: 0.3 }}
							src={planets[activeTab].images.webp}
							alt={planets[activeTab].name}
							className="destination__img"
							width={150}
							height={150}
						/>
					</AnimatePresence>
					<div className="destination__content">
						<div className="destination__btns">
							{planets
								.filter(({ name }) => name)
								.map(({ name }, index) => (
									<button
										key={name}
										className={planets[activeTab].name === name ? 'destination__btn active' : 'destination__btn'}
										onClick={() => setActiveTab(index)}
									>
										{name}
									</button>
								))}
						</div>
						<AnimatePresence mode="wait">
							<motion.div
								key={planets[activeTab].name}
								variants={variantsContent}
								initial="hidden"
								animate="visible"
								exit="hidden"
								transition={{ duration: 0.3 }}
							>
								<h2 className="destination__title">{planets[activeTab].name}</h2>
								<p className="destination__text text">{planets[activeTab].description}</p>
								<div className="destination__stats">
									<div className="destination__dist">
										<p className="destination__stats-title">avg. distance</p>
										<p className="destination__stats-num">{planets[activeTab].distance}</p>
									</div>
									<div className="destination__travel">
										<p className="destination__stats-title">est. travel time</p>
										<p className="destination__stats-num">{planets[activeTab].travel}</p>
									</div>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</main>
	)
}
export default Destination
