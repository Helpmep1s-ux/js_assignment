const fetchData = async () => {
    try {    
      const response = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
        console.log( await response.json());
    } catch (error) {
      console.log(error) 
    }
  };
  
  fetchData();