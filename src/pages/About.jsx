import Hero from '../assets/img/about-hero.jpg';
import { aboutHero } from '../utils/AboutData';
import Icecream from '../assets/img/i5.png';

const About = () => {
    return (
        <>
            <div className=''>
                <img src={Hero} alt="About-us-heroimage"
                    className='w-full h-[26rem] after:backdrop-brightness-50' />

                <div className='md:flex flex-row relative md:px-10 px-4 bottom-24 
                md:space-x-7 space-y-3 md:space-y-0'>

                    {
                        aboutHero && aboutHero.map((n) => (
                            <div
                                key={n.id}
                                className="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                                <h1 className='text-4xl font-bold text-orange-300 '>
                                    {n.number}
                                </h1>
                                <h5
                                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    {n.title}
                                </h5>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    {n.description}
                                </p>
                            </div>

                        ))
                    }
                </div>

                <section className='bg-orange-50'>
                    <div className='flex flex-row w-full'>
                        <h1 className='w-460 m-auto text-3xl text-center font-semibold'>
                            We bake fresh, handmade bread, pastries and cakes ever day
                        </h1>
                    </div>

                    <div className='flex items-center justify-center mx-auto w-4/6 border space-x-5 '>
                        <div>
                            <h1 className='uppercase leading-4 text-xl'>Vanilla Flavour Icecream</h1>
                        </div>
                        <img src={Icecream} alt="" 
                        className='w-[30rem] drop-shadow-2xl'/>
                    </div>
                </section>
            </div>
        </>
    )
}

export default About