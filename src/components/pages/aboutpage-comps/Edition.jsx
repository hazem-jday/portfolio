import React from 'react'

const Edition = () => {
    return (
        <section name="Memories" className='relative text-white p-4 py-10 grid gap-10 sm:grid-cols-2 max-w-[1000px] mx-auto'>
            {/* Seccion izquierda */}
            <section className='grid gap-10'>
                <div>
                    <h2 className='text-3xl font-semibold mt-2'>Memories</h2>
                </div>

                <article className='bg-gray-d relative border-[1px] border-primary-color/30 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/cu.jpg" alt="coding-universe" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>Coding Universe 2023 Winner</h4>
                        {/* <p className='text-gray-400 text-md mt-2'></p> !--> */}
                        <a href="https://www.facebook.com/photo?fbid=728490585943093&set=a.469104158548405" target='_blank' className='bg-gradient-to-t from-green-400 to-primary-color p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-black'></i>
                        </a>
                    </section>
                </article>

                <article className='bg-gray-d relative border-[1px] border-primary-color/30 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/work.jpg" alt="tekab dev" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>At Tekab Dev</h4>
                        <a href="https://tekab.dev" target='_blank' className='bg-gradient-to-t from-green-400 to-primary-color p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-black'></i>
                        </a>
                    </section>
                </article>
            </section>

            {/* Seccion derecha */}
            <section className='grid gap-10'>
            <article className='bg-gray-d relative border-[1px] border-primary-color/30 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/ehm.jpg" alt="spacetech hackathon" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>SpaceTech Hackathon Winner</h4>
                        <a href="https://www.facebook.com/watch/?v=703428004561223" target='_blank' className='bg-gradient-to-t from-green-400 to-primary-color p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-black'></i>
                        </a>
                    </section>
                </article>

                <article className='bg-gray-d relative border-[1px] border-primary-color/30 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/flag.jpg" alt="capture the flag" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>CTF Challenge</h4>

                    </section>
                </article>


            </section>
        </section>
    )
}

export default Edition
