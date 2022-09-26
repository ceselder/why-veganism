import React from 'react'
import { citations } from '../pages'

export default function Citation({citation, children}) {
  return (
    <a className='underline text-gray-400' href={citations.get(citation)}>{children}</a>
  )
}
