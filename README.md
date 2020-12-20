# Records Finder

An API for finding records between a Start date and an End date.

## Features

- Fetches records using a "Start Date" and an "End Date"

## Technologies

- [Express.js](https://expressjs.com/) as the web framework.
- Linting with [ESlint](https://github.com/eslint/eslint/).
- Testing with [Mocha](https://mochajs.org/).
- Testing with [Chai](https://www.chaijs.com/).

## Getting started

```sh
# Clone the project
git clone https://github.com/olamilekan000/Records-Finder.git
cd Records-Finder

# Install dependencies
npm install

```

Set Environment Variables

```sh
MONGODB_URL_DEV=<mongodburl>
PORT=9094
```

Then you can start the application:

```sh
npm run dev
```

This will launch the server [node](https://nodejs.org/en/) process on port 9094

### Documentation

To fetch records between a specified date, make a POST request to the endpoint below using the payload as seen below

```sh

  <BASE_URL>/api/v1/counts

```

```sh
  POST {
    "startDate": "2016-01-26", 
    "endDate": "2016-02-26", 
    "minCount": 2700, 
    "maxCount": 3000
  }
```

This should return a list of records as shown below:

```sh
{
  "code": 0,
  "message": "success",
  "records": [
    {
      "key": "tQeCgNPH",
      "createdAt": "2016-02-24T08:17:05.921Z",
      "totalCount": 2783
    },
    {
      "key": "tQeCgNPH",
      "createdAt": "2016-02-24T08:17:05.921Z",
      "totalCount": 2783
    },
    {
      "key": "wtSjVcpg",
      "createdAt": "2016-02-22T11:13:43.165Z",
      "totalCount": 2888
    },
    {
      "key": "kkxEdhft",
      "createdAt": "2016-02-19T06:35:39.409Z",
      "totalCount": 2980
    },
    {
      "key": "UYOsBBSI",
      "createdAt": "2016-02-14T15:31:29.518Z",
      "totalCount": 2948
    },
    {
      "key": "fYwcJdst",
      "createdAt": "2016-02-12T10:01:57.502Z",
      "totalCount": 2790
    },
    {
      "key": "fYwcJdst",
      "createdAt": "2016-02-12T10:01:57.502Z",
      "totalCount": 2790
    },
    {
      "key": "bxoQiSKL",
      "createdAt": "2016-01-29T01:59:53.494Z",
      "totalCount": 2991
    },
    {
      "key": "NOdGNUDn",
      "createdAt": "2016-01-28T07:10:33.558Z",
      "totalCount": 2813
    }
  ]
}
```

Linting is set up using [ESlint](https://github.com/eslint/eslint/).
It uses the rules as specificed in the .eslintrc.js file which can be found in the
root directory.

Begin linting with the following command:

```sh
npm run lint
```
