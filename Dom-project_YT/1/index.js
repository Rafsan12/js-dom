let div = null;

document.getElementById('change-btn').addEventListener('click',function(){
    // document.getElementById("root").style.backgroundColor = generateRGBColor();
    const root = document.getElementById('root');
    const rgbBtn = generateRGBColor();
    root.style.backgroundColor = rgbBtn;
    const output = document.getElementById('output');
    output.value = rgbBtn.substring(1)

    const copyBtn = document.getElementById('copy-btn');
    copyBtn.addEventListener('click' , function(){
        navigator.clipboard.writeText(`#${output.value}`)
        if(div !== null){
            div.remove()
            div = null;
        }
        // generateToastMessage(`${output.value} copied`)

        if (isValidHex(output.value)) {
			navigator.clipboard.writeText(output.value);
			generateToastMessage(`#${output.value} copied`);
		} else {
			alert('Invalid Color Code');
		}
	});

    output.addEventListener('keyup', function (e) {
		const color = e.target.value;
		if (color) {
			output.value = color.toUpperCase();
			if (isValidHex(color)) {
				root.style.backgroundColor = `#${color}`;
			}
		}
	});
})







function generateRGBColor(){
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    const rgb = `rgb(${red},${green},${blue})`;
    const hex = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
    return rgb,hex;
}

function generateToastMessage(msg) {
	div = document.createElement('div');
	div.innerText = msg;
	div.className = 'toast-message toast-message-slide-in';

	div.addEventListener('click', function () {
		div.classList.remove('toast-message-slide-in');
		div.classList.add('toast-message-slide-out');

		div.addEventListener('animationend', function () {
			div.remove();
			div = null;
		});
	});

	document.body.appendChild(div);
}

function isValidHex(color){
     if(color.length !== 6) return false;
     return /^[0-9A-Fa-f]{6}$/i.test(color);
}

// function isValidHex(color) {
// 	if (color.length !== 7) return false;
// 	if (color[0] !== '#') return false;

// 	color = color.substring(1);
// 	return /^[0-9A-Fa-f]{6}$/i.test(color);
// }

