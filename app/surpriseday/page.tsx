'use client'
import Image from 'next/image'
import { Button } from '../../components/button'
import { generateTags } from '@/functions/generateTags'
import { useState } from 'react'

export default function Home() {

  const [day, setDay] = useState<Array<string>>([])

  const generateDay = async () => {
   const reply =  await generateTags('test')
   if(reply.length > 0){
    setDay(reply)
   }

   throw new Error('No reply found')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button title={"Generate day"} onClick={generateDay}/>
      {day.length > 0 && <div>{day.map((entry, idx) => <p key ={idx}>{entry}</p>)}</div>}
    </main>
  )
}
