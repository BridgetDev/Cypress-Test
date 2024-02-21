describe('homepage spec', () => {
  it('check h1 contains correct text', () => {
    cy.visit('localhost:3000')
    cy.get("h1").contains("Testing Next.js Applications with Cypress")
  })
})

describe ( 'using datatest', () => {
it ('get h1 dataset', ()=> {
 
  cy.visit('localhost:3000')
  cy.url().should("contain", "3000")
  cy.get("[data-test ='hero-heading']").contains("Testing Next.js Applications with Cypress")
})

})

//request: to move between pages in conjunction with the current url
describe ('using request', ()=> {
  

  it ('make http request', ()=>{
    cy.visit('localhost:3000')
    cy.request('cypress-fundamentals')
    cy.url()
    //cy.contains('COMMAND CHAINING')

  })
})

describe ('dt', () =>{
    beforeEach(() => {
    cy.log('its run after every test')
  })
  it("the features on the homepage are correct", () => {
    cy.visit("localhost:3000")
    cy.get("dt")
  })

  it ('make request & check with case insensitivity ', ()=>{
        cy.visit('localhost:3000')
        cy.request('cypress-fundamentals').wait(10000)
        // cy.url()
        cy.contains(/command chaining/i)
  
})
it.only ( 'test selector', ()=> {
  cy.visit("localhost:3000")
  cy.get("[data-test= 'hero-heading']").contains("Testing Next.js")
  cy.get('span')
})

})

describe ( 'should',()=> {
  it ('check if nav is visible ', ()=>{
    cy.get("nav").should('be.visible')
  })

})






