# Becosial

## Description

[**Becosial**](https://github.com/Zak-Roz/becosial.git)

## Technologies

The main frameworks and libraries used in the project are listed here. A complete list of technologies used for each part of the project is in the `package.json` files in the `server` folder.

### Common

1. ESLatest
2. [Git](https://git-scm.com/doc)
3. [REST API](https://www.restapitutorial.com/lessons/restquicktips.html)
4. [npm](<https://en.wikipedia.org/wiki/Npm_(software)>)

### Backend

1. [Node.js](https://nodejs.org/en/)
2. [Express](https://www.npmjs.com/package/express)
3. [autoBind](https://www.npmjs.com/package/auto-bind)
4. [mongoose](https://www.npmjs.com/package/mongoose)
5. [nodemon](https://www.npmjs.com/package/nodemon)
6. [pluralize](https://www.npmjs.com/package/pluralize)
7. [dotenv](https://www.npmjs.com/package/dotenv)

### Database

1. [MongoDB](https://www.mongodb.com/try/download/community 'MongoDB')

## Installation

1. Get the latest stable version [Node.js](https://nodejs.org/en/ 'Node.js') (LTS). **Note:** npm will be installed automatically. Check the correctness of the installation: to do this, run in the command line (terminal):

   ```
   node -v  // for checking Node.js version
   npm -v // for checking npm version
   ```

2. Get the latest stable version [MongoDB](https://www.mongodb.com/try/download/community 'MongoDB') for your OS. Check the correctness of the work - try to create a database, a table - for this you can use [ROBO 3T](https://studio3t.com/download-studio3t-free/ 'ROBO 3T') or any other convenient way you find.

3. Install Git.

4. Clone project`s [repo](https://github.com/Zak-Roz/becosial.git):

   ```
   git clone https://github.com/Zak-Roz/becosial.git
   ```

### Root of project

1. In the root of the project, you can install all the dependencies with one command:

   ```
   npm run install:start
   ```

This will install the dependencies for the root directory and run app.

2. Next time, run the program using the command:

   ```
   npm start
   ```

## Open Postman and run the following commands:

| Name    | DataType         |
| ------- | ---------------- |
| user_id | string or number |
| amount  | number           |

1. Top up the wallet (POST)

```
http://localhost:9009/api/transactions/enrollment
```

Add to request body (in JSON format):

```
{
  "user_id": 1,
  "amount": 125.5
}
```

Request response (JSON format):
```
{
  "error": false,
  "responseTimestamp": "2022-08-25T20:39:29.957Z",
  "statusCode": 200,
  "data": {
    "user_id": "1",
    "balance": 2304
  }
}
```

2. Withdraw money from the wallet (POST)

```
http://localhost:9009/api/transactions/withdrawal
```

Add to request body (in JSON format):

```
{
  "user_id": 2,
  "amount": 125.5
}
```

Request response (JSON format):
```
{
  "error": false,
  "responseTimestamp": "2022-08-25T20:43:34.482Z",
  "statusCode": 200,
  "data": {
    "user_id": "1",
    "balance": 2178.5
  }
}
```

3. View wallet balance (GET)

```
http://localhost:9009/api/transactions/balance
```

Add to request body (in JSON format):

```
{
  "user_id": "1"
}
```

Request response (JSON format):
```
{
  "error": false,
  "responseTimestamp": "2022-08-25T20:43:13.793Z",
  "statusCode": 200,
  "data": {
    "user_id": "1",
    "balance": 2304
  }
}
```


| Name     | DataType         |
| -------- | ---------------- |
| sender   | string or number |
| receiver | string or number |
| amount   | number           |

4. Money transfer from one user to another (POST)

```
http://localhost:9009/api/transactions/p2p
```

Add to request body (in JSON format):

```
{
  "sender": "2",
  "receiver": "1",
  "amount": 100
}
```

Request response (JSON format):
```
{
  "sender": "2",
  "receiver": "1",
  "amount": 100
}
```

| Name    | DataType         |
| ------- | ---------------- |
| user_id | string or number |
| page    | number           |
| limit   | number           |
| sortBy  | object           |

5. View logs by user (GET)

```
http://localhost:9009/api/transactions/logs
```

Add to request body (in JSON format):

```
{
  "page": 1,
  "limit": 5,
  "sortBy": {
      "date": "ASC",
      "balance": "DESC"
  },
  "user_id": 2
}
```

Request response (JSON format):
```
{
  "error": false,
  "responseTimestamp": "2022-08-25T20:41:52.799Z",
  "statusCode": 200,
  "data": [
    {
      "user_id": "2",
      "balance": 125.5,
      "description": "",
      "date": "2022-08-25T15:43:39.370Z",
      "system_description": "Replenishment of the online wallet of the user \"2\""
    },
    {
      "user_id": "2",
      "balance": 251,
      "description": "",
      "date": "2022-08-25T15:43:39.672Z",
      "system_description": "Replenishment of the online wallet of the user \"2\""
    },
    {
      "user_id": "2",
      "balance": 376.5,
      "description": "",
      "date": "2022-08-25T15:43:40.413Z",
      "system_description": "Replenishment of the online wallet of the user \"2\""
    },
    {
      "user_id": "2",
      "balance": 502,
      "description": "",
      "date": "2022-08-25T17:19:26.034Z",
      "system_description": "Replenishment of the online wallet of the user \"2\""
    },
    {
      "user_id": "2",
      "balance": 402,
      "date": "2022-08-25T17:19:49.674Z",
      "system_description": "Money transfer to the user \"1\""
    }
  ],
  "totalCount": 18
}
```

6. View available currencies

```
http://localhost:9009/api/transactions/symbols
```

Request response (JSON format):
```
{
  "error": false,
  "responseTimestamp": "2022-08-25T20:29:41.656Z",
  "statusCode": 200,
  "data": {
    "success": true,
    "symbols": {
      "AED": "United Arab Emirates Dirham",
      "AFN": "Afghan Afghani",
      "ALL": "Albanian Lek",
      "AMD": "Armenian Dram",
      "ANG": "Netherlands Antillean Guilder",
      "AOA": "Angolan Kwanza",
      "ARS": "Argentine Peso",
      "AUD": "Australian Dollar",
      "AWG": "Aruban Florin",
      "AZN": "Azerbaijani Manat",
      "BAM": "Bosnia-Herzegovina Convertible Mark",
      "BBD": "Barbadian Dollar",
      "BDT": "Bangladeshi Taka",
      "BGN": "Bulgarian Lev",
      "BHD": "Bahraini Dinar",
      "BIF": "Burundian Franc",
      "BMD": "Bermudan Dollar",
      "BND": "Brunei Dollar",
      "BOB": "Bolivian Boliviano",
      "BRL": "Brazilian Real",
      "BSD": "Bahamian Dollar",
      "BTC": "Bitcoin",
      "BTN": "Bhutanese Ngultrum",
      "BWP": "Botswanan Pula",
      "BYN": "New Belarusian Ruble",
      "BYR": "Belarusian Ruble",
      "BZD": "Belize Dollar",
      "CAD": "Canadian Dollar",
      "CDF": "Congolese Franc",
      "CHF": "Swiss Franc",
      "CLF": "Chilean Unit of Account (UF)",
      "CLP": "Chilean Peso",
      "CNY": "Chinese Yuan",
      "COP": "Colombian Peso",
      "CRC": "Costa Rican Colón",
      "CUC": "Cuban Convertible Peso",
      "CUP": "Cuban Peso",
      "CVE": "Cape Verdean Escudo",
      "CZK": "Czech Republic Koruna",
      "DJF": "Djiboutian Franc",
      "DKK": "Danish Krone",
      "DOP": "Dominican Peso",
      "DZD": "Algerian Dinar",
      "EGP": "Egyptian Pound",
      "ERN": "Eritrean Nakfa",
      "ETB": "Ethiopian Birr",
      "EUR": "Euro",
      "FJD": "Fijian Dollar",
      "FKP": "Falkland Islands Pound",
      "GBP": "British Pound Sterling",
      "GEL": "Georgian Lari",
      "GGP": "Guernsey Pound",
      "GHS": "Ghanaian Cedi",
      "GIP": "Gibraltar Pound",
      "GMD": "Gambian Dalasi",
      "GNF": "Guinean Franc",
      "GTQ": "Guatemalan Quetzal",
      "GYD": "Guyanaese Dollar",
      "HKD": "Hong Kong Dollar",
      "HNL": "Honduran Lempira",
      "HRK": "Croatian Kuna",
      "HTG": "Haitian Gourde",
      "HUF": "Hungarian Forint",
      "IDR": "Indonesian Rupiah",
      "ILS": "Israeli New Sheqel",
      "IMP": "Manx pound",
      "INR": "Indian Rupee",
      "IQD": "Iraqi Dinar",
      "IRR": "Iranian Rial",
      "ISK": "Icelandic Króna",
      "JEP": "Jersey Pound",
      "JMD": "Jamaican Dollar",
      "JOD": "Jordanian Dinar",
      "JPY": "Japanese Yen",
      "KES": "Kenyan Shilling",
      "KGS": "Kyrgystani Som",
      "KHR": "Cambodian Riel",
      "KMF": "Comorian Franc",
      "KPW": "North Korean Won",
      "KRW": "South Korean Won",
      "KWD": "Kuwaiti Dinar",
      "KYD": "Cayman Islands Dollar",
      "KZT": "Kazakhstani Tenge",
      "LAK": "Laotian Kip",
      "LBP": "Lebanese Pound",
      "LKR": "Sri Lankan Rupee",
      "LRD": "Liberian Dollar",
      "LSL": "Lesotho Loti",
      "LTL": "Lithuanian Litas",
      "LVL": "Latvian Lats",
      "LYD": "Libyan Dinar",
      "MAD": "Moroccan Dirham",
      "MDL": "Moldovan Leu",
      "MGA": "Malagasy Ariary",
      "MKD": "Macedonian Denar",
      "MMK": "Myanma Kyat",
      "MNT": "Mongolian Tugrik",
      "MOP": "Macanese Pataca",
      "MRO": "Mauritanian Ouguiya",
      "MUR": "Mauritian Rupee",
      "MVR": "Maldivian Rufiyaa",
      "MWK": "Malawian Kwacha",
      "MXN": "Mexican Peso",
      "MYR": "Malaysian Ringgit",
      "MZN": "Mozambican Metical",
      "NAD": "Namibian Dollar",
      "NGN": "Nigerian Naira",
      "NIO": "Nicaraguan Córdoba",
      "NOK": "Norwegian Krone",
      "NPR": "Nepalese Rupee",
      "NZD": "New Zealand Dollar",
      "OMR": "Omani Rial",
      "PAB": "Panamanian Balboa",
      "PEN": "Peruvian Nuevo Sol",
      "PGK": "Papua New Guinean Kina",
      "PHP": "Philippine Peso",
      "PKR": "Pakistani Rupee",
      "PLN": "Polish Zloty",
      "PYG": "Paraguayan Guarani",
      "QAR": "Qatari Rial",
      "RON": "Romanian Leu",
      "RSD": "Serbian Dinar",
      "RUB": "Russian Ruble",
      "RWF": "Rwandan Franc",
      "SAR": "Saudi Riyal",
      "SBD": "Solomon Islands Dollar",
      "SCR": "Seychellois Rupee",
      "SDG": "Sudanese Pound",
      "SEK": "Swedish Krona",
      "SGD": "Singapore Dollar",
      "SHP": "Saint Helena Pound",
      "SLL": "Sierra Leonean Leone",
      "SOS": "Somali Shilling",
      "SRD": "Surinamese Dollar",
      "STD": "São Tomé and Príncipe Dobra",
      "SVC": "Salvadoran Colón",
      "SYP": "Syrian Pound",
      "SZL": "Swazi Lilangeni",
      "THB": "Thai Baht",
      "TJS": "Tajikistani Somoni",
      "TMT": "Turkmenistani Manat",
      "TND": "Tunisian Dinar",
      "TOP": "Tongan Paʻanga",
      "TRY": "Turkish Lira",
      "TTD": "Trinidad and Tobago Dollar",
      "TWD": "New Taiwan Dollar",
      "TZS": "Tanzanian Shilling",
      "UAH": "Ukrainian Hryvnia",
      "UGX": "Ugandan Shilling",
      "USD": "United States Dollar",
      "UYU": "Uruguayan Peso",
      "UZS": "Uzbekistan Som",
      "VEF": "Venezuelan Bolívar Fuerte",
      "VND": "Vietnamese Dong",
      "VUV": "Vanuatu Vatu",
      "WST": "Samoan Tala",
      "XAF": "CFA Franc BEAC",
      "XAG": "Silver (troy ounce)",
      "XAU": "Gold (troy ounce)",
      "XCD": "East Caribbean Dollar",
      "XDR": "Special Drawing Rights",
      "XOF": "CFA Franc BCEAO",
      "XPF": "CFP Franc",
      "YER": "Yemeni Rial",
      "ZAR": "South African Rand",
      "ZMK": "Zambian Kwacha (pre-2013)",
      "ZMW": "Zambian Kwacha",
      "ZWL": "Zimbabwean Dollar"
    }
  }
}
```

7. View wallet balance in another currency (GET)

```
http://localhost:9009/api/transactions/balance?currency=EUR
```

Add to request body (in JSON format):

```
{
  "user_id": "2"
}
```

Request response (JSON format):
```
{
  "error": false,
  "responseTimestamp": "2022-08-25T20:40:48.966Z",
  "statusCode": 200,
  "data": {
    "from": "USD",
    "to": "EUR",
    "amount": 2304,
    "result": 2309.63328,
    "user_id": "1"
  }
}
```

8. The same as the first part, but with a description (GET)

```
http://localhost:9009/api/transactions/enrollment
```

Add to request body (in JSON format):

```
{
  "user_id": 1,
  "amount": 125.5,
  "description": "gift money"
}
```

Request response (JSON format):
```
{
  "error": false,
  "responseTimestamp": "2022-08-25T20:39:29.957Z",
  "statusCode": 200,
  "data": {
    "user_id": "1",
    "balance": 2304
  }
}
```

9. The same as the second part, but with a description (GET)

```
http://localhost:9009/api/transactions/withdrawal
```

Add to request body (in JSON format):

```
{
  "user_id": 1,
  "amount": 2000.5,
  "description": "for bike"
}
```

Request response (JSON format):
```
{
  "error": false,
  "responseTimestamp": "2022-08-25T20:56:31.581Z",
  "statusCode": 200,
  "data": {
    "user_id": "1",
    "balance": 554.5
  }
}
```
