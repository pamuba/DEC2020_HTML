const GRAPHQL_URL = 'http://localhost:9000/'

async function fetchGreeting(){
    //fetch is async
    const response = await fetch(GRAPHQL_URL, {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify({
            query:`
            {
                greeting
            }
            `
        })
    });
    //parse the response as JSON
    const {data} = await response.json();
    return data;
}
fetchGreeting().then(({greeting}) => {
    const title = document.querySelector('h1');
    title.textContent = greeting
})