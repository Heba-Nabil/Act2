
export const fetchContactPage = async (locale) => {
    const [marqueeRes] = await Promise.all([
        fetch(`${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/marquee/${locale}/Category`, { cache: 'no-store' }),
    ]);
    const [{ Results: marquee }] = await Promise.all([marqueeRes.json()]);

    const marqueeContact = marquee?.find((item) => item?.PageTitle === 'ContactMarquee');
    const marqueeQuote = marquee?.find((item) => item?.PageTitle === 'QuoteMarquee');

    return {
        marqueeContact,
        marqueeQuote
    }
}