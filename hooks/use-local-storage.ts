export const useLocalStorage = (key: string) => {
  const isClient = typeof window !== "undefined";

  // Set item to local storage
  const setItem = (value: unknown) => {
    if (!isClient) return;

    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  // Get item from local storage
  const getItem = <T>(): T | undefined => {
    if (!isClient) return undefined;

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.error(`Error getting localStorage key "${key}":`, error);
      return undefined;
    }
  };

  // Remove item from local storage
  const removeItem = () => {
    if (!isClient) return;

    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  };

  return { setItem, getItem, removeItem };
};
