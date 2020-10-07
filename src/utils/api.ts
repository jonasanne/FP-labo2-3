const baseUrl = "https://restcountries.eu/rest/v2";

export const get = (endpoint : String) : any => {
    try {
        return fetch(`${baseUrl}/${endpoint}`).then((r)=>r.json());
    } catch (error) {
      return new Error(error);  
    }
};

