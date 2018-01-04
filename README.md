# App
Para iniciar o APP no emulador (o emulador precisa ter o nome ReactNative)

$ cd app

$ npm start

$ npm run emulator

$ npm run android

# Servidor
Para iniciar o servidor graphql

$ cd server

$ npm start

Com o servidor iniciado, você pode usar a ferramenta GraphiQL (http://localhost:8080/graphiql). Existem 2 mutations e 1 query configurados:

```
mutation create{
	createEmployee(name: "Victor Ferreira", company_id: "OI394363", phone: "21989861063"){
		name,
		company_id
	}
}

query getAll{
	employees{
		name,
		company_id
	}
}

mutation delete{
	deleteEmployee(company_id: "OI394363"){
		name,
		company_id
	}
}
```
