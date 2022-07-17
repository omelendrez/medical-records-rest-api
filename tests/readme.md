# Guide to generate initial records

## 1. Create status

```javascript
[{ name: "Activo" }, { name: "Inactivo" }];
```

## 2. Create profile

```javascript
[{ name: "Admin" }, { name: "User" }, { name: "Read-only" }];
```

## 3. Create company

_Status id will depend on actual table values)_

```javascript
[
  {
    name: "Test Veterinaria",
    address: "Calle falsa 123",
    mobile: "123456789",
    city: "Madrid",
    state: "Madrid",
    observations: "Esta es una cuenta de tests",
    statusId: 1,
  },
];
```

## 4. Create users (admin/user/read-only)

_Status and company ids will depend on actual table values)_

```javascript
[
  {
    companyId: 1,
    profileId: 1,
    statusId: 1,
    name: "Omar",
    password: "Master1*",
  },
  {
    companyId: 1,
    profileId: 2,
    statusId: 1,
    name: "Jorge",
    password: "123456",
  },
  {
    companyId: 1,
    profileId: 3,
    statusId: 1,
    name: "Visitante",
    password: "695379",
  },
];
```
