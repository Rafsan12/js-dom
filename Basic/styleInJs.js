const sections = document.querySelectorAll("section");
for(const section of sections){
    section.style.border = "2px solid steelblue";
    section.style.marginBottom ='5px';
    section.style.borderRadius = '5px';
    section.style.paddingLeft = '15px';
}

const placeContainer = document.getElementById('places-container');
placeContainer.style.backgroundColor = 'yellow'