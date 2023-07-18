const films = [
    'https://swapi.py4e.com/api/people/1',
    'https://swapi.py4e.com/api/people/2',
    'https://swapi.py4e.com/api/people/3',
    'https://swapi.py4e.com/api/people/4'
  ]
  
  Promise.all(films.map(film => fetch(film).then(people => people.json())))
    .then(array => {
      console.log('1', array[0])
      console.log('2', array[1])
      console.log('3', array[2])
      console.log('4', array[3])
    })
    .catch(err => console.log('ughhhh fix it!', err))
    .finally(() => console.log('extra action here'))

    const urls = [
        'https://jsonplaceholder.typicode.com/users',
        'https://jsonplaceholder.typicode.com/postss',
        'https://jsonplaceholder.typicode.com/albums'
      ]
      
      const getData = async function() {
        try {
          const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
              const response = await fetch(url);
              return response.json();
          }));
          console.log('users', users);
          console.log('posts', posts);
          console.log('albums', albums);
        } catch (err) {
          console.log('ooooooops', err);
        }
      }
      