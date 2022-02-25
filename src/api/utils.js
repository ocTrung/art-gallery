const BASEURL = 'https://collectionapi.metmuseum.org/public/collection/v1'

export async function searchArt(searchQuery) {
  const url = `${BASEURL}/search?q=${searchQuery}`

  const response = await fetch(url, {
    method: 'GET',
    credentials: 'omit'
  });

  return response.json(); // parses JSON response into native JavaScript objects
}

export async function getArtworksInfo(objectIDs) {
  const url = `${BASEURL}/objects`

  async function getSingleArtworkInfo(id) {
      return fetch(url + '/' + id, {
        method: 'GET',
        credentials: 'omit'
      })
      .then(res => res.json())
  }
  
  const promises = objectIDs.map(id => getSingleArtworkInfo(id))
  const artWorkInfos = await Promise.all(promises)

  return artWorkInfos
}