
export const getParamFromURL = (value) =>{
  return new URLSearchParams(window.location.search).get(value);
}

export const getFirstElementName = (name) => {
        return document.getElementsByName(`${name}`)[0]
    }