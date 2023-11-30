import AnimatedTitle from "../../AnimatedTitle";
import ClientsTab from "./ClientsTab";


const ClientsSec = async ({ locale, data, content }) => {
    const clientMediaRes = await fetch(`${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/actPage/${locale}/Category/${data?.UniqueName}/Content/${content[0].UniqueName}`, { cache: 'no-store' });
    const clientMedia = await clientMediaRes.json();

    return (
        <section className='relative overflow-hidden py-14'>
            <div className='container px-3 md:px-10 py-10 mx-auto'>
                <AnimatedTitle title={data?.Name} className='text-center text-primary text-2xl md:text-4xl' />
            </div>
            <div className="relative">
                <ClientsTab locale={locale} tabs={content} media={clientMedia?.Results?.AdvancedContentMedias} />
            </div>
        </section>
    )
}
export default ClientsSec;