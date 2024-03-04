document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://dattebayo-api.onrender.com/characters';
    const personsAnimeElement = document.getElementById('persons-anime');

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .then(charactersObject => {
            console.log('Resposta da API:', charactersObject);

            if (typeof charactersObject === 'object' && charactersObject !== null) {
                Object.entries(charactersObject).forEach(([characterKey, character]) => {
                    console.log('Personagem:', character);

                    const personElement = document.createElement('div');
                    personElement.classList.add('person');
                    personElement.innerHTML = `
                        <img src="${character.image}" alt="${character.name}">
                        <h2>${character.name}</h2>
                        <p>${character.description}</p>
                    `;

                    personsAnimeElement.appendChild(personElement);
                });
            } else {
                console.error('A resposta da API não é um objeto:', charactersObject);
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
