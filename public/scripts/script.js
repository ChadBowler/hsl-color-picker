console.log('hallo');

const colorPicker =  document.getElementById('color-picker');
const colorDiv1 = document.getElementById('color-div-1');
const colorDiv2 = document.getElementById('color-div-2');
const colorDiv3 = document.getElementById('color-div-3');
const colorDiv4 = document.getElementById('color-div-4');
let colorsRow = document.createElement('tr');
colorsRow.classList.add('color-row');
colorPicker.appendChild(colorsRow);

function createColorTable() {
    for (let i = 0; i < 361; i++) {
        let colorData = document.createElement('td');
        colorData.style.backgroundColor = `hsl(${i}, 100%, 50%)`;
        colorData.id =`${i}`;
        colorData.classList.add('color-lines');
        colorsRow.appendChild(colorData);
        
    };
};

colorPicker.addEventListener('click', (e) => {
    // e.preventDefault();
    let chosenColor = e.target;
    document.body.style.backgroundColor = `hsl(${chosenColor.id}, 100%, 50%)`;
    colorDiv1.style.backgroundColor = `hsl(${chosenColor.id}, 100%, 40%)`;
    colorDiv2.style.backgroundColor = `hsl(${chosenColor.id}, 100%, 30%)`;
    colorDiv3.style.backgroundColor = `hsl(${chosenColor.id}, 100%, 60%)`;
    colorDiv4.style.backgroundColor = `hsl(${chosenColor.id}, 100%, 70%)`;
});

createColorTable();