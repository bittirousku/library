import { Author } from './models/author.model';

export function formatAuthor(author: Author, reverse: boolean = false) {
  if (reverse) {
    return `${author.lastName}, ${author.firstNames}`;
  } else {
    return `${author.firstNames} ${author.lastName}`;
  }
}

export function formatAuthors(authors: Author[]) {
  return authors.map((a) => formatAuthor(a)).join(', ');
}
