function triangleArea(){

    // triangleBreath
    const breadthTraingle = document.getElementById('b-triangle');
    const breadth = breadthTraingle.value;
    const b = parseFloat(breadth);
    // console.log(b);

    // traingleHeight
    const heightTraingle = document.getElementById('h-triangle');
    const height = heightTraingle.value
    const h = parseFloat(height)
    // console.log(h);

    // areaTriangle
    const areaTriangle = 0.5 * b * h;
    
    // Display Area
    const areaTriangleSpan = document.getElementById('area-triangle');
    areaTriangleSpan.innerHTML = areaTriangle;
}