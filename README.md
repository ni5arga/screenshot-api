# Screenshot API

A simple API to capture screenshots of web pages using Puppeteer and Express.

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository or download the source code.

   ```sh
   git clone https://github.com/your-username/screenshot-api.git
   cd screenshot-api
   ```

2. Install the required dependencies.

   ```sh
   npm install
   ```

## Usage

1. Start the server.

   ```sh
   node index.js
   ```

2. Open your browser and navigate to `http://localhost:3000/screenshot?url=<URL_TO_CAPTURE>`, replacing `<URL_TO_CAPTURE>` with the URL of the web page you want to capture.

   For example:

   ```sh
   http://localhost:3000/screenshot?url=https://example.com
   ```

## API Endpoint

### `GET /screenshot`

#### Query Parameters

- `url` (string): The URL of the web page to capture. This parameter is required.

#### Response

- `200 OK`: Returns a PNG image of the captured screenshot.
- `400 Bad Request`: If the `url` query parameter is missing.
- `500 Internal Server Error`: If an error occurs while taking the screenshot.

## Example Request

```sh
curl "http://localhost:3000/screenshot?url=https://example.com" --output screenshot.png
```

## Dependencies

- [puppeteer](https://www.npmjs.com/package/puppeteer)
- [express](https://www.npmjs.com/package/express)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## Acknowledgments

- [Puppeteer](https://github.com/puppeteer/puppeteer) - Headless Chrome Node API
- [Express](https://expressjs.com/) - Web framework for Node.js

