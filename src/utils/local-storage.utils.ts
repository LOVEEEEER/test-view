export const getLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    const ls = localStorage.getItem(key);
    if (!ls || ls === "undefined") return null;
    else return JSON.parse(ls);
  }
  return null;
};
