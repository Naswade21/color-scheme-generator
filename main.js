 const color = document.getElementById('color')
 const colorBtn = document.getElementById('color-btn')
 const colorBars = document.getElementById('color-pallette')
 const selectedColor = document.getElementById('select-color')
 const colorForm = document.getElementById('color-form')

 fetch('https://csscolorsapi.com/api/colors/dodgerblue')
    .then(response => response.json())
    .then(data => console.log(data))
 
colorForm.addEventListener('submit', (e) => {
    e.preventDefault()
})