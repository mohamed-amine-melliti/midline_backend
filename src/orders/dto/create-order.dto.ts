export class CreateOrderDto {
  num_cmd: string;

  id_site: number;
  id_client: string;

  type_cde: string;
  etat_cmde: string;

  date_cde: string;
  heure_cde: string;

  date_liv: string;
  heure_liv: string;

  totalht: number;
  totalttc: string;
  reduction: number;
  totalttc_net: string;

  frais_livraison: number;
  frais_livraison_tva: number;

  frais_gestion: number;
  frais_gestion_tva: number;

  tottva1: string;
  tottva2: number;
  tottva3: string;

  tva1: number;
  tva2: number;
  tva3: number;

  httva1: string;
  httva2: number;
  httva3: string;

  ttctva1: number;
  ttctva2: number;
  ttctva3: number;

  note_cmde: string;
  modreg_prev: string;
  modreg_pel: string;
  codepe: string;
}
