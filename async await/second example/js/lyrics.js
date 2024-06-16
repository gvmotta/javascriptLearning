    function findLyrics(artist, song) { // criei uma função que leva como parametro artista e som
        return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`); // essa função faz uma requisição para a API de letras de músicas
    }   

const form = document.querySelector('#lyrics_form'); // peguei o objeto com este id do html e submeti para a constante form
form.addEventListener('submit', el => { // ouvimos o evento submit do button do form, então a função el acontece 
    el.preventDefault(); // cancelei o comportamento submit default
    doSubmit();
})

async function doSubmit() { // criando a função submit
    const lyrics_el = document.querySelector('#lyrics'); // peguei o <pre> onde vai aparecer as letras da música
    const artist = document.querySelector('#artist'); // peguei o input name artista
    const song = document.querySelector('#song'); // peguei o input name do song

    lyrics_el.innerHTML = '<div class="spinner-grow" role="status"><span class="sr-only">Carregando...</span></div>'; // adicionei o spinner pós submit do button
    /* usando then
    findLyrics(artist.value, song.value) // chamei a função lá do início passando como parametros o valor de artist e song
        .then(response => response.json()) // transforma a resposta em json
        .then(data => { 
            if (data.lyrics) { // se data.lyrics existe, adiciono no html do <pre> a letra da musica
                lyrics_el.innerHTML = data.lyrics;
            } else { // se não, retorno data.error
                lyrics_el.innerHTML = data.error;
            }
        })
        .catch(err => { // capta erros
            lyrics_el.innerHTML = `Oops! ${err}`;
        })
    */

    // usando async await (async usado no começo da função doSubmit)
    try {
        const lyricsResponse = await findLyrics(artist.value, song.value); // pego a response e coloco em uma constante
        const data = await lyricsResponse.json(); // pego o json da constante anterior somente
        if (data.lyrics) { // se lyrics existir na response
            lyrics_el.innerHTML = data.lyrics;
        } else { // se não
            lyrics_el.innerHTML = data.error;
        }
    } catch (err) {
        console.log(err);
    }
    
}