import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import * as ruleService from '../services/establishment-rules.service';
import { EstablishmentRule } from '../models/establishment-rules.model';

export const create = async (req: Request, res: Response) => {
  try {
    const { establishmentId, picturesLimit, videoLimit } = req.body;

    const rule: EstablishmentRule = {
      id: uuidv4(),
      establishmentId,
      picturesLimit,
      videoLimit,
    };

    const created = await ruleService.createRule(rule);
    res.status(201).json(created);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar regra' });
  }
};

export const getByEstablishmentId = async (req: Request, res: Response) => {
  const rule = await ruleService.getRuleByEstablishmentId(req.params.establishmentId);
  if (!rule) return res.status(404).json({ error: 'Regra não encontrada' });
  res.json(rule);
};

export const update = async (req: Request, res: Response) => {
  const rule: EstablishmentRule = {
    id: req.params.id,
    ...req.body,
  };
  const updated = await ruleService.updateRule(rule);
  res.json(updated);
};

export const remove = async (req: Request, res: Response) => {
  await ruleService.deleteRule(req.params.id);
  res.status(204).send();
};
