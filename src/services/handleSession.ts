const handleSession = () => {
  const setItem = (key: string, value: string = 'true'): void =>
    sessionStorage.setItem(key, value);

  const getItem = (key: string): string | null => sessionStorage.getItem(key);

  const clearAll = () => sessionStorage.clear();

  return {
    setItem,
    getItem,
    clearAll,
  };
};

export default handleSession;
