# Register
POST /api/register
- Request Payload
-- ```{"full_name":"", "password":"", "email":""}```
- Response Payload
-- Success 200
--- ```{"message": "Successfully registered"}```
-- Failure 400
--- ```{"message": "Something went wrong"}```

# Login
POST /api/login
- Request Payload
-- ```{"email":"", "password":""}```
- Response Payload
-- Success 200
--- ```{"x-bhakt-token": "<some token, for now lets keep DB Id>"}```
-- Failure 400
--- ```{"message": "Something went wrong"}```

# Pooja
GET /api/pooja
- Header
-- x-bhakt-token: <token:jwt>
- Response Payload
-- Success 200
--- ```
{
  "allPooja":[
    {
      "id": "<poojaId:integer>",
      "name": "<name:String>"
      "imageUrl":"<url:String>"
    },
    {},
    ....
  ]
}
```
-- Failure 400
--- ```{"message": "Something went wrong"}```

# Me
GET /api/me
- Header
-- x-bhakt-token: <token:jwt>
- Response Payload
-- Success 200
--- ```
{
  "me":{
    "name": "<name:String>"
  }
}
```
-- Failure 400
--- ```{"message": "Something went wrong"}```