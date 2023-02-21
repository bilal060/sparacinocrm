import React from 'react'
import Search from '../../images/search'
export default function TypeSearch() {
  return (
    <div className="position-relative custom-search-filter w-100">
    <input
      type="text"
      placeholder="Search this board"
      className="w-100"
    />
    <div className="position-absolute custom-search-icon">
      <Search/>
    </div>
  </div>
  )
}
