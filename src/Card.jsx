import React from 'react'

const Card = (props) => {
    return (
        <div className='bg-cyan-400 inline-block rounded-lg p-4 m-2 hover:scale-105 drop-shadow-lg border-[.25rem] border-cyan-600 text-center'>
            <img src={"https://robohash.org/" + (props.id ?? "digiface") + "?set=set2&size=200x200"} alt="digiface" />
            <div>
                <h2 className='text-xl font-bold'>{props.name ?? "Your Name"}</h2>
                <p>{props.email ?? "some.email@digibook.com"}</p>
            </div>
        </div>
    )
}

export default Card