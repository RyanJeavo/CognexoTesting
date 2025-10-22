import { expect } from '@playwright/test';
import { test } from '../../fixtures'
import { franceQuery, invalidCountryCodeQuery, westerosQuery } from '../queries/countryQueries';
import { Country } from '../types/countriesTypes';

test('Countries query is successful and returns correct data', async ({ request }) => {
    const response = await request.post('https://countries.trevorblades.com/', {
        data: { query: franceQuery },
    });
    const franceResponse = await response.json() as { data: { country: Country } };
    expect(response.status()).toBe(200);
    expect(franceResponse.data.country.capital).toBe('Paris');
    expect(franceResponse.data.country.currency).toBe('EUR');
    expect(franceResponse.data.country.name).toBe('France');
})

test('Countries query is rejected with invalid syntax', async ({ request }) => {
    const response = await request.post('https://countries.trevorblades.com/', {
        data: { query: westerosQuery },
    });
    const { errors } = await response.json();
    expect(errors[0].message).toContain('Unknown argument "name" on field "Query.country"');
})

test('Countries query is rejected with invalid country code', async ({ request }) => {
    const response = await request.post('https://countries.trevorblades.com/', {
        data: { query: invalidCountryCodeQuery },
    });
    const invalidCountryCodeResponse = await response.json() as { data: { country: Country } };
    expect(invalidCountryCodeResponse.data.country).toBeNull();
})