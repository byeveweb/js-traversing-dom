const a = document.querySelectorAll('.menu-default-state .link') // Menu 1
const b = document.querySelectorAll('.menu-drop-state .link') // Menu 2
const c = document.querySelectorAll('.menu-default-state a i') // Span Menu 2
const d = document.querySelectorAll('.menu-drop-state a span') // Span Menu 2


//F: AddClass
function addClass(el, cl) {
    el.classList.add(cl)
}

//F: RemoveClass
function rmvClass(el, cl) {
    el.classList.remove(cl)
}

//F: CreateElement
function createEle(el) {
    const icono = document.createElement('i')
    icono.classList.add('active', 'icon-arrow_left')
    document.querySelector(el).appendChild(icono)
}

//F: RemoveElement
function removeEle(parentele, childele) {
    alert('hola')
    parentele.removeChild(childele)
}


c.forEach(function(dom) {

    dom.addEventListener('click', e => {

        let ixc = Array.from(c).indexOf(e.target)

        b.forEach(el => rmvClass(el, 'active'))
        a.forEach((el, i) => {
            rmvClass(el, 'active')
            ixc === i ? addClass(el, 'active') : null
            el.children[0].removeChild(el.children[0].children[1])
        })
        console.log(e.target.parentNode.parentNode)

        addClass(e.target.parentNode.parentNode, 'active')

    });
})

d.forEach(function(dom) {

    dom.addEventListener('click', e => {
        let ixc = Array.from(d).indexOf(e.target)

        b.forEach(el => rmvClass(el, 'active'))
        a.forEach((el, i) => {
            rmvClass(el, 'active')
            ixc === i ? addClass(el, 'active') : null
        })
        addClass(e.target.parentNode.parentNode, 'active')

    });
})


//Function Add Class


//Function Remove Class
function rmvClass(el, cl) {
    el.classList.remove(cl)
}

function arrowLeft() {
    console.log('lo leo')
    const iconArrowLeft = document.createAttribute('i')
    iconArrowLeft.classList.add('active icon-arrow_left')
    iconArrowLeft.textContent = 'hola'
    i.parentElement.insertBefore(iconArrowLeft, i.children)
}








/*
//Hover Effect
a.forEach((el, i) => {
    el.addEventListener('mouseover', () => {
        addClass(el.children[0], 'hovernav')
    })

    el.addEventListener('mouseout', () => {
        rmvClass(el.children[0], 'hovernav')
    })

})

b.forEach((el, i) => {
    el.addEventListener('mouseover', () => {
        let ix = i
        a.forEach((el, i) => ix === i ? addClass(el.children[0], 'hovernav') : null)
    })
    el.addEventListener('mouseout', () => {
        let ix = i
        a.forEach((el, i) => ix === i ? rmvClass(el.children[0], 'hovernav') : null)
    })
})*/