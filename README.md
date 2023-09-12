# Midjourney Node API

This is a simple node js api for creating and streaming images using [Midjourney Node.js client](https://github.com/erictik/midjourney-api). This API offers three main routes: `imagine`, `upscale`, and `variant`.

This README provides an overview of these routes and how to use them.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Imagine Route](#imagine-route)
  - [Upscale Route](#upscale-route)
  - [Variant Route](#variant-route)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up the Midjourney Node.js API and start using its image manipulation capabilities, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/midjourney-nodejs-api.git
   ```

2. Navigate to the project directory:

   ```bash
    cd midjourney-nodejs-api
    ```

3. Install the necessary dependencies:

    ```bash
    yarn install
    ```

4. Configure your environment variables by creating a .env file in the project root directory. You can use the .env.example file as a template.

5. Start the API server:

    ```bash
    yarn dev
    ```

6. You can import the postman json file in your postman app.

## Usage

### Imagine Route

The 'imagine' route allows you to create images based on a provided prompt.

- **HTTP Method:** POST
- **Endpoint:** `/imagine`
- **Request Payload:**

```json
{
  "prompt": "Image prompt"
}
```

**Response**: The API will respond with the created image data.

### Upscale Route

The 'upscale' route is used to upscale an image.

- **HTTP Method:** POST
- **Endpoint:** `/upscale`
- **Request Payload:**

```json
{
  "id": "111",
  "index": 1,
  "hash": "111",
  "content": "Image prompt"
}

```

**Response**: The API will respond with the created image data.

### Variant Route

The 'variant' route is similar to the 'upscale' route and is used to create a variant of an image.

- **HTTP Method:** POST
- **Endpoint:** `/variant`
- **Request Payload:**

```json
{
  "id": "111",
  "index": 1,
  "hash": "111",
  "content": "Image prompt"
}

```

**Response**: The API will respond with the created image data.

## License

This project is licensed under the MIT License.
