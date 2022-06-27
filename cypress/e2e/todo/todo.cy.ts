describe('My todo app', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/?app=todo')
	})

	it('Should list one default todo', () => {
		cy.get(`[data-test='todo']`).should('have.length', 1)
		cy.get(`[data-test='todo']`).first().should('have.text', 'Brush teeth')
	})
})
