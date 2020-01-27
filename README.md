# Whitebox Code Challenge

The original README.md is now [INSTRUCTIONS.md](./INSTRUCTIONS.md)

## Installing the project

This project is setup with a separate API server in the `api` directory and a separate web server in the `web` directory.  Start by running 

```
yarn
```

or 

```
npm install
```

in each respective library to pull down the project dependencies.  

## Starting the project

Start the API server first with 

```
yarn start
```

The API server will run on `http://localhost:5555`.

Now build the web server with

```
yarn build
```

then start the web server with

```
yarn start
```

The web server will run on `http://localhost:3000`.  Navigate to that address in your browser to view the site.

## Items completed

* Built a NodeJS server to serve JSON data from the provided json-generator.
* Wired up the two HTML pages to the NodeJS server by way of converting HTML to JSX for use in React.

### More Specifically

1. The NodeJS server serves all the products at the /api/getmany route and the single product information at the /api/getsingle/:guid route.

2. Created SPA using React and converted the HMTL to JSX in components.

3. "Wired up" the dropdown for sorts options (minus popularity), dropdown for price bracket, price range slider filter, and search box that searches on the search term in name, about/desc, and tags. Also wired up some smaller items like results number and breadcrumb name on product details.  I also wired up the currency dropdown on both pages, but without going down the rabbit hole of global state, it does not persist between pages.

4. The SPA does have 2 pages, per the HTML clicking the name of the product, takes you to the product detail page.  Clicking the image does not.

5. Delivery is here!

## Thoughts

* I did need to modifiy the CSS in two places.  One was for an image path and the second was for a missing parameter on line 1110 of main.css

* This did take me longer than average, but I had to split the time I was working on this and switched from CRA to Next half way through.

* This was a great challenge and was easy to fall down the rabbit hole when wiring things up.  Somethings I wired up that weren't required to just help me debug quicker.

* Thanks for creating this.  I had a blast!