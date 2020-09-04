const fetch = require('node-fetch'); //ERRO NO NODE MODULES;

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

it('given an URL, check if rep exists', () => {
    expect.assertions(2);
    return getRepos('https://api.github.com/users/tryber/repos').then(data => {
    expect(data).toContain('sd-01-week4-5-project-todo-list');
    expect(data).toContain('sd-01-week4-5-project-meme-generator');
    });
});