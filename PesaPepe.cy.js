describe ('HTTP Requests', ()=> {


//testing GET requests
it ('GET request' , () => {
    const url =   'https://mobile.pesapepe.co.ke/api/ussd'
    cy.request('POST' ,url)
    .its('status')
    .should('equal',200)
        })
    
    //POST Call requests
    // it.only ('POST', ()=> {
    //     cy.request( {
    //     method: 'POST',
    //     url: 'https://mobile.pesapepe.co.ke/api/ussd',
    //     body : {
    //     phoneNumber : "254711593744",
    //     serviceCode: "806",
    //     sessionId:"dojhvjhjbgseed11yfd",
    //     text : "1"
    //     }
    // }).then((response)=>{
    //      cy.log(response.body)
    //     })
    
    //     cy.request( {
    //         method: 'POST',
    //         url: 'https://mobile.pesapepe.co.ke/api/ussd',
    //         body : {
    //         phoneNumber : "254711593744",
    //         serviceCode: "806",
    //         sessionId:"dojhvjhjbgseed11yfd",
    //         text : "1234"
    //         }
    //     }).then((response)=>{
    //          cy.log(response.body)
    //         })
    
    //     cy.request( {
    //         method: 'POST',
    //         url: 'https://mobile.pesapepe.co.ke/api/ussd',
    //         body : {
    //         phoneNumber : "254711593744",
    //         serviceCode: "806",
    //         sessionId:"dojhvjhjbgseed11yfd",
    //         text : "1"
    //         }
    //     }).then((response)=>{
    //             cy.log(response.body)
    //         })
    
    
    // })


    //effective
    it.only ('check balance ', ()=> {
 const ussdRequest = (text) =>{
    return cy.request( {
                method: 'POST',
                url: 'https://mobile.pesapepe.co.ke/api/ussd',
                body : {
                phoneNumber : "254711593744",
                serviceCode: "806",
                sessionId:"balance2",
                text : text
                }
            }).then((response)=>{
                    cy.log(response.body)
                })
 }

    ussdRequest('1')
    ussdRequest('1234')
    ussdRequest('1')
    ussdRequest('2')
    ussdRequest('1')
    ussdRequest('98')



    })

    
})
