importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");
// importScripts("../../../dist/umd/comlink.js");

const fetchFunction = async url => {
  const fetching = await fetch(url);
  const json = await fetching.json();
  const result = await json.data;
  return result;
};

Comlink.expose(fetchFunction);
