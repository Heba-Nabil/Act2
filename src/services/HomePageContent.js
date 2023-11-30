
export const fetchHomePage = async (locale) => {

    const [advancedContentRes, mainBannerRes, contactInfoRes ] = await Promise.all([
        fetch(`${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/actPage/${locale}/Category`, { cache: 'no-store' }),
        fetch(`${process.env.BASE_URL}/${process.env.PROJECT_CODE}/Banner/${process.env.COUNTRY_CODE}/actBanner/${locale}`, { cache: 'no-store' }),
        fetch(`${process.env.BASE_URL}/${process.env.PROJECT_CODE}/ContactInformation/${locale}`, {cache: 'no-store'})
    ]);
    const [{ Results: advancedContent }, { Results: mainBanner }, { Results: contactInfo}] = await Promise.all([advancedContentRes.json(), mainBannerRes.json(), contactInfoRes.json()]);

    const aboutSec = advancedContent?.find((item) => item?.PageTitle === 'aboutSec');
    const marqueeSec = advancedContent?.find((item) => item?.PageTitle === 'marquee');
    const serviceSec = advancedContent?.find((item) => item?.PageTitle === 'serviceSec');
    const productSec = advancedContent?.find((item) => item?.PageTitle === 'productsSec');
    const clientSec = advancedContent?.find((item) => item?.PageTitle === 'clientSec');
    const newsletterSec = advancedContent?.find((item) => item?.PageTitle === 'newsletter');
    const counterSec = advancedContent?.find((item) => item?.PageTitle === 'counterSec');

    const serviceMediaRes = await fetch(`${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/actPage/${locale}/Category/${serviceSec?.UniqueName}`, { cache: 'no-store' });
    const serviceMedia = await serviceMediaRes.json()

    const serviceContentRes = await fetch(`${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/actPage/${locale}/Category/${serviceSec?.UniqueName}/Content`, { cache: 'no-store' });
    const serviceContent = await serviceContentRes.json()

    const productContentRes = await fetch(`${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/actPage/${locale}/Category/${productSec?.UniqueName}/Content`, { cache: 'no-store' });
    const productContent = await productContentRes.json()

    const clientContentRes = await fetch(`${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/actPage/${locale}/Category/${clientSec?.UniqueName}/Content`, { cache: 'no-store' });
    const clientContent = await clientContentRes.json()

    const counterContentRes = await fetch(`${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/actPage/${locale}/Category/${counterSec?.UniqueName}/Content`, { cache: 'no-store' });
    const counterContent = await counterContentRes.json()

    return {
        advancedContent,
        mainBanner,
        aboutSec,
        marqueeSec,
        serviceSec,
        serviceMedia: serviceMedia?.Results?.AdvancedCategoryMedia,
        serviceContent: serviceContent?.Results,
        productSec,
        productContent: productContent?.Results,
        clientSec,
        clientContent: clientContent?.Results,
        newsletterSec,
        contactInfo : contactInfo[0],
        counterSec,
        counterContent: counterContent?.Results
    }
}