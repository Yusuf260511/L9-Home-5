let body = document.body;
let div = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.textContent = "1. Имя:   " + prompt("Введите имя:");
    let h11 = document.createElement("h1");
    h11.textContent = "2. Фамилия:   " + prompt("Введите фамилию:");
    let h12 = document.createElement("h1");
    h12.textContent = "3. Возраст:   " + prompt("Введите возраст:");
let letter = prompt("Выберите размер букв: \n1) Большие \n2) Маленькие");

if (letter == '1') {
    h1.textContent = h1.textContent.toUpperCase();
    h11.textContent = h11.textContent.toUpperCase();
    h12.textContent = h12.textContent.toUpperCase();

    div.appendChild(h1);
    div.appendChild(h11);
    div.appendChild(h12);
    
    body.appendChild(div);
} else if (letter == '2') {
    h1.textContent = h1.textContent.toLowerCase();
    h11.textContent = h11.textContent.toLowerCase();
    h12.textContent = h12.textContent.toLowerCase();

    div.appendChild(h1);
    div.appendChild(h11);
    div.appendChild(h12);
    
    body.appendChild(div);
} else {
    alert('Введите правильный тип данных (число 1 или 2)');
};

div.style.backgroundColor = 'black';
div.style.color = 'white';
div.style.padding = "20px 40px";
div.style.borderRadius = "50px";
div.style.display = "inline-block";
div.style.margin = "20px";