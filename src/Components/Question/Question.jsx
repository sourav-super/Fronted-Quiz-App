import React from 'react'
import { useState, useEffect } from "react"
import { useLocation, useNavigate } from 'react-router-dom'

const Question = () => {

    const navigate = useNavigate()
    const location = useLocation();
    console.log(location.state)
    const [obj, setobj] = useState(location.state.da)
    const [index, setindex] = useState(1);
    const [nextbtnenable, setnextbtnenable] = useState(false)
    const [show, setshow] = useState(false)
    const [submitBtnEnable, setsubmitBtnEnable] = useState(false)
    const [submitAlertShow, setsubmitAlertShow] = useState(false)
    const [ans, setans] = useState([])
    const [opt, setopt] = useState({ a: false, b: false, c: false, d: false })
    const [que, setque] = useState(location.state.da[index].Que)
    const [opta, setopta] = useState(location.state.da[index].A)
    const [optb, setoptb] = useState(location.state.da[index].B)
    const [optc, setoptc] = useState(location.state.da[index].C)
    const [optd, setoptd] = useState(location.state.da[index].D)
    const [select, setselect] = useState("");
    useEffect(() => {

    }, [])
    const change = (e) => {
        if (nextbtnenable) {
            setindex(index + 1)
            //result
            console.log(location.state.da)
            if (index > 9) {
                navigate("/result", { state: { obj: obj } })
            }
            setnextbtnenable(false)
            setshow(false)
            setsubmitBtnEnable(false)
        } else {
            setshow(true)
        }

    }
    useEffect(() => {
        setque(location.state.da[index].Que)
        setopta(location.state.da[index].A)
        setoptb(location.state.da[index].B)
        setoptc(location.state.da[index].C)
        setoptd(location.state.da[index].D)
    }, [change])

    const handleclick = (e, p) => {
        if (p === "A") {
            setopt((Popt) => {
                return { ...Popt, a: true, b: false, c: false, d: false }
            })
        } else if (p === "B") {
            setopt((Popt) => {
                return { ...Popt, a: false, b: true, c: false, d: false }
            })
        } else if (p === "C") {
            setopt((Popt) => {
                return { ...Popt, a: false, b: false, c: true, d: false }
            })
        } else if (p === "D") {
            setopt((Popt) => {
                return { ...Popt, a: false, b: false, c: false, d: true }
            })
        }
        setselect(e.target.innerText.slice(2))
        setsubmitBtnEnable(true)
        setsubmitAlertShow(false)


    }


    const submitans = () => {
        if (submitBtnEnable) {
            setans((ans) => {
                return [...ans, select]
            })
            setnextbtnenable(true)
            setshow(false)
        } else {
            setsubmitAlertShow(true)
        }
    }
    useEffect(() => {
        if (ans.length == 10) {
            localStorage.setItem("data", ans)
        }
    }, [change])


    useEffect(() => {
        setopt({ a: false, b: false, c: false, d: false })
    }, [index])

    //result 
    return (
        <>
            <div className='bg-slate-950 h-screen lg:flex text-white items-start w-full  mx-auto p-20 '>
                <div className='p-0 flex h-10 -mt-10 lg:-mt-14 mb-5'>
                    <div className=' w-5 h-5 bg-orange-600 mr-2 mt-2 rounded-xl'></div>
                    <div className='text-3xl font-light font-mono '>{location.state.da[0].name.toUpperCase()}</div>
                </div>
                <div className='w-full lg:w1/2 lg:px-7 h-64 flex flex-col lg:justify-between lg:-ml-20'>
                    <ul className='p-0 '>
                        <li className='p-0 text-slate-500 font-medium text-2xl   font-serif'>Question {index} of 10</li>
                        <li className='mt-4 md:mb-7 text-2xl font-semibold font-serif'>{que}</li>

                    </ul>
                    <div className=''>
                        <input type='range' className='rounded bg-purple-950 w-3/4 h-2 appearance-none' min="0" max="10" value={index} onChange={(e) => e.target.value} />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <ul className='p-0  '>
                        <li className={opt.a ? "p-1 bg-purple-900 h-14  flex items-center rounded lg:my-1 my-3" : "p-2 bg-slate-800 my-3 h-14 flex items-center  rounded-lg lg:my-1"} onClick={(e) => handleclick(e, "A")}><button className='px-2 rounded mr-2 text-black bg-slate-400'>A</button>{opta}</li>
                        <li className={opt.b ? "p-1 bg-purple-900 h-14  flex items-center rounded lg:my-1 my-3" : "p-2 bg-slate-800 my-3 h-14 flex items-center  rounded-lg lg:my-1"} onClick={(e) => handleclick(e, "B")}><button className='px-2 rounded mr-2 text-black bg-slate-400'>B</button>{optb}</li>
                        <li className={opt.c ? "p-1 bg-purple-900 h-14  flex items-center rounded lg:my-1 my-3" : "p-2 bg-slate-800 my-3 h-14 flex items-center  rounded-lg lg:my-1"} onClick={(e) => handleclick(e, "C")}><button className='px-2 rounded mr-2 text-black bg-slate-400'>C</button>{optc}</li>
                        <li className={opt.d ? "p-1 bg-purple-900 h-14  flex items-center rounded lg:my-1 my-3" : "p-2 bg-slate-800 my-3 h-14 flex items-center  rounded-lg lg:my-1"} onClick={(e) => handleclick(e, "D")}><button className='px-2 rounded mr-2 text-black bg-slate-400'>D</button>{optd}</li>
                        <li className={"hover:bg-green-600 hover:text-slate-950 hover:font-medium hover:text-lg bg-green-800 hover:rounded-xl hover:transition-shadow font-serif h-14  flex items-center  rounded my-5 text-center"} onClick={submitans}><button className="mx-auto ">Submit answer</button></li>
                    </ul>
                    <span className={submitAlertShow ? "block w-1/2 text-sm  bg-red-500 text-black font-serif p-3 m-2 font-semibold rounded-3xl" : "hidden"}>Please Choose option</span>
                    <div className='flex justify-end '>
                        <button className='px-8 py-2 rounded bg-pink-900 hover:bg-pink-600 hover:translate-x-0 hover:text-black hover:font-semibold' onClick={change}>Next</button>

                    </div>
                    <div className='flex justify-end'>
                        <p className={show ? "block bg-red-900 text-black font-serif p-3 m-2 font-semibold rounded-3xl" : "hidden"}>**First you sumbit  answer</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Question