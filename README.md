# How to Make an AMAZON Clone with REACT JS for Beginners (in 4 hours)
- https://www.youtube.com/watch?v=1_IYL9ZMR_Y


## Steps
- Setup app using
```
  npx create-react-app amazon-clone
```

- Setup firebase
```
  create a project

  npm i -g firebase-tools
```

- React Router
```
  npm i -S react-router-dom
```

- Nav bar + Material UI 
```
  npm i -S @material-ui/core
  npm i -S @material-ui/icons

```
stick the header
```
  header {
    position: sticky;
    top:0;
    z-index: 100;
  } 
```

- Banner

- Product component

- React Context API + Add to Basket button

Use store in component
```
  const [{basket}] = useStateValue();
```

- Checkout page

- subtotal component
```
  npm i -S  react-currency-format
```

- Login Page
connect to firebase
```
npm i -s firebase
```
copyt the config from firebase project dashboard 

Enable the Email/Password auth in the firebase project dashboard 


- Deploy
```
  cd amazon-clone
  npm run build

  firebase login
  firebase init
  firebase deploy
```

