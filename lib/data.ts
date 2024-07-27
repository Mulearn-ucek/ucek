import Papa from "papaparse";

// export const EVNTS_SHEET_ID = "1jrpjxOBA4kVCLgrrjjLt46bmNCRDaruuJvcU3JwvOkc" /* DEV */
export const SHEET_ID = "1oTIT-gv8BENbkwrlaYaXg6dEjSndyT2vDWKZnAJO39g" /* PROD */
export const PUBLIC_KEY = "BPpBelMiDJmKoVfUm-h_23puTUUsmQuhDV8wSih6vN8e9SjQ-a0gGEMUje_pOzoGPDNxNyLZcvEwmIXEW0iaZ5g"

export function getData(url:string): Promise<string[][]> {
  return new Promise((resolve, reject) => {
  Papa.parse<string[]>(url, {
    download: true,
    skipEmptyLines: true,
    complete(results) {
      let d  = results.data;
      d.shift()
      resolve(d);
    },
    error(error) {
      reject(error);
    }
  });
});
}

export function getImgLink(link: string) {
  return (
    "https://drive.google.com/uc?export=download&id=" +
    link.replace("https://drive.google.com/open?id=", "")
  );
}

// Get Upcoming Events
export function getCarouselImages(n="10"): Promise<string[][]> {
  const url = "https://docs.google.com/spreadsheets/d/"
              + SHEET_ID
              + "/gviz/tq?tqx=out:csv&sheet=carousel&tq=" 
              + encodeURIComponent("select B, C, D limit "+n);
  return getData(url)
}