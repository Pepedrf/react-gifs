export const getGifs = async(categoria)=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=3Fi99TnLuLA72tasVM0nfi4ggwfWgrQC&q=${categoria}&limit=8`
    const resp = await fetch (url);
    const { data } = await resp.json();

    const gifs = data.map( img=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
        
    }));

    return gifs;
}