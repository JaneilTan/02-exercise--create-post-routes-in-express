const express = require("express");
const app = express();

// Use this function to get a random id
// eg: `const id = generateId();`
const generateId = require("./generateId");

app.use(express.json());

app.post("/wishlists", (request, response) => {
    const { body } = request;
    const wishlists = {
        id: generateId(),
        productId: body.productId,
    };
    return response.status(200).send(wishlists);
});

app.post("/orders", (request, response) => {
    const { body } = request;
    const order = {
        id: generateId(),
        ...body,
    };
    return response.status(200).send(order);
});


app.post("/policies", (request, response) => {
    const { body } = request;
    const policies = {
        id: generateId(),
        ...body,
    };
    return response.status(200).send(policies);
});
module.exports = app;


