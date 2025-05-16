import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import * as userService from '../services/user.service';
import { User } from '../models/user.model';

export const create = async (req: Request, res: Response) => {
  try {
    const user: User = {
      id: uuidv4(),
      ...req.body,
    };
    const created = await userService.createUser(user);
    res.status(201).json(created);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const user: User = {
      id: req.params.id,
      ...req.body,
    };
    const updated = await userService.updateUser(user);
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
};

export const list = async (_req: Request, res: Response) => {
  try {
    const users = await userService.listUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar usuários' });
  }
};
