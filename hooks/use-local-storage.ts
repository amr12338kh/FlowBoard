import { useCallback } from "react";

export const useLocalStorage = (key: string) => {
  const isClient = typeof window !== "undefined";

  // Set item to local storage
  const setItem = useCallback(
    (value: unknown) => {
      if (!isClient) return;

      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, isClient]
  );

  // Add item to array in local storage
  const addItemToArray = useCallback(
    <T>(newItem: T) => {
      if (!isClient) return;

      try {
        const existingItems = getItem<T[]>() || [];
        const updatedItems = [...existingItems, newItem];
        window.localStorage.setItem(key, JSON.stringify(updatedItems));
      } catch (error) {
        console.error(`Error adding item to localStorage key "${key}":`, error);
      }
    },
    [key, isClient]
  );

  // Get item from local storage
  const getItem = useCallback(<T>(): T | undefined => {
    if (!isClient) return undefined;

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.error(`Error getting localStorage key "${key}":`, error);
      return undefined;
    }
  }, [key, isClient]);

  // Remove item from array by ID
  const removeItemFromArray = useCallback(
    <T extends { id: string | number }>(itemId: string | number) => {
      if (!isClient) return;

      try {
        const existingItems = getItem<T[]>() || [];
        const updatedItems = existingItems.filter((item) => item.id !== itemId);
        window.localStorage.setItem(key, JSON.stringify(updatedItems));
      } catch (error) {
        console.error(
          `Error removing item from localStorage key "${key}":`,
          error
        );
      }
    },
    [isClient, getItem, key]
  );

  // Remove entire key from local storage
  const removeAll = useCallback(() => {
    if (!isClient) return;

    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  }, [key, isClient]);

  return { setItem, addItemToArray, getItem, removeItemFromArray, removeAll };
};
