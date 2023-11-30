import { errorHandler, successHandler } from "@/utils/responseHandler";

export const POST = async (request) => {
  const { searchParams } = new URL(request.url);

  const key = searchParams.get("key");

  if (key) {
    try {
      const res = await fetch(
        `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/Resources/${process.env.COUNTRY_CODE}/Insert?Resource=${key}`,
        { method: "POST" }
      );

      const data = await res.json();

      if (data?.ResonseCode !== 200) {
        return errorHandler(
          `Something went wrong while creating resources`,
          data?.ResonseCode
        );
      }

      return successHandler({ key }, "", 201);
    } catch (error) {
      return errorHandler(
        `Something went wrong while creating resources ${error}`
      );
    }
  } else {
    return errorHandler(`Key is Required`);
  }
};
