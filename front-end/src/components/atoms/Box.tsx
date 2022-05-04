import React from 'react'

type props = {
  name: string,
  value: number,
}

export default function Box({ name, value }: props) {
  return (
    <div>
      <div>
        {`${name}: ${value}`}
      </div>
    </div>
  )
}
