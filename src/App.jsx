import React, { useState } from 'react'
import ChatBody from './components/ChatBody'
import ChatInput from './components/ChatInput'
import { fetchResponse } from './api';
import { useMutation } from 'react-query';
const App = () => {

  const [chat, setChat] = useState([]);
  const mutation = useMutation({
    mutationFn: () => {
      return fetchResponse(chat);
    },
    onSuccess: (data) => setChat((prev)=>[...prev,{sender:"ai",message:data.message}])
  })
  const sendMessage = async (message) => {
    console.log(message);
    await Promise.resolve(setChat((prev) => [...prev, message]));
    mutation.mutate();
  }

  return (
    <>
      <div className="bg-[#1A232E] h-screen py-6 relative px-12 sm:px-16 text-white overflow-hidden flex flex-col justify-between align-middle">
        <div className="gradient-01 z-0 absolute"></div>
        <div className="gradient-02 z-0 absolute"></div>
        <div className="uppercase font-bold text-2xl text-center mb-3">
          ChATGPT 2.0
        </div>
        <div className="h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 self-center px-4">
          <ChatBody chat={chat} />
        </div>
        <div className="w-full max-w-4xl min-w-[20rem] self-center">
          <ChatInput sendMessage={sendMessage} loading={mutation.isLoading} />
        </div>
      </div>
    </>
  )
}

export default App
