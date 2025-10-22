export const franceQuery = `
query {
  country(code: "FR") {
    name
    capital
    currency
  }
}`;

export const westerosQuery = `
query {
  country(name: "WESTEROS") {
    name
  }
}`;

export const invalidCountryCodeQuery = `
query {
  country(code: "OZ") {
    name
    capital
    currency
  }
}`;