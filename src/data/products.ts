export interface Product {
  productId: string;
  title: string;
  description: string;
  price: number;
  image: string;
  discount?: number; // descuento opcional en porcentaje
}

export const products: Product[] = [
  {
    productId: '1',
    title: 'Producto 1',
    description: 'Este es un producto increíble que puedes comprar.',
    price: 20.0,
    image: 'https://picsum.photos/id/1011/300/300',
    discount: 10, // 10% de descuento
  },
  {
    productId: '2',
    title: 'Producto 2',
    description: 'Este es otro producto increíble para ti.',
    price: 30.0,
    image: 'https://picsum.photos/id/1012/300/300',
    // sin descuento
  },
  {
    productId: '3',
    title: 'Producto 3',
    description: 'Producto de alta calidad que no puedes dejar pasar.',
    price: 40.0,
    image: 'https://picsum.photos/id/1013/300/300',
    discount: 5,
  },
  {
    productId: '4',
    title: 'Producto 4',
    description: 'Este producto es perfecto para regalar.',
    price: 50.0,
    image: 'https://picsum.photos/id/1015/300/300',
  },
  {
    productId: '5',
    title: 'Producto 5',
    description: 'Este es un producto increíble que puedes comprar.',
    price: 60.0,
    image: 'https://picsum.photos/id/1016/300/300',
    discount: 15,
  },
  {
    productId: '6',
    title: 'Producto 6',
    description: 'Producto excelente para cualquier ocasión.',
    price: 70.0,
    image: 'https://picsum.photos/id/1018/300/300',
  },
]
