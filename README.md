# e-commerce

## E-Commerce App Server

E-Commerce App is an integrated app alongside with E-Commerce CMS that has been built previously, both is operated using the same server and database.
Thus, the endpoints for E-Commerce App is an updated version from E-Commerce CMS. E-Commerce App is built for customer side (front-office) while E-Commerce CMS managed the back-office side.

This app has :
- RESTful endpoint for E-Commerce CMS CRUD operation
- JSON formatted response


## Products RESTful endpoints: 
## GET /products
Get all products

- Request Header:
```json
{
    "access_token": "<your access token>"
}
```   

- Request Body:
```json
  not needed
```

- Response (200 - OK):
```json
[
  {
    "id": 1,
    "name": "<product name>",
    "image_url": "<product image_url>",
    "price": "<product price>",
    "stock": "<product stock>",
    "createdAt": "2020-07-21T07:15:12.149Z",
    "updatedAt": "2020-07-21T07:15:12.149Z",
  },
  {
    "id": 2,
    "name": "<product name>",
    "image_url": "<product image_url>",
    "price": "<product price>",
    "stock": "<product stock>",
    "createdAt": "2020-07-21T07:15:15.149Z",
    "updatedAt": "2020-07-21T07:15:15.149Z",
  }
]
```

- Response (400 - Bad Request):
```json
{
    "message": "Invalid request"
}
```

- Response 500: Internal server error
```json
{
    "message": "Internal Server Error"
}
```

## POST /products
Create new product

- Request Header:
```json
{
    "access_token": "<your access token>"
}
```

- Request Body:
```json
{
    "name": "<name to get insert into>",
    "image_url": "<image_url to get insert into>",
    "price": "<price to get insert into>",
    "stock": "<stock to get insert into>",
}
```

- Response (201 - Created):
```json
{
    "product": {
        "id": "<given id by system>",
        "name": "<posted name>",
        "image_url": "<posted image_url>",
        "price": "<posted price>",
        "stock": "<posted stock>",
        "createdAt": "2020-07-21T07:17:12.149Z",
        "updatedAt": "2020-07-21T07:17:12.149Z"
    }
}   
```

- Response (400 - Bad Request):
```json
{
    "message": "Invalid requests"
}
```

- Response 500: Internal server error
```json
{
    "message": "Internal Server Error"
}
```

## GET /products/:id
Get a product data by request id params

- Request Header:
```json
{
    "access_token": "<your access token>"
}
```

- Request Body:
```json
  not needed
```

- Response (200 - OK):
```json
{
    "id": 1,
    "name": "<product name>",
    "image_url": "<product image_url>",
    "price": "<product price>",
    "stock": "<product stock>",
    "createdAt": "2020-07-21T07:15:12.149Z",
    "updatedAt": "2020-07-21T07:15:12.149Z",
}
```

- Response (400 - Bad Request):
```json
{
    "message": "Invalid Request"
}
```

- Response (404 - Not Found):
```json
{
    "message": "Product with ID: <req.params.id> is not found!"
}
```

- Response 500: Internal server error
```json
{
    "message": "Internal Server Error"
}
```

## PUT /products/:id
Update product by request id params

- Request Header:
```json
{
    "access_token": "<your access token>"
}
```

- Request Body:
```json
{
    "name": "<name value to be updated>",
    "image_url": "<image_url value to be updated>",
    "price": "<price value to be updated>",
    "stock": "<stock value to be updated>",
}
```

- Response (200 - OK):
```json
{
    "message": "Succesfully Updated Todo!",
}
```

- Response (400 - Bad Request):
```json
{
    "message": "Invalid requests"
}
```

- Response (404 - Not Found):
```json
{
    "message": "Product is not found!"
}
```

- Response 500: Internal server error
```json
{
    "message": "Internal Server Error"
}
```

## DELETE /products/:id
Delete product by request id params

- Request Header:
```json
{
    "access_token": "<your access token>"
}
```

- Request Body:
```json
    not needed
```

- Response (200 - OK):
```json
{
    "message": "Succesfully Deleted Product!",
}
```

- Response (400 - Bad Request):
```json
{
    "message": "Invalid requests"
}
```

- Response (404 - Not Found):
```json
{
    "message": "Product with ID: <req.params.id> is not found!"
}
```

- Response (500 - Internal server error)
```json
{
    "message": "Internal Server Error"
}
```

## Carts RESTful endpoints: 
## GET /cart
Get all carts (LEFT OUTER JOIN WITH PRODUCT)

- Request Header:
```json
{
    "access_token": "<your access token>"
}
```   

- Request Body:
```json
  not needed
```

