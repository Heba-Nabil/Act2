
export const fetchAboutPage = async(locale) => {
    const [advancedContentRes, marqueeRes] = await Promise.all([
        fetch(`${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/ActAboutPage/${locale}/Category`, { cache: 'no-store'}),
        fetch(`${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/marquee/${locale}/Category`, { cache: 'no-store'})
    ]);
    const [{ Results: advancedContent }, { Results: marquee }] = await Promise.all([advancedContentRes.json(), marqueeRes.json()]);

    const aboutUsSec = advancedContent?.find((item) => item?.PageTitle === 'AboutUs')
    const goalSec = advancedContent?.find((item) => item?.PageTitle === 'Goal Sec')
    const missionSec = advancedContent?.find((item) => item?.PageTitle === 'Mission Sec')
    const valuesSec = advancedContent?.find((item) => item?.PageTitle === 'Our Values')
    const marqueeAbout = marquee?.find((item) => item?.PageTitle === 'AboutMarquee')

    const goalSecContentRes = await fetch(`${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/ActAboutPage/${locale}/Category/${goalSec.UniqueName}/Content`, { cache: 'no-store'});
    const goalSecContent = await goalSecContentRes.json()
    
    const missionSecContentRes = await fetch(`${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/ActAboutPage/${locale}/Category/${missionSec.UniqueName}/Content`, { cache: 'no-store'});
    const missionSecContent = await missionSecContentRes.json()
    
    const valuesSecContentRes = await fetch(`${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/ActAboutPage/${locale}/Category/${valuesSec.UniqueName}/Content`, { cache: 'no-store'});
    const valuesSecContent = await valuesSecContentRes.json()

    return{
        aboutUsSec,
        goalSec,
        goalSecContent: goalSecContent?.Results || [],
        missionSec,
        missionSecContent: missionSecContent?.Results || [],
        valuesSec,
        valuesSecContent: valuesSecContent?.Results || [],
        marqueeAbout,
    }
}