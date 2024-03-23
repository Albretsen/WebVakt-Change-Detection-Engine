const express = require('express');
const healthController = require('../../controllers/health.controller');

const router = express.Router();

router.route('/').get([], [], healthController.healthPing);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Health
 *   description: Verify API health
 */

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Gets API health
 *     description: Returns API health.
 *     tags: [Health]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */