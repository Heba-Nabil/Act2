import { errorHandler, successHandler } from "@/utils/responseHandler";

export const POST = async (request) => {
  const { searchParams } = new URL(request.url);

  const locale = searchParams.get("locale");
  const email = searchParams.get("email");

  try {
    if (!locale || !email) {
      return errorHandler("Required email and locale");
    }

    const res = await fetch(
      `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/NewsLetter/${process.env.COUNTRY_CODE}/${locale}/Subscribe?email=${email}`,
      { method: "POST" }
    );

    const data = await res.json();

    if (data?.ResonseCode !== 200) {
      return errorHandler("Email already exist!", data?.ResonseCode);
    }

    return successHandler(null, "Your email submitted successfully");
  } catch (error) {
    return errorHandler(
      `Something went wrong while submitting newsletter ${error}`
    );
  }
};
