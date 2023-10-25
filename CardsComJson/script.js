

function carregar(){

    fetch('dados.json').then((Response)=>Response.json()).then(dados =>{
        const container = document.querySelector('#containerCard')
    
        dados.desenhos.map(personagem => {
    
            const card = document.createElement('div')
            card.classList.add('card')  
      
            const img = document.createElement('img')
            img.src = personagem.imagem
            img.alt = personagem.nome
      
            const nome = document.createElement('h2')
            nome.textContent = personagem.nome

            const idade = document.createElement('h2')
            idade.textContent = personagem.idade

            const poder = document.createElement('h2')
            poder.textContent = personagem.poder
    
            card.appendChild(img)
            card.appendChild(nome)
            card.appendChild(idade)
            card.appendChild(poder)
            container.appendChild(card)
    
        })
    })
}
carregar()