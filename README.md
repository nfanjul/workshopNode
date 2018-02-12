# Workshop Nodejs

This example include an API with a basic CRUD. Integration with a AzureSQL.

1. Create server in server.js file.
2. Create routing in separate file for any endpoints.
3. Create controllers for recibe the request.
4. Create a service with integration with AzureSQL use package "mssql".
5. Create a config file with params to connection BD.

This example is developed with ECMAScript 5.

<div id="installation"></div>

### 1. Installation
Install all the dependencies for the project.

```
npm install
```

<div id="develop"></div>

### 2. Develop
Runs a development server at https://localhost:1337.

```
npm start
```

<div id="develop"></div>

### 3. Develop in VS Code
Execute with VS code debugger.

---

**Important:** Configure in config.js the connection for your bd:

```javascript
Important: COnfigure the connection for your bd.:
var config = {
    user: 'xxxxx',
    password: 'xxxxx',
    server: 'xxxxx',
    database: 'xxxxx',
    options:
    {
        encrypt: true,
    }
}
```
