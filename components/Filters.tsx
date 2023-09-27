"use client"
import React from 'react'

const links = ['all', 'Next 13', 'Frontend', 'Backend', 'Fullstack', 'DevOps', 'Design', 'Mobile', 'Data Science', 'Security', 'Other'];
const Filters = () => {
    const [active, setActive] = React.useState('all');
    const handleFiler = (link: string) => {
        setActive(link);
    }

    return (
        <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2
        overflow-auto py-12 sm:max-w-2xl">
            {links.map((link) => (
                <button
                    key={link}
                    onClick={() => {
                        handleFiler(link)
                    }}
                    className={`${active === link ? "gradient_blue-purple" : ""
                    }
                    whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
                >
                    {link}
                </button>
            ))}
        </ul>
    )
}
export default Filters
