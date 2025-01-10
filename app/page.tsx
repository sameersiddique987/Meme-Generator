import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Meme {
  id: string;
  url: string;
  name: string;
  box_count: number;
  captions: number;
}

async function page() {
  const data = await fetch("https://api.imgflip.com/get_memes", {
    cache: "no-store",
  });
  const response = await data.json();

  console.log(response.data.memes);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl p-5 bg-slate-200 mb-5 text-white font-semibold w-full mt-5 animate-bounce">
        <span className="text-5xl">😀</span>Meme Generator App
      </h1>

      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-5 w-full">
        {response.data.memes
          .filter((item: Meme) => item.box_count === 2)
          .map((item: Meme) => (
            <div
              key={item.id}
              className="bg-slate-50 border rounded-lg p-4 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg cursor-pointer"
            >
              <div className="w-full h-52 overflow-hidden">
                <Image
                  src={item.url}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>

              <h2 className="text-center font-semibold mt-2 text-base md:text-lg lg:text-xl">
                {item.name}
              </h2>

              <div className="text-center p-5">
                <Link
                  href={{
                    pathname: "creatememe",
                    query: {
                      id: item.id,
                      url: item.url,
                      name: item.name,
                      box_count: item.box_count,
                      captions: item.captions,
                    },
                  }}
                >
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                  >
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default page;
