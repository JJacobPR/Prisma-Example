# Setting up Test Project with PostgreSQL

## 1. Install Dependencies

```console
npm install
```

## 2. Configure/Create .env file (adjust db url according to your setup)

```js
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://{username}:{password}@localhost:5432/{db name}"
```

### 3. Generate Schema

```console
npx prisma generate
```

### 4. Migrate to Database

```console
npx prisma migrate dev --name init
```

### 3. Seed Database

```console
npx prisma db seed
```

## 4. Run Project

```console
npm run dev
```
