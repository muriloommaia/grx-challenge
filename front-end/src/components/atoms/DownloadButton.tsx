import React from 'react'

export default function DownloadButton() {
  return (
    <div className='flex flex-col items-center'>
      <a

        target={'_blank'}
        href="http://localhost:3001/download/form"
        download rel="noreferrer">
        <button
          className='relative p-3 bg-slate-400 mt-2 border-2 border-white rounded-md bottom-0'
        >
          Visualizar Formulários
        </button>
      </a>
      <p className='text-white text-xs'>
        *Botão criado apenas para facilitar a visualização*
      </p>
    </div>
  )
}
