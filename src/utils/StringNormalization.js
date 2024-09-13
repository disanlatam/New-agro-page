/**
 * Normalizes a string by removing leading/trailing whitespace and converting it to lowercase.
 * @param {string} str - The string to be normalized.
 * @returns {string} - The normalized string.
 */
function normalizeString(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}
export default normalizeString;
