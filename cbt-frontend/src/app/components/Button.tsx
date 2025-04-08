'use client'

function Button ({text, onClick}) {

    return (
        <div className="text-sm text-center w-auto inline-block px-4 py-2 rounded-xl">
            <button 
                className="
                rounded-md h-12 px-4 py-2 text-sm font-medium shadow-sm
                border border-[var(--color-soft-gray)] 
                bg-[var(--color-blue)] text-[var(--color-text-primary)]
                hover:bg-[var(--color-button)] 
                transition-colors duration-200"
                onClick={onClick}> {text}
            </button>
        </div>
    )
}

export default Button