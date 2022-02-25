const BASEURL = 'https://collectionapi.metmuseum.org/public/collection/v1'

export async function searchArt(searchQuery) {
  const url = `${BASEURL}/search?q=${searchQuery}`

  const response = await fetch(url, {
    method: 'GET',
    credentials: 'omit'
  });

  return response.json(); // parses JSON response into native JavaScript objects
}