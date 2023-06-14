console.log('hallo');

const colorPicker =  document.getElementById('color-picker');
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
});

createColorTable();

