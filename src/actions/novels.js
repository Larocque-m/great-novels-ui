import axios from 'axios'

const fetchData = async () => {
  const { data } = await axios.get('http://localhost:1337/api/novels/')

  return data
}

export default fetchData
