export default {
  extractNextPage (response, currentPage) {
    if (!response.length) return null
    return currentPage + 1 
  },

  extractNewItems (response) { 
    return response 
  }
}