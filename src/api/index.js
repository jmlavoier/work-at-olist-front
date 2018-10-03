const api = {
  postForm: form => new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: '200',
        response: form,
      });
    }, 2000);
  }),
};

export default api;
