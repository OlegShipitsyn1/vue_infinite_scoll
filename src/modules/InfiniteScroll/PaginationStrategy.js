export class AbstractPaginationStrategy {
  /* takes fetch response and returns items to extend existing array */
  extractNewItems(response) {
    throw new Error('Not implemented')
  }
  /* takes fetch response and returns following page number to make request */
  extractNextPage(response) {
    throw new Error('Not implemented')
  }
}