importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");
// importScripts("../../../dist/umd/comlink.js");

const fetchFunction = async env => {
  const fetching = await fetch(`${env}/api/foods/recipe`);
  const json = await fetching.json();
  const result = await json.data;
  return result;
};

Comlink.expose(fetchFunction);
