function calculateParallelogramArea() {
    // get parallelogram base
    const parallelogramBaseInput = document.getElementById('parallelogram-base')
    const parallelogramBaseText = parallelogramBaseInput.value
    const base = parseFloat(parallelogramBaseText)

    // get parallelogram height
    const parallelogramHeightInput = document.getElementById('parallelogram-height')
    const parallelogramHeightText = parallelogramBaseInput.value
    const height = parseFloat(parallelogramHeightText)

    // calculate parallelogram area
    const area = base * height

    // display parallelogram area
    const parallelogramAreaSpan = document.getElementById('parallelogram-area')
    parallelogramAreaSpan.innerText = area
}