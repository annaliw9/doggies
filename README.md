# Adopt A Dog

A modern React web app that allows users to browse dog breeds, explore breed galleries, and save favorite dogs using TheDogAPI.

---

## Features

- Browse dog breeds
- View breed details
- Explore breed image galleries
- Save favorite dogs
- Remove favorites

---

## Tech Stack

- React
- React Router
- JavaScript
- CSS
- TheDogAPI

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/annaliw9/doggies.git
```

---

### 2. Navigate into the project

```bash
cd doggies
```

---

### 3. Install dependencies

```bash
npm install
```

---

### 4. Create environment variables

Create a `.env` file in the root directory:

```env
VITE_API_KEY=your_api_key_here
```

Get your API key from:

https://thedogapi.com

---

### 5. Start the development server

```bash
npm run dev
```

---

## 📁 Project Structure

```bash
src/
│
├── api/
│   ├── dogApi.js
│   └── favoritesApi.js
│
├── components/
│   ├── DogCard/
│   ├── DogDetails/
│   ├── Header/
│   ├── Footer/
│   └── Pagination/
│
├── Pages/
│   ├── Home/
│   ├── Favorites/
│   └── DogImages/
│
├── utils/
│   └── paginationUtils.js
│
├── App.jsx
└── main.jsx
```

---

## API Endpoints Used

### Breeds
```http
GET /v1/breeds
```

### Breed by Id
```http
GET /v1/breeds/id
```

### Breed Images
```http
GET /v1/images/search?breed_ids={id}&limit=${limit}&page=${page}
```

### Favorites
```http
POST /v1/favourites
GET /v1/favourites
DELETE /v1/favourites/{id}
```

---

## Author

Shuna Li

GitHub: https://github.com/annaliw9

---
