// 'use client'

// import React, { useRef, useState } from 'react'
// import Image from 'next/image';

// function Creatememe({searchParams}: {searchParams: {id: string; url: string}}) {
//     const [meme , setMeme] =  useState<string | null>(null)
//     const text1= useRef<HTMLInputElement>(null)
//     const text2= useRef<HTMLInputElement>(null)
//     const text3= useRef<HTMLInputElement>(null)
//     const text4= useRef<HTMLInputElement>(null)
//     const createMeme =async(event: React.FormEvent<HTMLFormElement>)=>{
//         event.preventDefault()
//         console.log(text1.current?.value);
//         console.log(text2.current?.value);
//         console.log(text3.current?.value);
//         console.log(text4.current?.value);
//         const data = await fetch(`https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=msameer&password=sameer@123&text0=${text1.current?.value}&text1=${text1.current?.value}&text2=${text3.current?.value}&text3=${text4.current?.value}`
//              , {
//             method: 'POST'
//         })
//         const response = await data.json()
//         console.log(response)
//         setMeme(response.data.url)
//     }
//   return (
//     <div className='pb-10' >
//         <h1  className="text-center text-5xl p-5 bg-slate-200 mb-5 text-white font-semibold">CreateMeme</h1>
//         <div className=' gap-5 justify-center flex text-center'>
//         <Image  src={searchParams.url} width={300} height={300} alt='meme'/> 
//         {meme ? <Image src={meme} width={300} height={300} alt='meme'/> : null}
//         </div>


    
// <form onSubmit={createMeme} className=" pt-5 max-w-md mx-auto">   
//     <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
//     <div className="relative">
//         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//             <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//             </svg>
//         </div>
//         <input ref={text1} type="text" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Text 1..." required />
//     </div>

// <br />
      
//     <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
//     <div className="relative">
//         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//             <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//             </svg>
//         </div>
//         <input ref={text2} type="text" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Text 2..." required />
//     </div>

// <br />
  
//     <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
//     <div className="relative">
//         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//             <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//             </svg>
//         </div>
//         <input ref={text3} type="text" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Text 3..." required />
//     </div>

// <br />
     
//     <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
//     <div className="relative">
//         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//             <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//             </svg>
//         </div>
//         <input ref={text4} type="text" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Text 4..." required />
//     </div>

// <br />

//     <div className='text-center'>

//     <button  type="submit" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >
//     Create Meme
//    </button>
//     </div>
// </form>

        
//     </div>
//   )
// }


// export default Creatememe



'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';

function Creatememe({ searchParams }: { searchParams: { id: string; url: string } }) {
    const [meme, setMeme] = useState<string | null>(searchParams.url) 
    const [inputValues, setInputValues] = useState<string[]>([])
    const [boxCount, setBoxCount] = useState<number>(0) 

    
    useEffect(() => {
        const fetchTemplateInfo = async () => {
            const response = await fetch(`https://api.imgflip.com/get_memes`)
            const data = await response.json()
            const memeTemplate = data.data.memes.find((meme: any) => meme.id === searchParams.id)

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

