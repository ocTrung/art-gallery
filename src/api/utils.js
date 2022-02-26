const BASEURL = 'https://collectionapi.metmuseum.org/public/collection/v1'

export async function searchArt(searchQuery) {
  const url = `${BASEURL}/search?q=${searchQuery}`

  const response = await fetch(url, {
    method: 'GET',
    credentials: 'omit'
  });

  return response.json()
}

export async function getManyArtworkInfo(objectIDs) {
  const url = `${BASEURL}/objects`
  const promises = objectIDs.map(id => getSingleArtworkInfo(url, id))
  const artWorkInfos = await Promise.all(promises)

  return artWorkInfos
}

export async function getSingleArtworkInfo(url, id) {
  return fetch(url + '/' + id, {
    method: 'GET',
    credentials: 'omit'
  })
  .then(res => res.json())
}