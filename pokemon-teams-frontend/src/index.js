const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
document.addEventListener("DOMContentLoaded", function() {

        fetch(TRAINERS_URL)
            .then(response => response.json())
            .then(data => {
                data.forEach(addTrainerCard)
                
            })



        function addTrainerCard(trainer){

            let main=document.querySelector('main') 
            let card=document.createElement('div')
            card.className='card'
            main.append(card)
            let header = document.createElement('h1')
            header.innerHTML = trainer.name
            card.append(header)
            let add_pokmen = document.createElement('button')
            card.append(add_pokmen)
            add_pokmen.innerHTML= "create pokemon"
            let ul= document.createElement('ul')
            card.append(ul)
            

            // console.log(trainer.pokemons)

        trainer.pokemons.forEach(function(pokemon){ 

                let li=document.createElement('li')
                let button=document.createElement('button')
                button.innerHTML="release"
                button.style.backgroundColor="red"
                li.innerHTML=pokemon.species
                ul.append(li)
                li.append(button) 
                
                button.addEventListener('click', function(e) {
                    e.preventDefault() 
                //  parentNode.removeChild(node);
                    li.remove()
                    
                    
                }) 
                
            })
            
           

            
        }
        add_pokmen.addEventListener(function(e){
            e.preventDefault() 
            

        })

    });

        
        
   
   
