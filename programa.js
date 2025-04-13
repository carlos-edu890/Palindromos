function verificar(){
  let text = document.querySelector('input#texto');
  let box = document.querySelector('div.myclass');
  let bm = document.createElement('p');

  let texto = text.value;

  box.innerHTML = ``;

  box.appendChild(bm);

  if(text.value.length == 0){
    alert(`Digite algo.`);
    return;
  }
  
  let para = true;

  for(let i = 0, j = texto.length - 1; i < texto.length; i ++, j--){
    if(texto[i] != texto[j]){
      para = false;
      break;
    }
  }

  if(para){
    bm.innerHTML = `Sim, <span style="color: #AA57CB">'${texto}'</span> é um palídromo.`;
  }else{
    bm.innerHTML = `Não, <span style="color: #AA57CB">'${texto}'</span> não é um palíndromo.`;
  }

  text.value = ``;

}