import React from 'react'

const Note = (props) => {
    const deleteNote = () => {
        props.deleteItem(props.id)
    }
    return (
        <>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-2 py-2 rounded-lg">
                    <button onClick={deleteNote} className=" border-0 py-0 px-2  rounded text-sm">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
</svg>

                    
                    </button>
                    <h2 className="title-font font-medium text-xl text-gray-900">Title: {props.title}</h2>
                    <p className="leading-relaxed text-justify">Message: {props.message}</p>
                </div>
            </div>
        </>
    )
}

export default Note