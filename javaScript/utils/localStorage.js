
export function getItemOfStorage(item) {
    return JSON.parse(window.localStorage.getItem(item));
}

export function setItemInStorage(item, value) {
    window.localStorage.setItem(item, JSON.stringify(value));
}