import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'
import Box from '../atoms/Box'

export default function Result() {
  const [data, setData] = useState<[string, number][]>([])
  const { response } = useSelector((state: RootState) => state)

  useEffect(() => {
    const entries = Object.entries(response)
    const sorted = entries.sort((a, b) => b[1] - a[1])
    setData(sorted)
  }, [])
  return (
    <div>
      {data.map((entry) => {
        const [key, value] = entry
        if (key.includes('positive')) {
          return (<Box key={key} name={'Positiva'} value={value} />)
        } else if (key.includes('negative')) {
          return (<Box key={key} name={'Negativa'} value={value} />)
        } else {
          return (<Box key={key} name={'Não Avaliada'} value={value} />)
        }
      })}
    </div>
  )
}
