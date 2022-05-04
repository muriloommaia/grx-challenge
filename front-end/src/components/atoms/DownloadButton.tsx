import React from 'react'

export default function DownloadButton() {
  return (
    <div>
      <a target={'_blank'} href="http://localhost:3001/download/form" download rel="noreferrer">
        <button>Download</button>
      </a>
    </div>
  )
}
