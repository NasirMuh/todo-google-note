import React, { useState } from 'react'
import NCreateNote from './NCreateNote'
import Note from './Note'

const NoteGoogle = () => {
    const [addItem, setAddItem] = useState([])
    const AddNote = (note) => {
        setAddItem((predata) => {
            return [...predata, note]
        })
    }
    const OnDelete = (id) => {
        const olddata = addItem.filter((vals, indx) => {
            return indx !== id;
        })
        setAddItem(olddata)
    }

    return (
        <>
            <NCreateNote passNote={AddNote} />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-2">
                    <div className="flex flex-wrap mb-20 -m-4">
                        {addItem.map((val, inx) => {
                            return (<Note key={inx}
                                id={inx}
                                title={val.title}
                                message={val.message}
                                deleteItem={OnDelete}
                            />);
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default NoteGoogle