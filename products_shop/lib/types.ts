interface Dimensions {
  width: number;
  height: number;
  depth: number;
}
interface Reviews {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}
interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}
interface Images {
  fullImage: string;
  thumbnail: string;
}
export interface IProducts {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  weight: number;
  dimensions?: Dimensions[];
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews?: Reviews[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta?: Meta;
  images: Images;
}
