# Spring Boot Backend
This is a simple shopping cart application that covers the list item. 

It is using an in memory h2 database. 

## How to Run
1. Navigate to `backend` directory
2. Use the command:

```
./mvnw spring-boot:run
```

List of API endpoints:
- `GET /api/lists`
- `POST /api/lists`
- `POST /api/lists/{listId}/items`
- `GET /api/lists/{listId}/items`
