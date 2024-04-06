import { Lusitana, Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '400', '600'],
});

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
