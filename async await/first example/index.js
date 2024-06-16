function bestRoomMate(roomMate) { // criei a função melhorColegaDeQuarto
    return new Promise((resolve, reject) => { // essa função retorna uma promise contendo 2 parametros
        if (roomMate == 'Piccolo') { // se colega de quarto for Piccolo
            resolve({ //passamos os objetos da função resolve
                better: true,
                bestMate: roomMate,
                msg: roomMate + ' é o melhor colega de quarto'
            });
        } else { // se colega de quarto não for Piccolo
            reject ({ // passamos os objetos da função reject
                better: false,
                msg: roomMate + ' não é o melhor colega de quarto'
            });
        }
    })
}

function smarterRoomMate(response) { // criamos a função colegaDeQuartoMaisEsperto, essa função tem como parâmetro a response passsada
    return new Promise((resolve, reject) => { // essa funão retorna uma promise contendo 2 parametros
        if (response.better) { // se response.better for true
            resolve('Mas o colega de quarto mais esperto é o Brandão, não o ' + response.bestMate); //
        } else { // se response.better for false
            reject('Quer dizer que roomMate não é Piccolo');
        }
    });
}

// Código sem await / Async

/* bestRoomMate('Piccolo') // chamando a função melhorColegaDeQuarto e passando Piccolo como parâmetro
    .then(response => { // "então" essa função retorna uma outra função com a response como parâmetro
        return smarterRoomMate(response); 
    })
    .then(response => { //"então" chama o melhor colega de quarto
        console.log('Procurando o melhor colega de quarto...');
        console.log(response);
    })
    .catch(err => { // tratar erros
        console.log(err.msg);   
    }) */

// Código com await e async

async function doTheJob() {
    try {
        const bestRoomMateResponse = await bestRoomMate('Piccolo');
        console.log(bestRoomMateResponse.msg);
        const smarterRoomMateResponse = await smarterRoomMate(bestRoomMateResponse);
        console.log(smarterRoomMateResponse);
    } catch (err) {
        console.log(err.msg);
    }
}
doTheJob();