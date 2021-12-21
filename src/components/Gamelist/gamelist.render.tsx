import React, { ChangeEvent, ReactElement } from 'react'
import { Game } from 'types'

interface Props {
	err?: string
	games: Game[]
}

const GameList = ({ err, games }: Props): ReactElement => {
	if (err) {
		return <p>Unable to fetch games</p>
	}
	if (!games?.length) {
		return <p>No games available</p>
	}
	return <></>
}

export default GameList
