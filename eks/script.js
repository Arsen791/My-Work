let a = document.querySelector('#u')
let c = document.querySelector('#ame')
let b = document.querySelector('.posts')

a.addEventListener('click', asr)


function asr(){
    
    let userName = document.querySelector('#name').value
    let net = document.createElement('h1');
    let user = document.querySelector('#ame').value
    let ne = document.createElement('h1');
    let qwe = document.querySelector('#qwe').value
    let ctu= document.querySelector('#ctu').value
    let nectu = document.querySelector('#nectu').value
    
    if(userName.length < 3) {
        
        alert("Вы некорректно ввели имя, должно быть от 3 символов")
       
    }
    
    

    if (user <= 14 || user > 30){
        alert("Вы некорректно ввели возраст")
        return
        }
    switch (qwe){
        
       case nectu: alert("вход только для студентов")
       return
    }
    window.location.href = './ind.html' 
    
    
}


