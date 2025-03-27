function calculateRectangleArea() {
    // get rectangle width
    const rectangleWidthInput = document.getElementById('rectangle-width')
    const rectangleWidthText = rectangleWidthInput.value
    const width = parseFloat(rectangleWidthText)

    // get rectangle height
    const rectangleHeightInput = document.getElementById('rectangle-height')
    const rectangleHeightText = rectangleHeightInput.value
    const height = parseFloat(rectangleHeightText)

    // calculate rectangle area
    const area = width * height

    // display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area')
    rectangleAreaSpan.innerText = area
}