
//Getting the Elements

let input = document.getElementById("input-element");
let btn = document.getElementById("btn");
let container = document.querySelector(".container");


btn.addEventListener('click', () => {
    
    
    let inputSort = '';
    
    let inputArr = [...input.value].sort();
    inputArr.forEach(str => {
        inputSort += str;
    });
    
    let div = document.createElement("div");

    div.className = "sort-result"


    container.after(div);

    const textNode = document.createTextNode(inputSort);
    div.append(textNode);
    
});
