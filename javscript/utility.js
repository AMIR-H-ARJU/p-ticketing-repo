function getInnerText(elementId) {
    const theId = getElementById(elementId)
    const theInnerId = theId.innerText
    return theInnerId
}


function setInnerText(elementId, theInner) {
    const theId = getElementById(elementId)
    theId.innerText = theInner
}


function setParsedInner(elementId) {
    const theId = getElementById(elementId)
    const theInner = theId.innerText
    const parseInner = parsefloat(theInner)
    return parseInner
}

function getInputValue(elementId) {
    const theId = getElementById(elementId)
    const theValue = theId.value
    return theValue
}

function addClassList(elementId) {
    const theId = document.getElementById(elementId)
    theId.classList.add("bg-red-700")
}
function addAttribute(elementId,disabled) {
    const theId = document.getElementById(elementId)
    theId.setAttribute("disabled")
}

function removeClassList(elementId) {
    const theId = document.getElementById(elementId)
    theId.classList.remove("bg-yellow-400")
}


