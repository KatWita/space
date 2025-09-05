import { useState } from 'react'
import './technology.scss'
import { AnimatePresence, motion } from 'motion/react'
import { variantsContent, variantsImg } from '../utils/variants'
import { useLoaderData } from 'react-router'

const Technology = () => {
	const [activeTab, setActiveTab] = useState(0)

	const tech = useLoaderData()

	let className

	if (activeTab === 0) {
		className = 'technology__img--launch'
	}

	if (activeTab === 1) {
		className = 'technology__img--spacesport'
	}

	if (activeTab === 2) {
		className = 'technology__img--capsule'
	}

	return (
		<main className="technology page-styles">
			<div className="page-container">
				<p className="page-headline">
					<span>03</span>Space launch 101
				</p>
				<div className="technology__box">
					<AnimatePresence mode="wait">
						<motion.img
							key={tech[activeTab].name}
							variants={variantsImg}
							initial="hidden"
							animate="visible"
							exit="hidden"
							transition={{ duration: 0.3 }}
							src={tech[activeTab].images.portrait}
							alt={tech[activeTab].name}
							className={`technology__img technology__img--mobile ${className}`}
							width={375}
							height={258}
						/>
						<motion.img
							key={tech[activeTab].images.portrait}
							variants={variantsImg}
							initial="hidden"
							animate="visible"
							exit="hidden"
							transition={{ duration: 0.3 }}
							src={tech[activeTab].images.portrait}
							alt={tech[activeTab].name}
							className={`technology__img technology__img--desktop`}
						/>
					</AnimatePresence>
					<div className="technology__content-box">
						<div className="technology__btns">
							{tech.map(({ name }, index) => (
								<button
									key={name}
									className={tech[activeTab].name === name ? 'technology__btn active' : 'technology__btn'}
									onClick={() => setActiveTab(index)}
								>
									{index + 1}
								</button>
							))}
						</div>
						<AnimatePresence mode="wait">
							<motion.div
								key={tech[activeTab].name}
								variants={variantsContent}
								initial="hidden"
								animate="visible"
								exit="hidden"
								transition={{ duration: 0.3 }}
								className="technology__content"
							>
								<p className="technology__term">the terminology...</p>
								<p className="technology__name">{tech[activeTab].name}</p>
								<p className="text">{tech[activeTab].description}</p>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</main>
	)
}
export default Technology
