let a = document.querySelector('#aw')
let b = document.querySelector('#der')
b.addEventListener('click', asu)
function asu() {
    const getRes = async(url) => {
        const res = await fetch(url);
        if(!res.ok){ 
        throw new Error(`status: ${res.status}`); 
            }
            return await res.json(); 
        }
        
        getRes('obj.json') 
           .then(data=> {
                console.log(data);
                
                for(let key in data) {
                    let c = document.createElement('div');
                    let d = data[key].zog;
                    let e = data[key].opis;
                    let f = data[key].coin

                    c.innerHTML = `<div class="as">
                    <h4>Загаловка: ${d}</h4>
                    <h4>Описание:${e}</h4>
                    <h4>Стоимость:${f}</h4>
                    <br><br><br
                    </div`
                    a.append(c)
                }
                
        });
  
    }   
    

