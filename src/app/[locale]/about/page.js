import ValuesSec from "@/components/aboutPage/Values/ValuesSec";
import AboutSec from "@/components/aboutPage/AboutSec";
import { fetchAboutPage } from "@/services/AboutPageContent";
import GoalSec from "@/components/aboutPage/Goalsec/GoalSec";
import MissionSec from "@/components/aboutPage/MissionSec/MissionSec";

export async function generateMetadata({ params: { locale } }) {
  // Fetch Data
  const [websiteDataRes, pageSeoRes] = await Promise.all([
    fetch(`${process.env.BASE_URL}/${process.env.PROJECT_CODE}/Retrieve`, { cache: "force-cache", next: { tags: ["websiteData"] } }),
    fetch(
      `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/SEO/${locale}/AboutPage/Index`, { cache: "no-store" }
    )
  ]);
  const [{ Results: websiteData }, { Results: pageSeo }] = await Promise.all([websiteDataRes.json(), pageSeoRes.json()]);

  return {
    title: pageSeo?.PageTitle,
    description: pageSeo?.PageDescription,
    keywords: pageSeo?.PageKeywords,

    openGraph: {
      title: pageSeo?.OGtitle,
      description: pageSeo?.OGdescription,
      type: pageSeo?.OGtype,
      images: [{ url: pageSeo?.OGimage, width: 32, height: 32 }],
      url: websiteData?.FrontUrl,
    },

    twitter: {
      title: pageSeo?.Twittertitle,
      description: pageSeo?.Twitterdescription,
      images: pageSeo?.Twitterimage
    }
  }
}

const AboutPage = async ({ params: { locale } }) => {
  const {
    aboutUsSec,
    goalSec,
    goalSecContent,
    missionSec,
    missionSecContent,
    valuesSec,
    valuesSecContent,
    marqueeAbout,
  } = await fetchAboutPage(locale);

  return (
    <>
    
      <AboutSec data={aboutUsSec} marquee={marqueeAbout} />
      <MissionSec content={missionSecContent} media={missionSec} />
      <GoalSec content={goalSecContent} media={goalSec} />
      <ValuesSec data={valuesSec} content={valuesSecContent} />
    </>
  );
};
export default AboutPage;
