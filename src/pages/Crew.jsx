import { useState } from 'react'
import './crew.scss'
import { AnimatePresence, motion } from 'motion/react'
import { variantsContent } from '../utils/variants'
import { useLoaderData } from 'react-router'

const Crew = () => {
	const [activeTab, setActiveTab] = useState(0)

	const people = useLoaderData()

	return (
		<main className="crew page-styles">
			<div className="page-container">
				<p className="page-headline">
					<span>02</span>Meet your crew
				</p>
				<div className="crew__cont">
					<div className="crew__content">
						<AnimatePresence mode="wait">
							<motion.div
								key={people[activeTab].name}
								variants={variantsContent}
								initial="hidden"
								animate="visible"
								exit="hidden"
								transition={{ duration: 0.3 }}
								className="crew__member"
							>
								<p className="crew__rank">{people[activeTab].role}</p>
								<p className="crew__name">{people[activeTab].name}</p>
								<p className="text">{people[activeTab].bio}</p>
							</motion.div>
						</AnimatePresence>
						<div className="crew__btns">
							{people.map(({ name }, index) => (
								<button
									key={name}
									className={people[activeTab].name === name ? 'crew__btn active' : 'crew__btn'}
									onClick={() => setActiveTab(index)}
								/>
							))}
						</div>
					</div>
					<AnimatePresence mode="wait">
						<motion.div
							key={people[activeTab].name}
							variants={variantsContent}
							initial="hidden"
							animate="visible"
							exit="hidden"
							transition={{ duration: 0.3 }}
							className="crew__img-box"
						>
							<img src={people[activeTab].images.webp} alt={people[activeTab].name} className="crew__img" />
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</main>
	)
}
export default Crew
