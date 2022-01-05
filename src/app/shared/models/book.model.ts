import { Author } from './author.model';

export type Book = {
  id: string;
  title: string;
  authors?: Author[];
  editors?: Author[];
  yearPublished: number;
};
