```
npm i apollo-server@^2 graphql@^14.6.0

node ./src/server.js
```

open http://localhost:4000/
then paste bellow queries.

# use query

```
query {
  feed{
    id,
    description,
    url
  },
  info
}
```


# use mutation
```
mutation{
  post(url:"https://yahoo.co.jp",description:"yahoo"){
    id
    description
    url
  } 
}
```
