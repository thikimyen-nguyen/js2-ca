const givenToken = localStorage.getItem("accessToken");
const getData = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${givenToken}`,
    },
    
  };

  
export {givenToken, getData}