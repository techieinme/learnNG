export interface User{
    "id": number;
    "name": string;
    "username": string;
    "email": string;
    "address": Address,
    "phone": number;
    "website": string;
    "company": Company
}

interface Address {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode":number,
    "geo": Geo
}

interface Geo {
    "lat": number,
    "lng": number
}

interface Company{
  "name":string;
  "catchPhrase": string;
  "bs": string;
}