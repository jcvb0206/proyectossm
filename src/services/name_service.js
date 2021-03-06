const BASE_URL = 'https://api.github.com';
const { REACT_APP_NAME_USERNAME, REACT_APP_NAME_PASSWORD } = process.env;

async function apiFetch(...args) {
  const response = await fetch(...args);
  const data = await response.json();
  return data;
}

function NameService() {
  if (!NameService.instance) {
    this.token = btoa(`${REACT_APP_NAME_USERNAME}:${REACT_APP_NAME_PASSWORD}`);
    NameService.instance = this;
  }
  return NameService.instance;
}

NameService.prototype.profile = function (username) {
  return apiFetch(`${BASE_URL}/users/${username}`, {
    method: 'GET',
    headers: {
      Authorization: `Basic ${this.token}`,
    },
  });
};

export default NameService;
