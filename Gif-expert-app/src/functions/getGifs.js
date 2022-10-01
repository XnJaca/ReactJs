export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=dGjdv5yQbVmHC0mzIWUr4cabZGgaRWCF&q=${category}&limit=12`;
  const resp = await fetch(url);

  const { data } = await resp.json();

  const gifs = data.map( (img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  console.log( gifs);
  return gifs;
};

export default getGifs;
