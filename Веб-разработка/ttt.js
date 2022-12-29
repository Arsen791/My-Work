//a = 15
//b = 48
//c = 77

    

let name = prompt('Введите свое имя')

    while (name.length <= 3){
         name = prompt('Вы некорректно ввыели имя')
    }
let age = +prompt('Введите свое возраст')

    while (age <= 14 || age >= 60)
        if (age <=14  ){
             age = prompt('Вы должны быть старше 14 лет, попробуйте еще раз')
        }
        else if (age >= 60 ) {
            age = prompt('Вы должны быть младше 60 лет, попробуйте еще раз')
        }
      
let ctud = prompt('Вы студент')
while(ctud != "Да" && ctud != "да"){
        if (ctud != "Да" && ctud != 'да'){
            ctud = prompt('Вы студент')
           
        }
    }   
    window.location.href = 'http://127.0.0.1:5500/ind.html'
    

    
    
  



