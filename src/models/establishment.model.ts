export type EstablishmentType = 'shopping' | 'local';

export interface Establishment {
  id: string;
  name: string;
  ownerId: string;
  type: EstablishmentType;
}
