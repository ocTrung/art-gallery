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
  const promises = objectIDs.map(id => getSingleArtworkInfo(id))
  const artWorkInfos = await Promise.all(promises)

  return artWorkInfos
}

export async function getSingleArtworkInfo(id) {
  const url = `${BASEURL}/objects`

  const response = await fetch(url + '/' + id, {
    method: 'GET',
    credentials: 'omit'
  })
  console.log(response)
  return response.json()
}