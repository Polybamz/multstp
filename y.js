// window.onload() = step1();
//document.getElementsByTagName('body').style.background = 'blue';
const toStep2 = document.querySelector('.btn');
console.log(toStep2)
function tostep2(){
  document.querySelector(".col2").style.display = 'none';
  document.querySelector('.col3').style.display = 'initial';
}
const toStep1 =()=>{
  document.querySelector(".col2").style.display = 'initial';
  document.querySelector('.col3').style.display = 'none';
}

const btostep2=()=>{
  document.querySelector(".col4").style.display = 'none';
  document.querySelector('.col3').style.display = 'initial';

}




  const toStep3 = () =>{
    if(document.querySelector('#year').checked){
    document.querySelector(".col4").style.display = 'initial';
    document.querySelector('.col3').style.display = 'none';
  }
  
     else if(document.querySelector('#month').checked){
  
    document.querySelector(".col4b").style.display = 'initial';
    document.querySelector('.col3').style.display = 'none';
  }
  
}
const toStepB =()=>{
  document.querySelector(".col4b").style.display = 'none';
  document.querySelector(".col5").style.display = 'initial';

}
const toStep5 =()=>{
  document.querySelector(".col4b").style.display = 'none';
  document.querySelector(".col5b").style.display = 'initial';

}
const btoStep4 =()=>{
  document.querySelector(".col4b").style.display = 'initial';
  document.querySelector(".col5").style.display = 'none';

}
const backto4b=()=>{
  document.querySelector(".col4b").style.display = 'initial';
  document.querySelector(".col5b").style.display = 'none';
}


// toStep2.addEventLiatainer('click',function(){
  
//   document.querySelector(".col2").style.display = 'none';
//   document.querySelector('.col3').style.display = 'initial';
// });
