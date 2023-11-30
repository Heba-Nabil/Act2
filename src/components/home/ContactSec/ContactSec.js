import NextImage from "../../NextImage";
import ContactData from "./ContactData";
import QuoteSec from "./QuoteSec";


const ContactSec = ({ locale, info, data }) => {
    return (
        <section className='relative overflow-hidden'>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className='relative h-[400px] lg:container px-5 py-20 lg:py-[50px] w-full mx-auto flex justify-center items-center'>
                    <NextImage src="/images/supply-chain-bg2.jpg" alt="contact" fill className="object-cover" />
                    <div className='bg-black opacity-80 py-20 lg:py-[50px] absolute top-0 w-full h-full block -z-[1px]'></div>
                    <ContactData info={info} />
                </div>
                <div className='bg-[#e3e3e3] lg:container px-5 py-10 md:py-[50px] w-full mx-auto flex justify-center items-center'>
                    <QuoteSec locale={locale} data={data} />
                </div>
            </div>
        </section>
    )
}
export default ContactSec;