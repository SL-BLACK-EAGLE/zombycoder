import React from 'react'
import SearchForm from "@/components/SearchForm";
import Filters from "@/components/Filters";


const Page = () => {
    return (
        <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
            <section className="nav-padding w-full">

                <div className="flex-center relative min-h[274px] h-80
                w-full flex-col rounded-xl bg-banner bg-cover bg-center
                text-center">
                    <h1 className="sm:heading1 heading2
                mb-6 text-center text-white">Empowering Innovation Through Cutting-Edge Software Solutions</h1>
                </div>
                <SearchForm/>
            </section>
            <Filters/>
        </main>
    )
}
export default Page
