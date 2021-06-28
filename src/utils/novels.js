import fetchApiData from '../actions/novels'

export const fetchData = async () => {
  const data = await fetchApiData()

  return data
}

export const filtered = (novelData, searchTerm) => novelData.filter(novel => {
  return novel.title.toLowerCase().includes(searchTerm.toLowerCase())
})