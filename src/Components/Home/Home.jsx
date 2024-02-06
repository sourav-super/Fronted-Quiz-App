import React from 'react'
import Question from '../Question/Question'
import data from "../../data.json"
import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"


const Home = () => {

    const [da, setda] = useState([])
    const navigate = useNavigate();
    const handleclick = (p) => {
        console.log(p)
        if (p === "html") {
            // console.log(data[0].html[1].Que)
            setda(data[0].html)
            console.log(data[0].html)
            navigate("/que", { state: { da: data[0].html } })
        } else if (p === "css") {
            console.log(data[0].css)
            setda(data[0].css)
            navigate("/que", { state: { da: data[0].css } })
            // setactive(true)
        } else if (p === "js") {
            console.log(data[0].javascript)
            setda(data[0].javascript)
            navigate("/que", { state: { da: data[0].javascript } })
            // setactive(true)
        } else if (p === "react") {
            console.log(data[0].react)
            setda(data[0].html)
            navigate("/que", { state: { da: data[0].react } })
        }
    }
    return (
        <>
            <div className='lg:flex justify-evenly w-full h-screen text-white bg-slate-950 p-20'>
                <div>
                    <p className='lg:text-5xl text-4xl font-light '>Welcome to the</p>
                    <p className=' lg:text-5xl text-4xl font-semibold py-2 px-2 text-green-500'>Fronted <span className='p-0 text-amber-500'>Quiz</span>!</p>
                    <p className='font-light text-lg px-2 py-4 text-gray-600 '>Pick a subject to get started</p>
                </div>
                <div className='p-0 lg:w-1/2 mt-14 lg:mt-0'>
                    <ul className=' lg:w-3/4 ml-4'>
                        <li className="p-1 hover:bg-fuchsia-800 bg-slate-900 h-14  flex items-center rounded-lg my-3 text-xl font-sans font-semibold text-gray-200" onClick={(e) => { handleclick("html")}}><button className='px-1 font-serif w-11 rounded mr-2 py-1 ml-1 text-orange-700 bg-slate-400  font-bold text-xl'>{`</>`}</button>HTML</li>
                        <li className="p-1 hover:bg-fuchsia-800 bg-slate-900 h-14  flex items-center rounded-lg my-3 text-xl font-sans font-semibold text-gray-200" onClick={(e) => { handleclick("css") }}><button className='px-1 font-serif w-11 py-1 rounded mr-2 ml-1 bg-slate-400 text-purple-700 font-bold text-xl'>cS</button>CSS</li>
                        <li className="p-1 hover:bg-fuchsia-800 bg-slate-900 h-14  flex items-center rounded-lg my-3 text-xl font-sans font-semibold text-gray-200" onClick={(e) => { handleclick("js") }}><button className='px-1  font-serif w-11 py-1 rounded mr-2 ml-1 bg-slate-400 text-indigo-950  font-bold text-xl'>jS</button>JAVASCRIPT</li>
                        <li className="p-1 hover:bg-fuchsia-800 bg-slate-900 h-14  flex items-center rounded-lg my-3 text-xl font-sans font-semibold text-gray-200" onClick={(e) => { handleclick("react") }}><button className='px-1 font-serif w-11 py-1 rounded mr-2 ml-1 bg-slate-400 text-pink-600  font-bold text-xl'>jSx</button>REACT</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Home