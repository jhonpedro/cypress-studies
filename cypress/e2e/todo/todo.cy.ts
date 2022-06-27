describe('My todo app', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/?app=todo')
	})

	it('Should list one default todo', () => {
		cy.get(`[data-test='todo']`).should('have.length', 1)
		cy.get(`[data-test='todo']`).first().should('have.text', 'Brush teeth')
	})

	it('Should be able to add a new todo', () => {
		const newTodoName = 'Wash the car'

		cy.get(`[data-test='new-todo']`).type(`${newTodoName}{enter}`)

		cy.get(`[data-test='todo']`)
			.should('have.length', 2)
			.last()
			.should('have.text', newTodoName)
	})

	it('Could uncheck todo', () => {
		cy.get(`[data-test='todo']`).first().find('input[type=checkbox]').click()

		cy.get(`[data-test='todo']`)
			.first()
			.find('input')
			.should('have.attr', 'value', 'todo-not-done')
	})
})
