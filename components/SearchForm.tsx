"use client";
import React, {useState} from 'react'
import Image from "next/image";
import {Input} from "@nextui-org/react";


const SearchForm = () => {
    const [search, setSearch] = useState('')

    return (
        <form className="flex-center mx-auto  w-full mt-3 sm:mt-3 sm:px-5">
            <label className="flex-center relative w-full max-w-3xl">
                <Input
                    className="bg-black-300 base-regular border-0 py-3 pl-3 pr-3 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800 rounded-xl"
                    variant={"bordered"}
                    isClearable
                    radius="lg"
                    size={"lg"}
                    classNames={{
                        innerWrapper: "bg-transparent",
                        inputWrapper: [
                            "border-0",
                            "hover:bg-transparent-200/70",
                            "dark:hover:bg-default/70",
                            "group-data-[focused=true]:bg-default-200/50",
                            "dark:group-data-[focused=true]:bg-default/60",
                            "!cursor-text",
                        ],
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                    startContent={
                        <Image
                            src="/magnifying-glass.svg"
                            alt="Search icon"
                            width={32}
                            height={32}
                            className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"/>
                    }

                />


            </label>
        </form>

    )
}
export default SearchForm
