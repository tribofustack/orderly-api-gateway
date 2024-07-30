<h1 align="center">Orderly API Gateway</h1>

<p align="right">
  <a href="#-license">
    <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=ed2945&labelColor=000000">
  </a>
</p>

<br>

## 💻 Project


Orderly is a cutting-edge web system designed to streamline operations for restaurant and food businesses (RMS). It draws from the principles of **Domain-Driven Design (DDD)** and **Architectural Concepts** to ensure scalability, maintainability, and a robust integration capability.

<br>

## 🔗 Links

- [Wiki](https://github.com/tribofustack/orderly-api-gateway/wiki)
- [Postman Public Collection](https://documenter.getpostman.com/view/13574011/2s9YsM8WDL)

<br>

## 🟢 Running

Prerequisites: Ensure you have `docker`, `node>=18.16.0` & `npm>=9.5.1` installed.

1. Clone this project:

```sh
git clone https://github.com/tribofustack/orderly-api-gateway.git
```

2. Configure submodules:
  - [ms-auth](<https://github.com/tribofustack/ms-auth.git>)
  - [ms-checkin](<https://github.com/tribofustack/ms-checkin.git>)
  - [ms-checkout](<https://github.com/tribofustack/ms-checkout.git>)
  - [ms-financial](<https://github.com/tribofustack/ms-financial.git>)

3. Start the application:

```sh
docker compose up
```

This will launch the application at port `80`.


<br>

## 📌 Architecture Diagram

<div align="center">

  ![SystemDesign](https://github.com/user-attachments/assets/c441a853-498d-4c5c-a2e3-c5ff3dc89707)

  ![Subtitle](https://github.com/user-attachments/assets/4de6ec1e-a7c9-4a69-86b4-acef7dcef7d6)


</div>

<br>
