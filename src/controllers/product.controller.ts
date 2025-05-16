import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import * as productService from '../services/product.service';
import * as ruleService from '../services/establishment-rules.service';
import { Product } from '../models/product.model';

export const create = async (req: Request, res: Response) => {
  try {
    const { name, price, establishmentId } = req.body;

    const rule = await ruleService.getRuleByEstablishmentId(establishmentId);
    if (!rule) {
      return res.status(400).json({ error: 'Estabelecimento não possui regra definida' });
    }

    const product: Product = {
      id: uuidv4(),
      name,
      price,
      establishmentId,
    };

    const created = await productService.createProduct(product);
    res.status(201).json(created);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
};

export const getById = async (req: Request, res: Response) => {
  const product = await productService.getProductById(req.params.id);
  if (!product) return res.status(404).json({ error: 'Produto não encontrado' });
  res.json(product);
};

export const update = async (req: Request, res: Response) => {
  const product: Product = {
    id: req.params.id,
    ...req.body,
  };
  const updated = await productService.updateProduct(product);
  res.json(updated);
};

export const remove = async (req: Request, res: Response) => {
  await productService.deleteProduct(req.params.id);
  res.status(204).send();
};

export const list = async (_req: Request, res: Response) => {
  const products = await productService.listProducts();
  res.json(products);
};
