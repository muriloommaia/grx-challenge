import React from 'react'

type props = {
  name: string,
  value: number,
}

export default function Box({ name, value }: props) {
  return (
    <div
      className='min-w-[70%] m-auto flex justify-center py-1 border-2 border-black my-1 bg-slate-50 rounded-md'
    >
      <div>
        {`${name}: ${value}`}
      </div>
    </div>
  )
}
