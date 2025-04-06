'use client'

function Button ({text, onClick}) {

    return (
        <div className="text-sm text-center w-auto inline-block px-4 py-2 rounded-xl bg-white text-black hover:bg-teal-200 border-teal-200 border-1 transition">
            <button onClick={onClick}> {text} </button>
        </div>
    )
}

export default Button