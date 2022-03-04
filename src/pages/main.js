import "./main.scss"
import React from "react"
import News from "../components/news"
import Header from "../components/header"
import Pricing from "../components/pricing"
import Service from "../components/service"
import Progress from "../components/progress"

const Main = () => {
	return (
		<div className='main__container'>
			<Header />
			<News />
			<Pricing />
			<Service />
		</div>
	)
}

export default Main
