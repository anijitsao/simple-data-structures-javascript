export function useService() {
  const data = [];
  return [data, fetchData];
}

async function fetchData(url, method, reqbody) {
  console.log("url received", url);
  const response = await fetch(url, { method: method || "GET" });
  const data = await response.json();
  return data;
}
