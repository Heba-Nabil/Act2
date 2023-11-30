"use client";

import { createContext } from "react";
import { isKeyExist, handleGetKeyValue, createNewKey } from "@/utils/translate";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const ResourcesContext = createContext();

const ResourcesProvider = async (props) => {
  const { children, locale, data } = props;

  const useTranslate = (key) => {

    const keyValues = isKeyExist(data, key);

    if (keyValues?.length !== 0) {
      return handleGetKeyValue(keyValues, locale);
    }

    if (process.env.NODE_ENV === "production") {
      return key;
    }

    console.log("Create Key ", key);
    return createNewKey(key);
  };

  const getSocialMedias = () => {
    return data?.SocialMedia;
  };

  return (
    <>
      <ResourcesContext.Provider value={{ useTranslate, getSocialMedias }}>
        {children}
      </ResourcesContext.Provider>

      <ToastContainer />
    </>
  );
};

export default ResourcesProvider;
