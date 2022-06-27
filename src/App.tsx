import React from 'react'
import { Todo } from './apps/Todo'

function App() {
	const getCurrentApp = (): React.ReactNode => {
		const params = Object.fromEntries(
			new URLSearchParams(window.location.search)
		)

		const currentAppQueryParam = params.app

		switch (currentAppQueryParam) {
			case 'todo':
				return <Todo />
			default:
				return <span>Not valid app</span>
		}
	}

	return <div>{getCurrentApp()}</div>
}

export default App
