
'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';

interface Meme {
    id: string;
    name: string;
    url: string;
    width: number;
    height: number;
    box_count: number;
}

function Creatememe({ searchParams }: { searchParams: { id: string; url: string } }) {
    const [meme, setMeme] = useState<string | null>(searchParams.url) 
    const [inputValues, setInputValues] = useState<string[]>([])
    const [boxCount, setBoxCount] = useState<number>(0) 

    
    useEffect(() => {
        const fetchTemplateInfo = async () => {
            const response = await fetch(`https://api.imgflip.com/get_memes`)
            const data = await response.json()
             const memeTemplate = data.data.memes.find((meme: Meme ) => meme.id === searchParams.id)
            
            if (memeTemplate) {
                setBoxCount(memeTemplate.box_count)
                setInputValues(new Array(memeTemplate.box_count).fill('')) 
            }
        }
        fetchTemplateInfo()
    }, [searchParams.id])

    const handleChange = (index: number, value: string) => {
        const newInputValues = [...inputValues]
        newInputValues[index] = value
        setInputValues(newInputValues)
    }

    const createMeme = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const params = inputValues.map((val, i) => `text${i}=${encodeURIComponent(val)}`).join('&')

        const response = await fetch(
            `https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=msameer&password=sameer@123&${params}`,
            { method: 'POST' }
        )

        const data = await response.json()
        if (data.success) {
            setMeme(data.data.url) 
        } else {
            console.error('Error creating meme:', data.error_message)
        }
    }

    return (
        <div className="pb-10">
            <h1 className="text-center text-5xl p-5 bg-slate-200 mb-5 text-white font-semibold">Create Meme</h1>
            <div className="flex justify-center">
                {meme ? <Image src={meme} width={300} height={300} alt="meme" /> : null}
            </div>

            <form onSubmit={createMeme} className="pt-5 max-w-md mx-auto">
                {[...Array(boxCount)].map((_, index) => (
                    <div key={index} className="relative mb-4">
                        <input
                            type="text"
                            value={inputValues[index] || ''}
                            onChange={(e) => handleChange(index, e.target.value)}
                            placeholder={`Enter Text ${index + 1}...`}
                            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                            required
                        />
                    </div>
                ))}

                <div className="text-center">
                    <button
                        type="submit"
                        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                        Create Meme
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Creatememe

