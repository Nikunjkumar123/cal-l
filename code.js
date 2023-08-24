let ans = document.querySelector('#cal')
let messages = document.querySelector('#MESS')
document.querySelector('#butn').addEventListener('click',function(){
   let a = ((Math.random()*100 +1).toFixed(0))
   ans.innerHTML = a
   if(a>90){
     messages.innerHTML = "omfo le bhaiya"
   }
   else if(a>80){
     messages.innerHTML = "baach gaya"
   }
   else if(a>70){
     messages.innerHTML = "safe zone m hh"
   }
   else if(a>60){
     messages.innerHTML = "padhle bhai"
   }
   else if(a>50){
     messages.innerHTML = "tera kya hoga kalia"
   }
   else if(a>40){
     messages.innerHTML = "naukri kar aur "
   }
   else if(a>30){
     messages.innerHTML = "padhai karo be aukat m rho"
   }
   else if(a>20){
     messages.innerHTML = "saale tu krega ladki baazi"
   }
   else if(a>10){
     messages.innerHTML = "maarja jake kuch nhi hoga"
   }
   condition = false;
});
// let condition = true;
// while(condition = true){
//   let ans = document.querySelector('#cal')
//   let messages = document.querySelector('#MESS')
//   document.querySelector('#butn').addEventListener('click',function(){
//      let a = ((Math.random()*100 +1).toFixed(0))
//      ans.innerHTML = a
//      if(a>90){
//        messages.innerHTML = "omfo le bhaiya"
//      }
//      else if(a>80){
//        messages.innerHTML = "baach gaya"
//      }
//      else if(a>70){
//        messages.innerHTML = "safe zone m hh"
//      }
//      else if(a>60){
//        messages.innerHTML = "padhle bhai"
//      }
//      else if(a>50){
//        messages.innerHTML = "tera kya hoga kalia"
//      }
//      else if(a>40){
//        messages.innerHTML = "naukri kar aur "
//      }
//      else if(a>30){
//        messages.innerHTML = "padhai karo be aukat m rho"
//      }
//      else if(a>20){
//        messages.innerHTML = "saale tu krega ladki baazi"
//      }
//      else if(a>10){
//        messages.innerHTML = "maarja jake kuch nhi hoga"
//      }
//
//   });
// }
