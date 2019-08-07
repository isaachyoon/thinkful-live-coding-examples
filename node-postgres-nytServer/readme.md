# NYT Best Sellers
_This is a demo project for Introduction to Express_

## Usage
Clone this repo then install dependencies

```bash
$ npm install
```

Start the server

```bash
$ npm start
```

## Test
Tests have not been implemented. Tests are introduced in the next lesson.

## Endpoints
Only one interesting endpoint: `/books` with parameters:

Parameter | Values | Description
--- | --- | ---
search | A string | return all books with that string in the title, if not provided return all books
sort | one of price or rank | sort the results by either price or rank, if not provided no sorting takes place

