const givenToken = localStorage.getItem("accessToken");

async function fetchWithToken(url) {
    try {
      const getData = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${givenToken}`,
        },
      };
      const response = await fetch(url, getData);
      console.log(response);
      const json = await response.json();
      console.log(json);
    
    } catch (error) {
      console.log(error);
    }
  }
  
export {fetchWithToken}