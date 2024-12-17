let div1=document.getElementById('totalbox1')
let div2=document.getElementById('totalbox2')
let div3=document.getElementById('totalbox3')
let div4=document.getElementById('totalbox4')
let div5=document.getElementById('totalbox5')
let div6=document.getElementById('totalbox6')
let checkbox1=document.getElementById('checkbox1')
let checkbox2=document.getElementById('checkbox2')
let checkbox3=document.getElementById('checkbox3')
let checkbox4=document.getElementById('checkbox4')
let checkbox5=document.getElementById('checkbox5')
let checkbox6=document.getElementById('checkbox6')
let gotocart=document.querySelector('#gotocart')
let divbox=document.querySelector('.box')
let arr = [];
gotocart.addEventListener('click', () => {
    arr = []
    for (let i = 1; i <= 6; i++) {
        let checkbox = document.getElementById(`checkbox${i}`);
        let div = document.getElementById(`totalbox${i}`);
        if (checkbox.checked) {
            arr.push(div);
        }
    }

    divbox.innerHTML = '';
    for (let div of arr) {
    div.querySelector('input').remove()
    div.querySelector('p').remove()
    
        divbox.innerHTML += `<div>${div.innerHTML}
           <input type="checkbox"class="checkbox delete"id="checkbox1"><p>removefromcart</p></div>
        `;
        document.querySelectorAll('.delete').forEach((checkbox)=>{
            checkbox.addEventListener('click',()=>{
                checkbox.parentElement.remove()
            })
        })
    }
});
