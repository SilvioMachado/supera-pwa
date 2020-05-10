export const makeLogin = (username, password, onSuccess, onError) => {
  const params = new FormData();
  params.append('email', username);
  params.append('password', password);
  params.append('origin', 'supera-pwa');
  
  const request = new Request(`${process.env.REACT_APP_PHP_URL}/v1/login.php`, {
    method: 'POST',
    withCredentials: true,
    credentials: 'include',
    body: params
  });

  fetch(request)
    .then( async r => {
      const response = await r.json();

      if (response.success) {
        onSuccess(response.data);
      } else {
        onError(response.error);
      }
    }).catch(e => onError(e));
};
