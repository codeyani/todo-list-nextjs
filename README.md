# Codeyani - ToDo List - NextJS

Welcome to the TodoList App! This guide will help you set up and run the project locally.

## Prerequisites

- Node.js installed on your machine
- A Vercel Postgres database

## Setup Instructions

### 1. Clone the Repository

```bash
git clone git@github.com:codeyani/todo-list-nextjs.git
cd todo-list-nextjs
```

### 2.  Install Dependencies

Run the following command to install all the required dependencies:

```bash
npm install

```

### 3. Create a .env File

Create a .env file in the root directory of your project and add the following environment variables:

```bash
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NO_SSL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=
```

-  This is the connection string for your Vercel Postgres database. You can get this from your Vercel dashboard.

### 4. Migrate the Database

Run the following command to migrate your database:

```bash
npx prisma db push
```


### 5. View the Database in Prisma Studio

To view and interact with your database using Prisma Studio, run:

```bash
npx prisma studio

```

### 6. Run the Development Server
After setting up the environment variables, run the development server:

```bash
npm run dev
```

Your application should now be running on http://localhost:3000.

## Screenshot
Below is a screenshot of the application for reference:

![Todo Page](images/todo.png)
![Edit Page](images/edit.png)
![Add Page](images/add.png)
![Delete Page](images/delete.png)
![Done Page](images/done_task.png)

## Contributing
Feel free to submit issues or pull requests if you have any suggestions or improvements.