- Response (200 - OK):
```json
[
  {
    "id": 19,
    "UserId": 5,
    "ProductId": 9,
    "quantity": 2,
    "createdAt": "2020-07-29T13:27:16.358Z",
    "updatedAt": "2020-07-29T13:27:16.358Z",
    "Product": {
        "id": 9,
        "name": "TV",
        "image_url": "https://ecs7.tokopedia.net/img/cache/700/product-1/2020/6/21/409743068/409743068_eabc2cad-5513-4f11-a53f-8da1990b49cc_1080_1080.jpg",
        "price": 11000000,
        "stock": 231,
        "createdAt": "2020-07-22T09:57:59.198Z",
        "updatedAt": "2020-07-25T01:53:35.213Z"
        }
    },
]
```

- Response (404 - Not Found):
```json
{
    "message": "Token is not Found!"
}
```

- Response 500: Internal server error
```json
{
    "message": "Internal Server Error"
}
```

## POST /cart/:productId
add new cart

- Request Header:
```json
{
    "access_token": "<your access token>"
}
```
- Request Params:
```json
{
    "productId": "integer <required>"
}
```

- Request Body:
```json
{
    "quantity": "<quantity to get insert into>",
}
```

- Response (201 - Created):
```json
{
    "id": "<given id by system>",
    "UserId": "<given UserId by req.userData.id>",
    "ProductId": "<given ProductId by request params>",
    "quantity": "<posted quantity>",
    "updatedAt": "2020-07-30T04:28:59.676Z",
    "createdAt": "2020-07-30T04:28:59.676Z"
}
```

- Response (400 - Bad Request):
```json
{
    "message": "Invalid requests"
}
```

- Response 500: Internal server error
```json
{
    "message": "Internal Server Error"
}
```

## GET /cart/:id
Get cart data by request id params

- Request Header:
```json
{
    "access_token": "<your access token>"
}
```

- Request Body:
```json
  not needed
```

- Response (200 - OK):
```json
{
    "id": "<cart id>",
    "UserId": "<cart UserId>",
    "ProductId": "<cart ProductId>",
    "quantity": "<cart quantity>",
    "updatedAt": "2020-07-30T04:28:59.676Z",
    "createdAt": "2020-07-30T04:28:59.676Z"
}
```

- Response (400 - Bad Request):
```json
{
    "message": "Invalid Request"
}
```

- Response (404 - Not Found):
```json
{
    "message": "Cart with ID: <req.params.id> is not found!"
}
```

- Response 500: Internal server error
```json
{
    "message": "Internal Server Error"
}
```

## PUT /cart/:id
Update cart by request id params

- Request Header:
```json
{
    "access_token": "<your access token>"
}
```

- Request Body:
```json
{
    "quantity": "<quantity value to be updated>",
}
```

- Response (200 - OK):
```json
{
    "message": "Succesfully Updated Cart!",
}
```

- Response (400 - Bad Request):
```json
{
    "message": "Invalid requests"
}
```

- Response (404 - Not Found):
```json
{
    "message": "Cart is not found!"
}
```

- Response 500: Internal server error
```json
{
    "message": "Internal Server Error"
}
```

## DELETE /cart/:id
Delete product by request id params

- Request Header:
```json
{
    "access_token": "<your access token>"
}
```

- Request Body:
```json
    not needed
```

- Response (200 - OK):
```json
{
    "message": "Succesfully Deleted Cart!",
}
```

- Response (400 - Bad Request):
```json
{
    "message": "Invalid requests"
}
```

- Response (404 - Not Found):
```json
{
    "message": "Cart with ID: <req.params.id> is not found!"
}
```

- Response (500 - Internal server error)
```json
{
    "message": "Internal Server Error"
}
```

## Users RESTful endpoints: 

## POST /users/register
register to create user's account

- Request Header
```json
    not needed
```

- Request Body
```json
{
    "email": "<email user>",
    "password": "<password user>",
    "role": "<role user>"
}
```

- Response (201 - Created)
```json
{
    "id": "<user id given by the system>",
    "email": "<posted email>",
    "password": "<posted hashed password>",
    "role": "<posted role>"
}
```

- Response (400 - Bad Request):
```json
{
    "message": "Invalid requests"
}
```

- Response (500 - Internal server error)
```json
{
    "message": "Internal Server Error"    
}
```

## POST /users/login
login to user's account

- Request Header
```json
    not needed
```

- Request Body
```json
{
    "email": "<email user>",
    "password": "<password user>"
}
```

- Response (200 - OK)
```json
{
    "id": "<user id given by the system>",
    "email": "<user email>",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYXlhbmFAZW1haWwuY29tIiwibmFtZSI6Im1heWEiLCJpYXQiOjE1OTQzNjQxNTB9.RgwDwM4MYu5_6x1nQrJ_CKj44-WkR32ZM6_dBZItp9w"
}
```

- Response (400 - Bad Request)
```json
{
    "errors": [ { "message": "Invalid email/password"} ]
}
```

- Response (500 - Internal server error)
```json
{
    "message": "Internal Server Error"    
}
```