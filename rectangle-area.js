function rectangleArea(){

    // rectangleLength
    const lengthRectangle = document.getElementById('l-rectangle');
    const length = lengthRectangle.value;
    const l = parseFloat(length);
    // console.log(l);

    // rectangleWidth
    const widthRectangle = document.getElementById('w-rectangle');
    const width = widthRectangle.value
    const w = parseFloat(width)
    // console.log(w);

    // areaTriangle
    const areaRectangle = l * w;
    
    // Display Area
    const areaRectangleSpan = document.getElementById('area-rectangle');
    areaRectangleSpan.innerHTML = areaRectangle;
}

