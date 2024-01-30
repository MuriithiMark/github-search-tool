import { useState } from 'react'
import "./index.css";

const SearchComponent = ({onSearch}) => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (event) => {
    setSearchText(event.target.value);
  }

  const handleSearch = () => {
    onSearch(searchText);
    console.log(searchText)

    setSearchText("");
  }
  return (
    <div className='search-component'>
      <input type="text" value={searchText} onChange={handleChange} />
      <button onClick={handleSearch}>Search Github User</button>
    </div>
  )
}

export default SearchComponent