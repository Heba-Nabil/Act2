const fetchData = async (url, config) => {
    const res = await fetch(url, {
      cache: "no-store",
      ...config,
    });
  
    const data = await res.json();
  
    if (data?.ResonseCode !== 200) throw new Error(data?.ResonseMessage);
  
    return data?.Results;
  };
  
  export default fetchData;
  