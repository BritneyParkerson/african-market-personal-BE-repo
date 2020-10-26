# african-market-personal-BE-repo
My project for African Market Place Backend for Build Week Unit 4. I created this project due to some unresolved conflicts in the code of the collaborated project files.

<h1 align="center">Welcome to back-end 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/Build-Week-AfricanMarketPlace1/back-end#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/Build-Week-AfricanMarketPlace1/back-end/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/Build-Week-AfricanMarketPlace1/back-end/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/Build-Week-AfricanMarketPlace1/back-end" />
  </a>
</p>

### 🏠 [Homepage](https://github.com/Build-Week-AfricanMarketPlace1/back-end#readme)

## Install

```sh
npm install
```

## Development

```sh
npm run server
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## End Points

### Users

**POST** - new user - **_base-url/api/auth/register_**

For registration:

```
{
    "username": "testusername",
    "email": "email@email.com",
    "password": "password"
}
```

**POST** - login user - **_base-url/api/auth/login_**

Login:
```
{
    "username": "testusername",
    "password": "password"
}
```

**GET** - specific user - **_base-url/api/users/:id_**
```
{

}
```
**PUT** - update specific user - **_base-url/api/users/:id_**
```
{
}
```
**DELETE** - delete specific user - **_base-url/api/users/:id_**
```
{
}
```

### Products

**GET** - all products - **_base-url/api/users/:id/products_**
```
{
}
```

**GET** - specific product - **_base-url/api/products/:id_**
```
{
}
```
**PUT** - update specific product - **_base-url/api/products/:id_**
```
{
}
```
**DELETE** - delete specific product - **_base-url/api/products/:id_**
```
{
}
```
### Categories

**POST** - add new category- **_base-url/api/categories_**
```
{
  "id": 1,
  "category_name": "Test Category"
}
```
**GET** - all categories - **_base-url/api/categories_**
```
{
  "id": 1,
  "category_name": "Animal Products - Livestock"
}
```
**GET** - specific category - **_base-url/api/categories/:id_**
```
{
}
```
**PUT** - update specific category - **_base-url/api/categories/:id_**
```
{
}
```
**DELETE** - delete specific category - **_base-url/api/categories/:id_**
```
{
}
```

## Author

👤 **Britney Parkerson**

- Github: [@Build-Week-AfricanMarketPlace1](https://github.com/Build-Week-AfricanMarketPlace1)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Build-Week-AfricanMarketPlace1/back-end/issues). You can also take a look at the [contributing guide](https://github.com/Build-Week-AfricanMarketPlace1/back-end/blob/master/CONTRIBUTING.md).

## 📝 License
Copyright © 2020 [Britney Parkerson](https://github.com/Build-Week-AfricanMarketPlace1).<br />
This project is [ISC](https://github.com/Build-Week-AfricanMarketPlace1/back-end/blob/master/LICENSE) licensed.