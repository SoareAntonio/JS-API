// Funcție care convertește un string la camelCase
export function camelCase(str) {
  return str
    .toLowerCase()
    .split(/[\s_-]+/)
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}

// Funcție care convertește un string la snake_case
export function snakeCase(str) {
  return str
    .toLowerCase()
    .split(/[\s-]+/)
    .join('_');
}