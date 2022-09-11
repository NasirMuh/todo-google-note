import React, { useState } from 'react'

const NCreateNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        message: ""
    })
    const [noshow, setNoShow] = useState(true)
    const [expand, setExpand] = useState(false)

    const InputHandle = (event) => {
        const { name, value } = event.target;
        if (name != "" && value != "") {
            if (note.title.length > -1 && note.message.length > -1) { setNoShow(false) }
            else { setNoShow(true) }
        }
        else { setNoShow(true) }
        setNote((preData) => {
            return {
                ...preData,
                [name]: value
            }
        })

    }
    const AddEvent = () => {
        props.passNote(note)
        setNote({
            title: "",
            message: ""
        })
        setNoShow(true)
        setExpand(false)
    }
    const expandIt = () => {
        setExpand(true)
    }
    const expandOut = () => {
        setExpand(false)
    }
    return (
        <>
            <section className="text-gray-600 body-font ">
                <div className="container px-5 py-5 mx-auto flex">
                    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-3 flex flex-col mx-auto  mt-0 md:mt-0 relative z-10 shadow-md">
                        <div className="relative mb-0">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            {expand ?
                                <input name="title" value={note.title} onChange={InputHandle} placeholder="Title" type="text" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                : null
                            }
                            <textarea name="message" onDoubleClick={expandOut} onClick={expandIt} value={note.message} onChange={InputHandle} placeholder="Write Something here..." className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            {expand ?
                                <button disabled={noshow} onClick={AddEvent} className=" -mb-8 disabled:bg-slate-400 float-right rounded-full text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg">+</button>
                                : null
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NCreateNote