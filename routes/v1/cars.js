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
