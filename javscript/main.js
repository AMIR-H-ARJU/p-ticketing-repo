// The first dynamic way to get jump onto a section over the other section
document.getElementById("buy-ticket").addEventListener('click', function () {
    window.scrollBy(0, 1450);
})
const arr = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'F1', 'F2', 'F3', 'F4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H3', 'H4', 'I1', 'I2', 'I3', 'I3', 'I4', 'J1', 'J2', 'J3', 'J4']
const theParameter = ProDynamic(arr)
function ProDynamic(arr) {
    const num = 20
    const num1 = 15
    const average = 100
    let immersive = 1
    const theCal = 2
    let theTotal = 0
    const theVal = 550
    const Coup1 = "New15"
    const Coup2 = "Couple20"
    let count = 0
    for (const array of arr) {
        document.getElementById(array).addEventListener('click', function fun(event) {
            event.target.disabled = true;
            count++
            if (count > 4) {
                event.array.disabled = true
            }else{
                console.log('this uis the way')
            }
            addClassList(array)
            dyMaking()
            const theId = document.getElementById("append-p1")
            const theDiv = document.createElement('div')
            theDiv.classList.add('flex')
            theDiv.classList.add('gap-16')
            theDiv.classList.add('text-center')
            const cEle = document.createElement('h2')
            cEle.innerText = array
            theDiv.appendChild(cEle)
            const theH2 = document.createElement('h2')
            theH2.innerText = 'Economy'
            theDiv.appendChild(theH2)
            const thePrice = document.createElement('h2')
            const thePriceIn = thePrice.innerText
            const parsing = parseFloat(thePriceIn)
            const theNumeric = theVal
            thePrice.innerText = theNumeric
            // this section starts with the other dynamic operation
            const theId8 = document.getElementById("scoreCard")
            const theInn = theId8.innerText
            const theInt = parseFloat(theInn)
            const newScore = theNumeric
            theTotal += newScore
            theId8.innerText = theTotal
            theDiv.appendChild(thePrice)
            theId.appendChild(theDiv)
            const theId7 = document.getElementById("seat-value")
            const theIdInner4 = theId7.value
            theId7.innerText = immersive++
            const theBtn = document.getElementById('apply')
            const ddd = document.getElementById('coupon')
            if (theId7.innerText == 2) {
                theBtn.removeAttribute('disabled')
                document.getElementById("mobilEee").addEventListener("keyup", function lucky(event) {
                    const inputField = document.getElementById("mobilEee");
                    const theItem = inputField.value;
                    const theCalculation = 11;
                    const theButton = document.getElementById("next-button")
                    if (theItem.toString().length == theCalculation.toString()) {
                        theButton.removeAttribute("disabled")
                    } else {
                        theButton.addAttribute("disabled")
                    }
                    document.getElementById('apply').addEventListener('click', function (event) {
                        const id9 = document.getElementById('after-discounted-total')
                        const innerId9 = id9.innerText
                        const calculation1 = theTotal * num1 / average
                        const calculation2 = theTotal * num / average
                        const calculationFinal1 = theTotal - calculation1
                        const calculationFinal2 = theTotal - calculation2
                        const theInId = document.getElementById('coupon')
                        const theInIdInner = theInId.value
                    // The another condition is applying here for discounted pricing
                    const innerR = document.getElementById('after-discounted-total')
                    const innerIn = innerR.innerText
                    if(theInIdInner.toString() == Coup1.toString() && theId7.innerText == 2 || 3){
                                innerR.innerText = calculationFinal1
                            }
                                                                 if(theInIdInner.toString() == Coup2.toString() && theId7.innerText == 4 ){
                                        innerR.innerText = calculationFinal2
                                    }else{
                                        console.log('You are not eligible for discount')
                                    } 
                        })
                    })
                
            }
        })
    }
}



// if (theInIdInner == Coup1 && theId7.innerText == 2 || 3) {
                        //     id9.innerText = calculationFinal1
                            // document.getElementsById('apply').addEventListener("click", function () {
                            //     const thePayId = document.getElementById('after-discounted-total')
                            //     const inner = thePayId.innerText
                            //     thePayId.innerText = theId8.innerText
                            //     if (inner.toString() === Coup1.toString()) {
                            //         const theCal1 = theNumeric * 100
                            //         thePayId.innerText = theCal1 
                            //     }if(theInIdInner == Coup1 && theId7.innerText == 2){
                            //         id9.innerText= calculationFinal1
                            //     }
                            //     // if (theInIdInner == Coup2 && theId7.innerText == 4) {
                            //     //     id9.innerText = calculationFinal2
                            //     // }else{
                            //     //     console.log('never be upset')
                            //     // }
                            // })
                        // }




    
       
       
       



