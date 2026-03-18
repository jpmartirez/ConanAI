
import React from 'react'

const Homepage = () => {
  return (
    <div>
      {/* Text areas */}
      <div className='flex items-center justify-center gap-5'>
          <textarea placeholder="Paste your text here..." className="textarea textarea-primary max-w-lg w-full h-64 shadow-lg" maxLength={1000}></textarea>
          <textarea placeholder="Humanized output..." className="textarea textarea-primary max-w-lg w-full h-64 shadow-lg" disabled></textarea>
      </div>
    </div>
  )
}

export default Homepage