const API_KEY = process.env.GIPHY_API_KEY;

export async function getGifUrl(topic: string): Promise<string> {
    if (topic == '') return Promise.reject(`You gotta enter a topic fam`);
    const API_URL = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${topic}`;

    return fetch(API_URL, { mode: 'cors' })
        .then(function getJSONResponse(response) {
            return response.json();
        })
        .then(function returnURL(JSONResponse) {
            return JSONResponse.data.images.original.url as string;
        })
        .catch(function (error) {
            return Promise.reject(
                `Gif with topic ${topic} unavailable, error thrown => ${error}`,
            );
        });
}
