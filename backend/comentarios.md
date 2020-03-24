
<!-- 
TIPO DE PARAMETROS 

* Query Params: Parâmetros nomeados enviados na rota após o "?" para (Filtros, Paginação etc...)
* Route Params: Parâmetros utilizados para identificar recursos
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

DIFERENÇAS ENTRE BANCOS DE DADOS

* SQL: MYSQL, SQLITE, POSTGRESQL, ORACLE, MICROSOFT SQL SERVER, ETC...
* NOSQL: MONGODB, COUCHDB, ETC...


USAREMOS NESSE PROJETO O BANCO SQLITE

* FORMA DE CONFIGURAR O SQLITE

1° - DRIVER: Por exemple:  Onde iremos buscar os usuarios desta forma "SELECT * FROM users"
2° - Query Builder: Por exemplo buscaremos usando JS mais ou menos assim "table('users').select('*')"

Então iremos usar o Query Builder usando a ferramenta KNEX.JS

-->

