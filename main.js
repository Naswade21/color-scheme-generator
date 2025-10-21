 const color = document.getElementById('color')
 const colorBars = document.getElementById('color-pallette')
 const selectedColor = document.getElementById('select-color')
 const colorForm = document.getElementById('color-form')
 let colorArray = []
 let beginColorArray = [{value: ''}]

 colorForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let colorValue = color.value

    let adjColorValue = colorValue.replace("#", "")

    fetch(`https://www.thecolorapi.com/scheme?hex=${adjColorValue}&format=json&mode=${selectedColor.value}`)
      .then(response => response.json())
      .then(data => {
        colorArray = data.colors

        let hexArr = colorArray.map((color) => {
            return color.hex
        })

        console.log(hexArr)

        renderColors(hexArr)
    })
})

const getColorBarsHtml = (a = []) => {
    return a.map((color) => {
        return `<div class="color-bar-wrap">
        <div class="color-bar" style="background-color: ${color.value}"></div>
        <div class="color-name">${color.value}</div>
        </div>`
    }).join('')
}

const renderColors = (a) => {
    return colorBars.innerHTML = getColorBarsHtml(a)
}