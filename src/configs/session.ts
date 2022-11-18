const session = {
  isEndDate: () => sessionStorage.getItem('isEndDate'),
  isAllowed: () => sessionStorage.getItem('success'),
};

export default session;
