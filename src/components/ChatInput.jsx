import React, { useState } from 'react'

const ChatInput = ({ sendMessage, loading }) => {
    const [value, setValue] = useState("");
    const HandleSubmit = () => {
        if (value === '') return;
        console.log(value);
        sendMessage({ sender: 'user', message: value });
        setValue("");
    }
    return (
        <div className='w-full bg-white bg-opacity-10 max-h-40 rounded-lg p-4 overflow-auto relative'>
            {
                loading ?
                    <img src="./loader.gif" className='w-8 m-auto' alt="" />
                    : <>            <textarea
                        onChange={(e) => setValue(e.target.value)}
                        className='border-0  bg-transparent outline-none w-11/12'
                        value={value}
                        rows={1}
                        onKeyDown={(e) => {
                            e.keyCode == 13 && e.shiftKey === false && HandleSubmit();
                        }}
                    >

                    </textarea>
                        <img
                            className='absolute top-4 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125'
                            width={20}
                            src="./send.png"
                            alt="Send"
                            onClick={HandleSubmit}

                        />
                    </>}
            ;
        </div>
    )
}

export default ChatInput
