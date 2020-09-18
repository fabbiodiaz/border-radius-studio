// aplica estilo personalizado na caixa demonstrativa da página e atualiza o script exibido
const updateOutput = ([topLeft, topRight,bottonRight,bottonLeft],demonstrativeText) => {
    const styleText = `border-radius: ${topLeft}% ${topRight}% ${bottonRight}% ${bottonLeft}%`
    demonstrativeText.innerText = styleText
    document.getElementById("box").style = styleText
}

// Atualiza elemento de controle no site com base em um array de dados
const updateControllers = (controllers,sourceData) => {
    controllers.forEach((control,index) => {
        control.value = sourceData[index]
    })
}

// gera array de valores para borda com base em uma lista de elementos HTML
const getBorderValues = sourceInputArr => {
    const borderValues = []
    sourceInputArr.forEach((input, index) => {
        borderValues[index]=input.value
    })
    return borderValues
}

// --- Captura dos elementos -- 
const ranges = document.querySelectorAll(".control .range")
const values = document.querySelectorAll(".control .value")
const CSSResult = document.getElementById('css-result')
const copyButton = document.getElementById("btn")

// --- atribuir funções
ranges.forEach(range => {
    range.oninput = event => {
        const borderValues = getBorderValues(ranges)
        updateOutput(borderValues,CSSResult)
        updateControllers(values,borderValues)
        copyButton.classList.remove('copied')
    }
})

values.forEach(value => {
    value.oninput = event => {
        const borderValues = getBorderValues(values)
        updateOutput(borderValues,CSSResult)
        updateControllers(ranges,borderValues)
        copyButton.classList.remove('copied')

    }
})

copyButton.onclick = event => {
    const tempElement = document.createElement('textarea');
    tempElement.value = CSSResult.innerText;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
    copyButton.classList.add('copied')
}
