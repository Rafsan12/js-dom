function generateRGBColor(){
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    const rgb = `rgb(${red},${green},${blue})`;
    return rgb;
}



document.getElementById('change-btn').addEventListener('click',function(){
    // document.getElementById("root").style.backgroundColor = generateRGBColor();
    const root = document.getElementById('root');
    const rgbBtn = generateRGBColor();
    root.style.backgroundColor = rgbBtn;
})