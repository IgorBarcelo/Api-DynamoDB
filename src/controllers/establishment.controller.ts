import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import * as establishmentService from '../services/establishment.service';
import * as userService from '../services/user.service';
import { Establishment } from '../models/establishment.model';

export const create = async (req: Request, res: Response) => {
  try {
    const { name, ownerId, type } = req.body;

    const user = await userService.getUserById(ownerId);
    if (!user) return res.status(404).json({ error: 'Usuário (ownerId) não encontrado' });
    if (user.type !== 'owner') return res.status(403).json({ error: 'Usuário não tem permissão para criar estabelecimentos' });

    const establishment: Establishment = {
      id: uuidv4(),
      name,
      ownerId,
      type,
    };

    const created = await establishmentService.createEstablishment(establishment);
    res.status(201).json(created);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar estabelecimento' });
  }
};

export const getById = async (req: Request, res: Response) => {
  const est = await establishmentService.getEstablishmentById(req.params.id);
  if (!est) return res.status(404).json({ error: 'Estabelecimento não encontrado' });
  res.json(est);
};

export const update = async (req: Request, res: Response) => {
  const est: Establishment = {
    id: req.params.id,
    ...req.body,
  };
  const updated = await establishmentService.updateEstablishment(est);
  res.json(updated);
};

export const remove = async (req: Request, res: Response) => {
  await establishmentService.deleteEstablishment(req.params.id);
  res.status(204).send();
};

export const list = async (_req: Request, res: Response) => {
  const list = await establishmentService.listEstablishments();
  res.json(list);
};

export const listByType = async (req: Request, res: Response) => {
  const list = await establishmentService.findByType(req.params.type);
  res.json(list);
};
