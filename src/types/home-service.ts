export type ServiceIcon = "cleaning" | "tools" | "water" | "garden";

export interface HomeService {
  id: string;
  number: string;
  name: string;
  shortName: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  alt: string;
  icon: ServiceIcon;
}
