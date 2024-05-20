function getAllPropertyValues(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return [];
    }
    
    return Object.values(obj);
  }
  
  const obj = {
    name: 'kelvin',
    age: 28,
    location:"23 street",
    city: 'Nakuru',
  };
  
  const values = getAllPropertyValues(obj);
  console.log(values); 
  

  /* output
  [ 'kelvin', 28, '23 street', 'Nakuru' ]
  */