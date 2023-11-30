import AnimatedTitle from "./AnimatedTitle";


const InnerBanner = ({ title }) =>{
    return(
        <section className="relative flex items-center h-[250px] md:h-[400px] bg-[url('/images/mission.jpg')] bg-cover bg-no-repeat">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="container px-10 pt-40 pb-10 mx-auto z-10">
                <AnimatedTitle title={title} className='text-white text-[30px] md:text-[40px] font-bold mb-10' />
            </div> 
        </section>
    )
}
export default InnerBanner;