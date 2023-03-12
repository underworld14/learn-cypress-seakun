/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("seakun", () => {
  beforeEach(() => {
    cy.visit("https://seakun.id/");
    cy.viewport(1600, 800);
  });

  it("Should able to make order", () => {
    cy.get(".md\\:w-\\[268px\\]").as("products");
    cy.get("@products").eq(0).contains("Pesan").click();
    cy.get(".tn\\:px-4 > .w-full > div").click();

    // check 3 month
    cy.get(".mt-4 > .rounded-xl > #menu-button").as("packageDropdown").click();
    cy.get(".payment-list").contains("3 bulan ( Rp84.000 )").click();
    cy.get(".order-detail__payment > :nth-child(2)").should("include.text", "Rp84.000");

    // check 6 month
    cy.get("@packageDropdown").click();
    cy.get(".payment-list").contains("6 bulan ( Rp168.000 )").click();
    cy.get(".order-detail__payment > :nth-child(2)").should("include.text", "Rp168.000");
  });
});
