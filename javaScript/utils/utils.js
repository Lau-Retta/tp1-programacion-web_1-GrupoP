
export const getParamFromURL = (value) =>{
  return new URLSearchParams(window.location.search).get(value);
}