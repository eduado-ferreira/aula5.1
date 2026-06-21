import express from 'express';
import Usuario from '../models/Usuario.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Rotas para gerenciamento de usuários
 */

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NovoUsuario'
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       400:
 *         description: Erro de validação ao criar usuário
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Erro'
 */
router.post('/', async (req, res) => {
    const novaTarefa = new Tarefa({ ...req.body, usuario: req.usuarioId });
    await novaTarefa.save();
    res.status(201).jso
});

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Usuários]
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 *       500:
 *         description: Erro ao buscar usuários
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Erro'
 */
router.get('/', async (req, res) => {
    const novaTarefa = new Tarefa({ ...req.body, usuario: req.usuarioId });
    await novaTarefa.save();
    res.status(201).jso
});

export default router;