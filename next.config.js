module.exports = async () => {
  /** @type {import('next').NextConfig} */

  fetch(
    `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/Retrieve`,
    {
      cache: "force-cache",
      next: { tags: ["websiteData"] },
    }
  );

  const nextConfig = {
    reactStrictMode: false,
    images: {
      domains: [
        "apinode1.psdigital.me",
      ]
    }
  };

  return nextConfig;
};
