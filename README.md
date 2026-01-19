# Passenger + srvx Demo

A simple Node.js web application using [Phusion Passenger](https://www.phusionpassenger.com/) and [srvx](https://srvx.unjs.io/).

## Quick Start

```bash
docker-compose up
```

The app will be available at http://localhost:8080

## Auto-Reload

The setup includes file watching. When you modify `app.mjs`, Passenger will automatically restart the application.

## Project Structure

- `app.mjs` - Main application entry point
- `webapp.conf` - Nginx/Passenger configuration
- `docker-compose.yml` - Docker setup with auto-reload
