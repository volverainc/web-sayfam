describe('Form tests', function() {
    beforeEach(()=> {
        cy.visit('http://localhost:3000')
    })
    it("modal click", function() {
        cy.get('[data-cy=modal-button').click({force:true});
        cy.get('[data-cy=from-name]').type('emre sert');
        cy.get('[data-cy=reply-to]').type('emre@example.com');
        cy.get('[data-cy=message]').type('burasi 25 karakterden az olamaz');
        cy.get('[data-cy=submit-button').click({force:true})
    })
});
    