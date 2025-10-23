# Cognexo Technical Test

The tests within this repository are split into two folders of tests:
1) E2ETests - Folder containing 4 tests spanning 3 files
2) APITests - Folder containing 3 tests spanning 1 file

## Setup
  - Download or clone this repository
  - Ensure your terminal is sat in the root folder
  - Run ``` npm install ``` to install 

## Running the tests
To run the individual tests navigate to your terminal at the root folder and enter the following commands:
- E2E: ``` npm run test:e2e ```
- API: ``` npm run test:api ```

## Tool Choice
For this project, Typescript and Playwright have been selected as the primary tools for development.

**Typescript** has been chosen primarily for it's ability to catch errors before runtime. Ensuring methods are correctly typed can reduce the amount of testing required to ensure the framework is stable and consistent.

**Playwright** has been chosen for it's ease of use, maintainability and support. There is a reason that Playwright has been the cool kid on the block for a few years now. Below are some of the many reasons it was chosen:
- Ease of setup (```npm init playwright@latest``` and you've got an instantly runnable test)
- Tools straight out of the box that do exactly what they say on the tin
- Code is extremely readable
- Regular release cadence
- Brilliant documentation
- Wide ranging community support who are constantly pushing the envelope in terms of best practices

# E2E Tests Rationale and strategy
The E2E folder contains 4 tests:

- Customer Adds Single Product To Basket
- Customer selects specific Category
- Customer clicks Next and Previous buttons to navigate between product pages
- Customer Views the Product Page

### Why were these scenarios chosen?
These scenarios were chosen to cover the main, critical functionality to the customer usability of the [Books To Scrape](https://books.toscrape.com) web page. As this is a brand new repository, it's important to set the foundations in place within the testing suite. Ideally, any regression on the components covered within these tests would be caught as they cover the basic functionality customers would be using to purchase a product.

I tried to ensure the tests did not repeat code or functionality between each file - this helps to reduce runtime, diminishing returns and increases readability of the tests.

In it's current state of Books To Scrape - I deemed the basic functionality as most critical - if the basics don't work, we can't sell books. 

Here are my top 5 product risks for Books To Scrape in it's current format:
- Adding To Basket button
- Pagination functionality
- View Product page
- Are the product pods visible with basic product details
- Can I navigate between pages successfully

However, if this app were to contain more complex features that spanned multiple services, I would likely deem them as most critical, for example:
- Basket Functionality
  - Does the item you added to the basket save to your basket as you expected?
  - What happens when you add multiple items to the basket?
  - Does the basket update the total correctly?
  - Does removal of products from the basket work correctly?
  - What happens to the basket when your session times out?
- Authentication
  - Can I log in/out successfully?
  - How long is my authenticated session maintained for?
  - Can my saved basket span across multiple authenticated sessions?
  - Are the user details correct for the authenticated user?



##### Sidenote: I would have liked to cover basket functionality, but It looks as though this isn't present or available on Books To Scrape.

With more time and thought I would have liked to include the following:
- Improved results checks (verifyBookCount is simple in it's current form)
  - Add variability to the check that books on the page matches the results count
- Boundary checks on book prices
- Tests to ensure previous and next buttons are not present on first and last page
- Tests to check that the breadcrumb section is working as expected
- Improve selectors (The HTML currently lacks more advanced semantics and accessible elements)
- Add a .env containing variables such as URLs

### Technical Decisions
Overarching all of the tests, I have used Page Object Model to structure my E2E tests. 

POM in my opinion is a very readable and easy to maintain design pattern - but it must be tempered with the DRY engineer value. There are often common elements across different pages which can be kept within a common elements class to be reused and not repeated per page class.

```beforeEach``` hook has been used within the selectCategory test to demonstrate Playwright's "out of the box" tricks that help to make code super readable and efficient.

Abstraction has been applied where appropriate to ensure readability and maintainability is to high engineering standard.

Playwright Fixtures have been used to allow the tests to pick from each page class per test and reduce the overuse of instantiating classes.



# API Tests Rationale

The API Tests folder contains 3 tests:
- Countries query is successful and returns correct data
- Countries query is rejected with invalid syntax
- Countries query is rejected with invalid country code

### Why were these scenarios chosen?

I chose these 3 scenarios to cover 3 basic checks on the API:
- Does it work properly when you provide it correct data?
- Does it work as expected when you provide it an invalid structure?
- Does it work as expected when you provide it unknown data?

By covering these 3 basic scenarios, we can confirm that valid requests behave correctly and invalid ones fail in a predictable and controlled manner.

As per my understanding, it's very difficult to receive anything but a 200 success status without switching off services or authentication integrated into the API.

With more time I would have liked to have included the following:
- With more time I'd have liked to have abstracted all of the request and test functionality
- Parameterised all of the tests and request to ensure reusability
- Check no errors present on success
- Query multiple countries
  - Ensure the array contains as many countries as expected
  - Ensure all fields and values within each object are as expected
- Test an unexpected Type passed in as an argument

## CI/CD Integration
To integrate into the CI/CD Pipeline I would create a Dockerfile that can be picked up to create an image for the CI to pick up all of the installation commands and runners for my tests.
I would then collaborate with developers to integrate the image into the pipeline.


