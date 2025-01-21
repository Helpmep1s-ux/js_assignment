const fetchData = async () => {
    try {    
      const response = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
      if(response.ok){
        console.log( await response.json());
      }
      else{
        throw new Error('Failed to get response');
      }
    } catch (error) {
      console.log(error) 
    }s
  };
  
  fetchData();