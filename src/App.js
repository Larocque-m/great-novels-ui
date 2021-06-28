import React, { useState, useEffect } from 'react';
import './App.css';
import Novel from './components/novel'
import { fetchData, filtered } from './utils/novels' 

function App() {

  const [novelData, setNovelData] = useState([])
  const [filteredNovels, setFilteredNovels] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function pullData() {

      const data = await fetchData()

      setNovelData(data)
      setFilteredNovels(data)
    }

    pullData()
  },[])

  useEffect(() => {
    
    const novels = filtered(novelData, searchTerm)

    setFilteredNovels(novels)
  }, [searchTerm, novelData])


  return (
    <div className="App">
      <Novel
      novelDataAsProps={filteredNovels}
      setSearchTerm={setSearchTerm}
      />
    </div>
  )
}

export default App
