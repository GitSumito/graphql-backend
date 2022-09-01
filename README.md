```
npm i apollo-server@^2 graphql@^14.6.0

node ./src/server.js
```

open http://localhost:4000/
then paste bellow queries.

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
