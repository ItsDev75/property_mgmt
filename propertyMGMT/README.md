# Property Management Microservice

A TypeScript-based backend microservice for managing property details using Express.js, Sequelize, and MySQL.

## Features

- Full CRUD operations for property management
- Input validation using Joi
- Structured logging with Winston
- Authentication middleware
- Rate limiting
- API documentation with Swagger
- Error handling
- TypeScript support

## Prerequisites

- Node.js (v18+)
- MySQL (v8+)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd property-mgmt
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
# Database Configuration
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database
DB_PORT=3306

# Application Configuration
NODE_ENV=development
PORT=3002

# Logging Configuration
LOG_LEVEL=info

# Security Configuration
JWT_SECRET=your_jwt_secret_key
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

4. Create the database and run migrations:
```bash
mysql -u your_username -p your_database < src/database/migrations/001_create_property_table.sql
```
## Command for installing dependencies
```bash
npm install cors@^2.8.5 dotenv@^16.0.3 express@^4.18.2 express-rate-limit@^6.7.0 helmet@^6.0.1 joi@^17.7.0 morgan@^1.10.0 mysql2@^3.2.0 property-mgmt@file: sequelize@^6.28.0 swagger-jsdoc@^6.2.8 swagger-ui-express@^4.6.0 winston@^3.8.2 \
@types/cors@^2.8.13 @types/express@^4.17.17 @types/helmet@^4.0.0 @types/jest@^29.4.0 @types/morgan@^1.9.4 @types/node@^18.13.0 @types/supertest@^2.0.12 @types/swagger-jsdoc@^6.0.4 @types/swagger-ui-express@^4.1.8 \
@typescript-eslint/eslint-plugin@^5.49.0 @typescript-eslint/parser@^5.49.0 eslint@^8.32.0 jest@^29.4.1 prettier@^2.8.3 supertest@^6.3.3 ts-node-dev@^2.0.0 typescript@^4.9.5 --save-dev
```
## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm run build
npm start
```

## API Endpoints

### Property Management

- `POST /api/property` - Create a new property
- `GET /api/property/:id` - Get property by ID
- `PUT /api/property/:id` - Update property
- `DELETE /api/property/:id` - Delete property
- `GET /api/properties` - List properties (with pagination and filtering)

## Testing

Run the test suite:
```bash
npm test
```

## API Documentation

Access the Swagger documentation at:
```
http://localhost:3002/api-docs
```

## Error Handling

The API returns standardized error responses:

```json
{
  "success": false,
  "message": "Error message",
  "error": {
    "field": "field_name",
    "issue": "error description"
  }
}
```

## Logging

Logs are stored in:
- `error.log` - Error logs
- `combined.log` - All logs

## Security

- JWT-based authentication
- Rate limiting
- CORS enabled
- Helmet security headers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License. 
