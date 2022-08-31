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