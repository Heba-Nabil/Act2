import ValueData from "./ValueData";
import ValueSlider from "./ValueSlider";


const fetchData = async () => {
    const data = {
        subtitle3: 'PANIERS-CADEAUX',
        title3: 'Our Values',
        desc3: 'Offrez une expérience gourmande avec l’un de nos paniers-cadeaux faits sur mesure selon votre budget. Une multitude de choix s’offrent à vous. Offrez une expérience gourmande avec l’un de nos paniers-cadeaux faits sur mesure selon votre budget. Une multitude de choix s’offrent à vous.',
        images: [
            {
                img: '/images/mission.jpg',
                alt: 'Mission'
            },
            {
                img: '/images/mission12.jpg',
                alt: 'Mission',
            }
        ]
    }
    return data;
}

const ValueSec = async () => {
    const valueData = await fetchData();

    return (
        <section className='relative overflow-hidden'>
            <div className="container px-10 mx-auto flex text-center">
                <div className="container px-6 mx-auto grid grid-cols-12 gap-10 md:gap-20">
                    <div className='flex justify-center items-center col-span-full lg:col-span-5 md:col-span-6'>
                        <ValueData data={valueData} />
                    </div>
                    <div className='flex justify-center items-center col-span-full lg:col-span-7 md:col-span-6'>
                        <ValueSlider data={valueData.images} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ValueSec;