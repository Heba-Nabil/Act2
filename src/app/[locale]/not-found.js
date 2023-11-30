import Link from "next/link"

const NotFound = () => {
     
    return (
        <section className='relative overflow-hidden h-[100vh] bg-[#e3e3e3] py-20'>
            <div className="container px-10 lg:px-20 pb-10 mx-auto text-center flex items-center justify-center">
                <div>
                    <h2 className="mb-2 text-[50px] font-bold leading-none text-primary sm:text-[80px] md:text-[100px]">
                        404
                    </h2>
                    <h4 className="mb-3 text-[22px] font-semibold leading-tight">
                        Oops! That page can’t be found
                    </h4>
                    <p className="mb-8 text-lg text-secondary">
                        The page you are looking for it maybe deleted
                    </p>
                    <div className="relative md:mr-6 my-2">
                        <Link
                            href="/"
                            className="cursor-pointer whitespace-nowrap inline-flex items-center justify-center px-10 py-2 border border-transparent rounded-[24px] shadow-sm text-base font-medium text-white bg-primary hover:bg-white hover:text-primary hover:border-primary"
                        >
                            Back to Home Page
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default NotFound;