<h1 align="center">Orderly API Gateway</h1>

<p align="center">
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#-project">Links</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Tecnologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-running">Running</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-diagram">Arch Diagram</a>
</p>

<p align="center">
  <a href="#-license">
    <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=ed2945&labelColor=000000">
  </a>
</p>

## 💻 Project


Orderly is a cutting-edge web system designed to streamline operations for restaurant and food businesses (RMS). It draws from the principles of **Domain-Driven Design (DDD)** and **Architectural Concepts** to ensure scalability, maintainability, and a robust integration capability.

## 🔗 Links

- [Demonstration Video]()
- [Postman Public Collection](https://documenter.getpostman.com/view/13574011/2s9YsM8WDL)

## ✨ Technologies

This project was built using the following technologies and architectural concepts:

- [Kong API Gateway](https://konghq.com/)
- [NGINX](https://www.nginx.com/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [RabbitMQ](https://rabbitmq.com/)
- [Kubernetes](<https://kubernetes.io/>)


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

Once it's up, the Swagger documentation can be accessed at `http://localhost:80/`.

## 📌 Architecture Diagram

<div align="center">
  <img src="./assets/arch.png" alt="ER Diagram" />
</div>

<br>