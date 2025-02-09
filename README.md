# Hotelia - Hotel Management Web Application

Hotelia is a hotel management web application that allows users to manage hotel details such as the name, address, price, rooms, amenities, images, and ratings. The app provides a seamless interface for hotel owners to update hotel details and manage amenities easily.

The application leverages **Next.js**, **NextAuth.js** for authentication, and **MongoDB** for data storage. It allows users to edit hotel information and view available hotel management options. 

---

## Features

- **Authentication**: Secure login and authentication using **NextAuth.js**.
- **Hotel Management**: Add, edit, and manage hotel details including amenities, image URL, rooms, price, etc.
- **Amenities Management**: Toggle amenities for hotels (Wi-Fi, parking, restaurant, gym, pool, spa).
- **Responsive Design**: Mobile-friendly and responsive UI.
- **Form Validation**: Ensure valid input and required fields for hotel data.

---

## Tech Stack

- **Frontend**: 
  - [Next.js](https://nextjs.org) (React framework)
  - [TailwindCSS](https://tailwindcss.com/) for styling
  - [NextAuth.js](https://next-auth.js.org/) for authentication
- **Backend**: 
  - [Node.js](https://nodejs.org/) 
  - [MongoDB](https://www.mongodb.com/) for database
  - [API Routes](https://nextjs.org/docs/api-routes/introduction) for handling requests
- **Hosting**:
  - [Vercel](https://vercel.com/) for deployment

---

## Demo

Check out the live site here: [https://hotelia-sigma.vercel.app](https://hotelia-sigma.vercel.app)

---

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/) (LTS version recommended)
- [MongoDB](https://www.mongodb.com/) or a MongoDB Atlas account for cloud DB setup.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/gaznafis007/hotelia.git
    ```

2. Navigate to the project folder:
    ```bash
    cd hotelia
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables:
    - Create a `.env.local` file in the root directory.
    - Add the following environment variables:

    ```
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your_nextauth_secret
    MONGODB_URI=your_mongodb_connection_string
    ```

5. Start the development server:
    ```bash
    npm run dev
    ```

    Your app should now be running at [http://localhost:3000](http://localhost:3000).

---

## API Routes

The following API routes are available:

### Hotel Management Routes

- **GET** `/api/hotels/[id]`: Fetch details of a hotel by its ID.
- **PUT** `/api/hotels/[id]`: Update details of a hotel by its ID.
- **POST** `/api/hotels`: Add a new hotel.

### Authentication Routes (Using NextAuth.js)

- **GET** `/api/auth/[...nextauth]`: Handles authentication flows such as sign-in, sign-out, and session management.

---

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Please ensure that your code follows the coding style of the project and that it works as expected before submitting the pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- [Next.js](https://nextjs.org/) - The React framework used to build this application.
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework used for styling.
- [NextAuth.js](https://next-auth.js.org/) - Authentication library for Next.js.
- [MongoDB](https://www.mongodb.com/) - NoSQL database used for storing hotel data.

---

## Contact

If you have any questions or feedback, feel free to contact me at [gaznafis007@gmail.com](mailto:gaznafis007@gmail.com).

