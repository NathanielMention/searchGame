import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Game } from 'types'

interface Props {
	content: Game
}

const GameCard = ({ content }: Props): ReactElement => {
	const { id, title, thumbnail, short_description, genre } = content

	const link = `/game/${id}`

	return (
		<Link to={link}>
			<img alt={title} src={thumbnail}></img>
			<h2>{title}</h2>
			<p>{genre}</p>
			<p>{short_description}</p>
		</Link>
	)
}

export default GameCard
