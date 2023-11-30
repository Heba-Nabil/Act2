
import { boldFont, regFont , SemiboldFont} from "@/utils/fonts";
import TotopBtn from "@/components/TotopBtn";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import ResourcesProvider from "@/contexts/DataContext";
import { fetchHomePage } from "@/services/HomePageContent";
import fetchData from "@/utils/fetchData";
import parse  from "html-react-parser";

export const metadata = {
  title: "act Group",
  description: "act Group",
  // icons: {
  //   icon:"/act-fav.png"
  // }
};

const LocaleLayout = async ({ children, params: { locale } }) => {
  const projectConfig = await fetchData(
    `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/ProjectConfiguration`
  )
  const websiteDataRes = await fetch(
    `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/Retrieve`,
    { cache: "force-cache", next: { tags: ["websiteData"] } }
  );
  const websiteData = await websiteDataRes.json();
const socialMedia = websiteData.Results.SocialMedia
  const { contactInfo } = await fetchHomePage(locale);

  return (
    <html
      lang={locale}
      dir="ltr"
      className={`${regFont.variable} ${boldFont.variable} ${SemiboldFont.variable}`}
    >
            {projectConfig?.Header && <head>{parse(projectConfig?.Header)}</head>}

      <body
        className="font-regFont font-boldFont font-SemiboldFont"
      >
        <ResourcesProvider locale={locale} data={websiteData?.Results}>
         
          <div className="relative w-full flex flex-col justify-between min-h-screen">
          <Navbar />
            <main className="flex flex-col flex-grow w-full">{children}</main>
            <Footer data={contactInfo}  socialMedia={socialMedia}/>
          </div>
         
          <TotopBtn />
        </ResourcesProvider>

        {projectConfig?.Footer && parse(projectConfig?.Footer)}

      </body>

    </html>
  );
};

export default LocaleLayout;
