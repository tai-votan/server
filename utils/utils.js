export function stripHTML(str = "") {
  return str
    .replace(/<[^>]+>/g, " ")
    .replace(/ +/g, " ")
    .trim();
}

export function toSlug(str = "") {
  return stripHTML(str)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .replace(/([^0-9a-z-\s])/g, "-")
    .replace(/(\s+)/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}
