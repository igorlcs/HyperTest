// __tests__/api.test.js
const axios = require('axios');

// Função auxiliar para fazer a chamada à API
async function getAPIResponse() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    return response;
  } catch (error) {
    return error.response;
  }
}

describe('Testes da API JSONPlaceholder', () => {
  test('Deve retornar um código de status 200', async () => {
    const response = await getAPIResponse();
    expect(response.status).toBe(200);
  });

  test('Deve conter os campos obrigatórios na resposta', async () => {
    const response = await getAPIResponse();
    expect(response.data).toHaveProperty('userId');
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('title');
    expect(response.data).toHaveProperty('body');
  });

  test('Deve retornar dados precisos na resposta', async () => {
    const response = await getAPIResponse();
    expect(response.data.userId).toBe(1);
    expect(response.data.id).toBe(1);
    expect(typeof response.data.title).toBe('string');
    expect(typeof response.data.body).toBe('string');
  });
});
