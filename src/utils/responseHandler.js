import { NextResponse } from "next/server";

export const successHandler = (data, message, status = 200) => {
  return NextResponse.json(
    {
      hasError: false,
      message,
      results: data,
    },
    { status }
  );
};

export const errorHandler = (message, status = 500) => {
  return NextResponse.json(
    {
      hasError: true,
      message,
      results: null,
    },
    { status }
  );
};
