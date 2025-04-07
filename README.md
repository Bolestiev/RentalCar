🚗 RentalCar – Car Rental Web Application

🔎 Project Overview

RentalCar is a frontend web app designed for a car rental service. It lets users explore vehicles, apply filters to narrow down choices, view car specifications, and book rentals. Built with React and Vite, the app leverages Redux for effective state management.

✨ Key Features

🏠 Home Page

Features a promotional banner with a call-to-action.

🚘 Car Catalog

Lists all available rental vehicles.

Allows filtering by brand, price, and mileage (server-side filtering via API).

Supports adding cars to a favorites list (data persists after reload).

Implements infinite scroll via a "Load More" button (API pagination).

📄 Car Details Page

Displays detailed specifications and images of the selected vehicle.

Includes a booking form.

Shows a success message upon confirmation.

🧭 Navigation & Routes

/ — Home

/catalog — Car Listings

/catalog/:id — Car Detail View

🧠 User Experience Enhancements

Mileage is formatted with spaces (e.g., “5 000 km”).

Layout and visuals follow provided UI mockups.

Desktop-first design with responsive behavior where needed.

🛠️ Technology Stack

⚛️ React with Vite

📦 Redux for state management

🧭 React Router for routing

🌐 Axios for API requests

🎨 Styling: Flexible (CSS Modules, Styled Components, MUI, etc.)
