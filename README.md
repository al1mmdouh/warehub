# WareHub: Integrated Storage and Shipping Management Platform

WareHub is a centralized platform designed to streamline warehouse management and shipping processes. It connects warehouse owners with businesses in need of storage and shipping services, providing a seamless and efficient solution for both parties.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Architecture and Technologies](#architecture-and-technologies)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [Testing](#testing)
- [Deployment](#deployment)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

## Installation

1. Clone the repository:
    git clone https://github.com/your-username/warehub.git

2. Frontend Setup:
    1- Install the Angular CLI globally:
        npm install -g @angular/cli
    2- Navigate to the frontend directory:
        cd warehub/frontend
    3- Install the dependencies:
        npm install

3. Backend Setup:
    1- Install the Composer dependencies:
        cd ../backend
        composer install
    2- Set up the database:
        cp .env.example .env
        php artisan key:generate
        #### Update the .env file with your database credentials
        php artisan migrate
    3- Start the development server:
        php artisan serve

4. Start the development servers:
    1- Start the Angular development server:
        cd ../frontend
        ng serve
    2- Start the Laravel development server:
        cd ../backend
        php artisan serve

5. Visit http://localhost:4200 in your web browser to access WareHub.



## Usage


1. Warehouse Owners:
•	Register your facility on WareHub, providing relevant details such as location, available space, and storage conditions.
•	Manage your warehouse through the dedicated section provided on the website.

2.Businesses:
•	-Register on WareHub and specify your storage and shipping requirements.
•	-Browse through available warehouses based on your needs and make connections with warehouse owners.
•	-Utilize the platform's negotiation, contract, and payment features to streamline the process.


## Features

•	Warehouse Management: WareHub provides a centralized system for managing warehouses. Warehouse owners can register their facilities and provide details such as location and available space.
•	Business Registration: Businesses can register and browse through available warehouses based on their specific requirements, including desired space, storage conditions, and shipping services.
•	Shipping Integration: WareHub integrates with a shipping company to provide an automated fee calculation system based on factors like distance, weight, and shipping method.
•	Brokerage Services: Acting as a broker, WareHub facilitates connections between warehouse owners and businesses seeking storage and shipping services. It provides a secure environment for negotiations, contracts, and payments.


## Architecture and Technologies

WareHub is built using the Laravel framework for the backend and Angular for the frontend. The application follows the Model-View-Controller (MVC) architectural pattern. Laravel provides powerful features such as routing, dependency injection, database ORM, and queue system. Angular enables the creation of dynamic and responsive user interfaces.