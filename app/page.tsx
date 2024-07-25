"use client"
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [buttonText, setButtonText] = useState<string>('Submit')

  const handleAddTicket = () => {
    fetch(process.env.NEXT_PUBLIC_APP_URL + 'api/tickets', {
      method: 'POST',
      body: JSON.stringify({ name, email, description })
    }).then(res => {
      return res.json()
    }).then(data => {
      if (data === 'OK') {
        setButtonText('Request Received')
      }
    }).catch(reason => {
      console.log(reason)
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-white text-black">
      <div className="w-full justify-center text-xl font-bold flex mb-[40px]">Submit a Support Request</div>
      <div className="text-xl flex w-[50%] min-w-[350px]">Name:</div>
      <input className="px-[10px] min-w-[350px] h-[40px] rounded w-[50%] border-black border-[1px] mb-[40px] outline-none" value={name}
        onChange={e => setName(e.target.value)} />
      <div className="text-xl flex w-[50%] min-w-[350px]">Email:</div>
      <input className="px-[10px] min-w-[350px] h-[40px] rounded w-[50%] border-black border-[1px] mb-[40px] outline-none" value={email}
        onChange={e => setEmail(e.target.value)} />
      <div className="text-xl flex w-[50%] min-w-[350px]">Description of Issue:</div>
      <textarea className="px-[10px] min-w-[350px] h-[200px] rounded w-[50%] border-black border-[1px] mb-[40px] outline-none" value={description}
        onChange={e => setDescription(e.target.value)} />
      <button onClick={handleAddTicket}
        className="bg-blue-200 w-[50%] min-w-[350px] flex justify-center text-nowrap px-[10px] py-[10px] rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
        disabled={[name, email, description].some(val => val.trim() === "" || buttonText !== 'Submit')}>{buttonText}</button>
    </main>
  );
}
