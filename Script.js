 // h1{ color: verde};
 // .parrafito{ ... };
 // #pid{ ... };
 
 const h1 = document.querySelector('h1');
 const p = document.querySelector('p');
 const parrafito = document.querySelector('.parrafito');
 const pid = document.getElementById('pid');
 const input = document.querySelector('input');

 console.log(input.value);

 console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
 });

 h1.innerHTML = "patito <br> feo";
 h1.innerText = "patito <br> feo ";
 console.log(h1.getAttribute('class'));
 h1.setAttribute('class', 'rojo');

 //h1.classList.add('rojo');
 //h1.classList.remove('verde');

 input.value = "456";

 const img = document.createElement('img');
 img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhri0UR5i__SDQIVEhQBW_WHwmE8c_Y106IA&usqp=CAU');
 console.log(img);

 pid.innerHTML = "";
 pid.appendChild(img);

 












