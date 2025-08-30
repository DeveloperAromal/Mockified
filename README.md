# Mockified

Mockified is a lightweight JavaScript library to generate mock/fake data based on a schema. It supports random names, addresses, IDs, UUIDs, phone numbers, and more. Ideal for testing, seeding databases, or prototyping.

---

## Features

- Generate realistic random **names** (male, female, or generic)
- Generate random **addresses** from predefined streets, cities, and states
- Generate **unique IDs** (int4, int6) and **UUIDs**
- Generate random **phone numbers**
- Supports custom schemas
- Easily generate multiple mock records at once

---

## Installation

```bash
# Using npm
npm install mockified

# Or clone the repo
git clone https://github.com/DeveloperAromal/Mockified.git
````

---

## Usage

```javascript
import { Mockified } from "Mockified";

const schema = [
  {
    name: "name",
    id: "int4",
    address: "address",
    uid: "uuid",
    phone: "phonenumber",
  },
];

// Generate 3 mock records
const mockData = Mockified(schema, 3);
console.log(mockData);
```

### Example Output

```json
[
  {
    "name": "Ava Johnson",
    "id": 4821,
    "address": "Maple Street, Denver, CO",
    "uid": "c3a1b1c0-3d9a-47df-9af2-2cf11a45e5f6",
    "phone": 9834720192
  },
  {
    "name": "Michael Brown",
    "id": 7263,
    "address": "Oak Avenue, Miami, FL",
    "uid": "52f7de35-2211-4e15-92f8-8c929b44aafe",
    "phone": 1872938475
  },
  {
    "name": "Emma Davis",
    "id": 1357,
    "address": "Pine Road, Austin, TX",
    "uid": "1e3b8941-9944-462f-a511-c5cb64873f3d",
    "phone": 2938475610
  }
]
```

---

## Schema Types

| Type          | Description                              |
| ------------- | ---------------------------------------- |
| `name`        | Random male or female name               |
| `fname`       | Random female name                       |
| `mname`       | Random male name                         |
| `address`     | Random address from predefined locations |
| `uuid`        | Random UUID                              |
| `int4`        | Random 4-digit integer                   |
| `int6`        | Random 6-digit integer                   |
| `phonenumber` | Random 10-digit phone number             |

---

## License

MIT License