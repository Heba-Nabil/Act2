import { errorHandler, successHandler } from "@/utils/responseHandler";

export const POST = async (request) => {
  const formData = await request.formData();

  try {
    const res = await fetch(
      `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/ContactUs/${process.env.COUNTRY_CODE}`,
      {
        method: "POST",
        body: formData,
        subject: 'Contact Form'
      }
    );


    const data = await res.json();

    if (data?.ResonseCode !== 200) {
      return errorHandler(data?.ResonseTitle, data?.ResonseCode);
    }

    return successHandler(null, "Contact submitted successfully");
  } catch (error) {
    return errorHandler(
      `Something went wrong while submit contact us: ${error}`
    );
  }
};
