

const Button = ({ id, title, containerClass, rightIcon, leftIcon }) => {
    return (
        <button
        id={id}
        className={`${containerClass ? containerClass : 'bg-violet-50'} group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black`}
        >
            {leftIcon}
            <span className="relative inline-flex overflow-hidden font-general text-sm uppercase">
                <div>
                    {title}
                </div>
            </span>

            {rightIcon}
        </button>
    )
}

export default Button