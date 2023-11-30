import ServiceData from "./ServiceData";
import ServiceSlider from "./ServiceSlider";


const ServiceSec = ({ data, media, content }) => {

    return (
        <section className='relative overflow-hidden'>
            <div className="container pt-10 px-5 lg:px-20 mx-auto flex text-center">
                <div className="mx-auto grid grid-cols-12 gap-2 md:gap-20">
                    <div className='flex justify-center items-center col-span-full lg:col-span-7 md:col-span-6 order-2 md:order-1'>
                        <ServiceSlider data={media} />
                    </div>
                    <div className='flex justify-center items-center col-span-full lg:col-span-5 md:col-span-6  order-1 md:order-2'>
                        <ServiceData data={data} content={content} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ServiceSec;