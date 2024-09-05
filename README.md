# Google Search Clone

This project is a Google Search clone built with React, utilizing the Google Search API from RapidAPI.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/google-search-clone.git
   cd google-search-clone
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your RapidAPI key:
   ```
   REACT_APP_API_KEY=your_rapidapi_key_here
   ```

   You can obtain a RapidAPI key by signing up at [RapidAPI](https://rapidapi.com/) and subscribing to the [Google Search API](https://rapidapi.com/apigeek/api/google-search3/).

### Running the Application

To start the development server:

```
npm start
```

The application will be available at `http://localhost:3000`.

## Project Structure

- `src/components/`: Contains all React components
- `src/contexts/`: Contains the StateContext for global state management
- `src/index.js`: Entry point of the application
- `src/App.js`: Main application component

## Features

- Web search
- Image search
- News search
- Video search

## Troubleshooting

If you encounter issues with API rate limiting, try the following:
- Increase the delay between requests in `src/contexts/StateContextProvider.js`
- Check your API usage on RapidAPI dashboard
- Consider upgrading your API plan for higher rate limits

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Google Search API provided by RapidAPI
- React and its community for excellent documentation and support
