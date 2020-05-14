/* Method that calls Supera api for registering
* params should be an object with the same key the server expects
*/
export const callRegister = (params, onSuccess, onError) => {
  const p = new FormData();

  Object.entries(params).forEach( ([key, value]) => {
    p.append(key, value);
  });

  const request = new Request(`${process.env.REACT_APP_PHP_URL}/v1/register.php`, {
    method: 'POST',
    body: p
  });

  fetch(request)
    .then(async r => {
      const response = await r.json();
      console.log('response', response);
      if (response.success) {
        onSuccess();
      } else {
        onError(response.error || 'Erro desconhecido.');
      }
    }).catch(e => {
      onError(e.message || 'Erro na chamada de rede.');
    });
}