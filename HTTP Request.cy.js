describe ('Http rerquests', () => {
//testing GET requests
it ('GET request' , () => {
const url =   'https://mobile.pesapepe.co.ke/api/ussd'
cy.request('POST' ,url)
.its('status')
.should('equal',200)
    })

//POST Call requests
it.only ('POST', ()=> {
    cy.request( {
    method: 'POST',
    url: 'https://mobile.pesapepe.co.ke/api/ussd',
    body : {
    phoneNumber : "254711593744",
    serviceCode: "806",
    sessionId:"dojhvjhjbgseed11yfd",
    text : "1"
    }
}).then((response)=>{
     cy.log(response.body)
    })

    cy.request( {
        method: 'POST',
        url: 'https://mobile.pesapepe.co.ke/api/ussd',
        body : {
        phoneNumber : "254711593744",
        serviceCode: "806",
        sessionId:"dojhvjhjbgseed11yfd",
        text : "1234"
        }
    }).then((response)=>{
         cy.log(response.body)
        })

    cy.request( {
        method: 'POST',
        url: 'https://mobile.pesapepe.co.ke/api/ussd',
        body : {
        phoneNumber : "254711593744",
        serviceCode: "806",
        sessionId:"dojhvjhjbgseed11yfd",
        text : "1"
        }
    }).then((response)=>{
            cy.log(response.body)
        })


})

it('get access token', ()=>{
cy.request({
    url:'https://auth.zamupay.com/connect/token' ,
    method:'POST',
    form: true ,
    body : {
        client_id : "Omega",
        client_secret: "Omega",
        grant_type:"client_credentials",
        scope : "PyPay_api"
        
}})
// .its('status').should('equal', 200)
// .its('body')
// .then((body)=>{
//     cy.log(body);
// })

.then((response)=>{
    //expect(response.status).to.eq(200)
    cy.log(response.body.access_token)
    cy.writeFile('cypress/fixtures/accessToken.txt',  response.body.access_token )

})

})




})