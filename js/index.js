
const personsAnimeElement = document.getElementById('persons-anime');

document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://dattebayo-api.onrender.com/characters';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log('Resposta da API:', data);

            if (data && data.characters && Array.isArray(data.characters)) {
                getCharacter(data.characters);
            } else {
                throw new Error('Resposta da API inválida');
            }
        })
        .catch(error => {
            console.error('Erro ao obter personagens:', error);
        });
        window.addEventListener('scroll', function () {
            let header = document.querySelector('#header');
            header.classList.toggle('scroll', window.scrollY > 100);
        });
        
});

function getCharacter(characters) {
    const containerAnime = document.getElementById('persons-anime');
    containerAnime.innerHTML = '';

    try {
        characters.forEach((character) => {
            const divCharacters = document.createElement('div');

            divCharacters.innerHTML = `
                <div class='containerCharacter'>
                    <img src="${character.images[0]}" alt="${character.name} "/>
                    <div class='btn-box-info'>
                        <p>${character.name}</p>
                        <p>${character.debut }</p>
                        <button>Ver mais</button>
                    </div>
                </div>
            `;
        
            containerAnime.appendChild(divCharacters);

            console.log('Dados dentro do forEach:', character);
        });
    } catch (err) {
        console.error("Error detectado: ", err);
    }
    console.log("Outros dados", characters);
}
