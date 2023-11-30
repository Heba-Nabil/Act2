// Check if key already exist and return its objects
export const isKeyExist = (data, key) => {
  const resources = data?.ProjectResource;

  const keyValues = resources?.filter((item) => item.Name === key);
  return keyValues;
};

// If key exist return its value with locale
export const handleGetKeyValue = (keyValues, locale) => {
  const valueWithLocale = keyValues?.find(
    (item) => item.LanguageCode === locale
  );

  return valueWithLocale?.Value;
};

// Create new key and validate the resources
export const createNewKey = async (key) => {
  try {
    const origin = typeof window !== "undefined" ? location.origin : "";

    const res = await fetch(`${origin}/api/resources?key=${key}`, {
      method: "POST",
    });

    fetch(`${origin}/api/application/reset`);

    const data = await res.json();

    if (data?.hasError) {
      console.log(data?.message);
      return;
    }
      
    return key;
  } catch (error) {
    console.log("Something went wrong while creating new key ", error);
  }
};
