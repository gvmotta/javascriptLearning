const axios = require('axios');

// usando Promises
const loginUser = (email, password) => { // criamos uma função com 2 parâmetros, o email e o password
    return new Promise((resolve, reject) => { // essa função retorna uma promise contendo um resolve e um reject
        const error = false; // simulamos comportamento de erro de uma API
        if (error) { // se tiver erro
            reject(new Error('error on login')); // retorna um erro no reject
        }
        console.log("user logged"); 
        resolve({ email }); // retorna o objeto desestruturado email como resolve
    })
}

const getUserVideos = (email) => { // criei a função getUserVidoes, com 2 parâmetros, o email e os vídeos
    return new Promise((resolve, reject) => {
        setTimeout(() => { // simulei comportamento de uma API
            resolve(['video1', 'video2', 'video3']); // passei como parâmetro do callback, uma lista simulando 3 vídeos
        }, 2000);
    })
}

const getVideoDetails = (video) => { // criei uma função que tem como parâmetros os videos
    return new Promise((resolve, reject) => { // essa funçaõ retorna uma promise com resolve e reject como parâmetros
        setTimeout(() => {
            resolve({ title: "video title" }); // no resolve, ela retorna o título do vídeo
        }, 2500);
    })
}

/* loginUser('gustavomotta@gmail.com', '1234567') // chamamos a função loginUserPromise e passamos um email e um password
    .then((user) => { // e então pegamos o retorno e chamamos de user
        console.log({ user }) // imprimimos o retorno user
        return getUserVideos(user.email);
    }).then((videos) => {
        console.log({ videos });
        return getVideoDetails(videos[0]);
    }).then((videoDetail) => {
        console.log({ videoDetail });
    }).catch((error) => { // para tratarmos o erro, utilizamos um catch, chamando de error o retorno da função loginUserPromise
        console.log(error); // imprimimos o erro
    }) */

// Promise all - serve para executar 2 ou mais promises de uma vez 
/* const yt = new Promise(resolve => { // criamos uma variável que é uma promise com parâmetro resolve
    setTimeout (() => {
        resolve('videos from youtube'); // essa variavel tem apenas uma string
    }, 2000)
})

const fb = new Promise ((resolve) => { // criamos outra variável com uma promise com apenas 1 resolve
    setTimeout(() => {
        resolve('posts from facebook'); // esse resolve retorna uma outra string
    }, 3000)
})

Promise.all([yt, fb]) // esta é a forma de executar +1 promises de uma só vez, encadeando o nome das promises em uma lista com Promises.all
    .then((result) => console.log(result)); */

// Usando async / await



// usando callbacks 

/* const user = loginUser("gustavomotta@gmail.com", "123456", 
    (user) => { // criei uma constante user passando os parâmetros de email, password e o retorno do callback da função em questão
        console.log({ user }); // damos print no objeto user desestruturado
        getUserVideos(user.email, (videos) => { // chamamos a função getUserVideos passando como parâmetro o email que já vem do objeto user, e os vídeos que viram videos que é um objeto do tipo callback, ou seja, que viram da própria função
            console.log({ videos });
            getVideoDetails(videos[0], (details) => {
                console.log({ details });
            })
        })
    }, 
    (error) => {
        console.log(error);
}); */

/* const loginUser = (email, password, onSuccess, onError) => { // função loginUser criada com 3 parametros
    setTimeout(() => { // setTimeout simulando comportamento de API
        const error = false;
        if (error) {
            return onError(new Error('error on login'));
        }
        console.log("user logged!"); // após setTimeout diz user logged
        onSuccess({ email }) // passamos o objeto email desetruturado para o parâmetro callback
    }, 1500); // demora 1,5s para os códigos dentro do setTimeout serem executados
} */

/* const getUserVideos = (email, callback) => { // criei a função getUserVidoes, com 2 parâmetros, o email e os vídeos
    setTimeout(() => { // simulei comportamento de uma API
        callback(['video1', 'video2', 'video3']); // passei como parâmetro do callback, uma lista simulando 3 vídeos
    }, 2000);
}

const getVideoDetails = (video, callback) => {
    setTimeout(() => {
        callback({ title: "video title" });
    }, 2500);
} */

// consumindo promises com async/await

const displayUser = async () => {
    try {
        const user = await loginUser('gustavomotta@gmail.com', '123456'); // nesta linha, basicamente o resolve da Promise irá ficar alocado na variável user
        const videos = await getUserVideos(user.email);
        const videosDetails = await getVideoDetails(videos[0]);

        console.log({ user, videos, videosDetails });
    } catch (error) {
        console.log(error)
    }
}
/* displayUser(); */

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then ((response) => console.log({ data: response.data }))
    .catch((error) => console.log(error));

const fetchApi = async () => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1') // forma mais inteligente de pegar apenas o objeto data da response
    } catch (error) {
        console.log(error);
    }
}