export function removerAccents(string) {
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
}