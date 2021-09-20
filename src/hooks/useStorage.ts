import { useState, useEffect } from "react";

/**
 * 
 * @param key {string} 
 * @param defaultValue {any} 
 * @returns value of a specific local storage key
 */
export const getStorageValue = (key: string, defaultValue: any = '') => {
  const data = localStorage.getItem(key) || '';
  const initial = data ? JSON.parse(data) : data;

  return initial || defaultValue;
}

/**
 * 
 * @param key {string}
 * @param defaultValue {any} 
 * @returns state value and state setValue
 */
const useStorage = (key: string, defaultValue: any = '') => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return {value, setValue}
};

export default useStorage;