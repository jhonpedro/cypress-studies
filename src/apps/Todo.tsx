import React, { useRef, useState } from 'react'

export const Todo = () => {
	const newTodoInputRef = useRef<HTMLInputElement>(null)
	const [todos, setTodos] = useState<Array<{ label: string; done: boolean }>>([
		{ label: 'Brush teeth', done: true },
	])

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()

		const newTodoLabel = newTodoInputRef.current?.value

		if (!newTodoLabel) {
			return
		}

		setTodos((prevState) => [
			...prevState,
			{ done: false, label: newTodoLabel },
		])

		newTodoInputRef.current.value = ''
	}

	const handleDoneTodo = (todoName: string) => {
		const currentTodoPosition = todos.findIndex(
			({ label }) => label === todoName
		)

		setTodos((prevState) =>
			prevState.map((todo, index) => {
				if (index === currentTodoPosition) {
					return { ...todo, done: !todo.done }
				}

				return todo
			})
		)
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='What do we need to do?'
					ref={newTodoInputRef}
				/>
			</form>

			<div>
				<ul>
					{todos.length === 0 && <span>Nothing to do</span>}
					{todos.map((todo) => (
						<li key={todo.label} data-test='todo'>
							<input
								type='checkbox'
								checked={todo.done}
								onChange={() => handleDoneTodo(todo.label)}
							/>
							{todo.label}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
