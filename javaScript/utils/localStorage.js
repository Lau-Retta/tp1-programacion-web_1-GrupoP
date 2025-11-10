
export function getItemOfStorage(item) {
    return JSON.parse(window.localStorage.getItem(item));
}

export function setItemInStorage(item, value) {
    window.localStorage.setItem(item, JSON.stringify(value));
}

export function removeItemOfStorage(item) {
    window.localStorage.removeItem(item);
}

export function setItemSesionStorage(item, value) {
    window.sessionStorage.setItem(item, JSON.stringify(value));
}

export function getItemSesionStorage(item) {
    return JSON.parse(window.sessionStorage.getItem(item));
}

export function removeItemSesionStorage(item) {
    window.sessionStorage.removeItem(item);
}