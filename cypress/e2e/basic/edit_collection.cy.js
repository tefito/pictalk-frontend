describe('Edits a collection', () => {
  it('Edits a collection', function () {
    cy.login();
    cy.checkVoicesPopup();
    cy.createCollection().then((createdCollection) => {
      if (window && window.innerWidth < 1216) {
        cy.get('[class="navbar-burger burger"]').click();
      }
      cy.get('[data-cy="pictalk-navbar-admin-button"]').click();
      cy.get('[data-cy="cy-' + createdCollection.id + '"]').find('[data-cy="picto-action-dropdown"]').click();
      cy.get('[data-cy="picto-action-dropdown-edit"]').click();
      cy.get('[data-cy="picto-steps-search-input"]').clear('m');
      cy.get('[data-cy="picto-steps-search-input"]').type('manger');
      cy.get('[data-cy="picto-steps-search-button"]').click();
      cy.get(':nth-child(1) > .b-tooltip > .tooltip-trigger > #svg').click();
      cy.get('[data-cy="picto-steps-meaning-input"]').type("Edited");
      cy.get('[data-cy="picto-steps-create-edit-collection-button"]').click();
      cy.get('[data-cy="cy-' + createdCollection.id + '"]').contains('Edited')
      cy.window().then((window) => {
        cy.deleteCollection(createdCollection.id, parseInt(
          window.$nuxt.$route.query.fatherCollectionId,
          10
        ));
      });
    });
  });
});