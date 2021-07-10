const router = require("express").Router();

/**
 * @swagger
 * /cars:
 *    get:
 *      summary: Get a list of cars
 *      tags:
 *        - cars
 *      description: This endpoint returns a list of cars
 *      parameters:
 *          - in: query
 *            name: limit
 *            schema:
 *              type: string
 *              $ref: '#/components/parameters/limit'
 *
 *      responses:
 *          200:
 *           description: An array of cars
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                    type: string
 *                    $ref: '#/components/schemas/Car'
 */
router.get("/", (req, res) => {
  res.status(200).json({
    data: {
      message: "This is the get all cars route!",
    },
  });
});

/**
 * @swagger
 * /cars/{id}:
 *    get:
 *      summary: Get a specific car from a database
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *      tags:
 *        - cars
 *      description: This endpoint retrieves a single car from the database
 *      responses:
 *          200:
 *           description: Returns a single car
 *           content:
 *             application/json:
 *               schema:
 *                 type: objecg
 *                 $ref: '#/components/schemas/Car'
 */
router.get("/", (req, res) => {
  res.status(200).json({
    data: {
      message: "This gets a specific car in the database",
    },
  });
});

/**
 * @swagger
 * /cars:
 *    post:
 *      summary: Add a new car to the database
 *      requestBody:
 *        description: Required data that must be sent
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Car'
 *      tags:
 *        - cars
 *      description: This endpoint adds a new car to the database
 *      responses:
 *          201:
 *           description: Returns an OK message if the resource was created successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: string
 *                 example: OK
 */
router.post("/", (req, res) => {
  res.status(201).json({
    data: {
      message: "This adds a new car to the database",
    },
  });
});

/**
 * @swagger
 * /cars:
 *    put:
 *      summary: Update a car in a database
 *      requestBody:
 *        description: Required data that must be sent
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Car'
 *      tags:
 *        - cars
 *      description: This endpoint updates a car to the database
 *      responses:
 *          201:
 *           description: Returns an OK message if the resource was updated successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: string
 *                 example: OK
 */
router.put("/", (req, res) => {
  res.status(200).json({
    data: {
      message: "This updates a car in the database",
    },
  });
});

/**
 * @swagger
 * /cars/{id}:
 *    delete:
 *      summary: Remove a car from the database
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *      tags:
 *        - cars
 *      description: This endpoint deletes a car to the database
 *      responses:
 *          200:
 *           description: Returns an OK message if the resource was deleted successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: string
 *                 example: OK
 */
router.delete("/", (req, res) => {
  res.status(200).json({
    data: {
      message: "This deletes a car in the database",
    },
  });
});

/**
 * @swagger
 * components:
 *   schemas:
 *     Car:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: The ID of the car
 *          example: 100
 *        year:
 *          type: integer
 *          description: The year the car was manufactured
 *          example: 1991
 *        color:
 *          type: string
 *          description: The color of the car
 *          example: Midnight Purple
 *        manufacturer:
 *          type: string
 *          description: The company that manufactured the car
 *          example: Honda
 *        model:
 *          type: string
 *          description: The type of trim / model of the car
 *          example: NSX
 *        created_at:
 *          type: string
 *          description: The date the car was added to the database
 *          example: Monday, July 12th, 2021
 *   parameters:
 *     limit:
 *       name: limit
 *       in: query
 *       description: The amount of items to request
 *       required: false
 *       schema:
 *          type: integer
 *          minimum: 10
 *          default: 10
 */

module.exports = router;
