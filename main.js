
const navigation = document.querySelector('nav');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const links = document.querySelectorAll('a');
const text = document.querySelectorAll('p');
const heading1 = document.querySelectorAll('h1');
const heading2 = document.querySelectorAll('h2');
const heading3 = document.querySelectorAll('h3');
const unorderedList = document.querySelectorAll('li');

let button1 = document.querySelector('button');
button1.onclick = changeFontFamily;
button1.addEventListener("click", changeFontFamily);


function changeFontFamily(){

    text.forEach(p => {
        p.style.fontFamily = "Arial, Helvetica, sans-serif";
    })

    links.forEach(a => {
        a.style.fontFamily = "Arial, Helvetica, sans-serif";
    })

    heading1.forEach(h1 => {
        h1.style.fontFamily = "Arial, Helvetica, sans-serif";
    })
    heading2.forEach(h2 => {
        h2.style.fontFamily = "Arial, Helvetica, sans-serif";
    })

    heading3.forEach(h3 => {
        h3.style.fontFamily = "Arial, Helvetica, sans-serif";
    })

    unorderedList.forEach(li => {
        li.style.fontFamily = "Arial, Helvetica, sans-serif";
    })

    navigation.style.backgroundColor = "blueviolet";
    header.style.backgroundColor = "blueviolet";
    footer.style.backgroundColor = "blueviolet";

    
   
   
   
   
}
