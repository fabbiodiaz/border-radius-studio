const updateBox = (topLeft, topRight,bottonRight,bottonLeft) => {
    document.getElementById("box").style=`border-radius: ${topLeft}% ${topRight}% ${bottonRight}% ${bottonLeft}%`
}

let ranges = document.querySelectorAll(".control .range")
let values = document.querySelectorAll(".control .value")
let CSSResult = document.getElementById('css-result')
let cssCopyInput = document.getElementById('css-result-copy')

let borderValues=[]

const updateBorderValues = sourceInputArr => {
    borderValues = []
    sourceInputArr.forEach((input, index) => {
        borderValues[index]=input.value
    })
}

printCSSResult = (visualElement,copyElement) => {
    text =  `border-radius: ${borderValues[0]}% ${borderValues[1]}% ${borderValues[2]}% ${borderValues[3]}%`
    visualElement.innerHTML = text
    copyElement.value = text
}
const updateControllers = controllerArray => {
    controllerArray.forEach((control,index) => {
        control.value = borderValues[index]
    })
}

ranges.forEach(range => {
    range.oninput = event => {
        updateBorderValues(ranges)
        updateBox(borderValues[0],borderValues[1],borderValues[2],borderValues[3])
        updateControllers(values)
        printCSSResult(CSSResult)
    }
})

values.forEach(value => {
    value.oninput = event => {
        updateBorderValues(values)
        updateBox(borderValues[0],borderValues[1],borderValues[2],borderValues[3])
        updateControllers(ranges)
        printCSSResult(CSSResult)
    }
})
