function hasOddNumber(arr){
    return arr.some(function(val){
      return val % 2 !== 0;
    })
  }
  
  function hasAZero(num){
    return num.toString().split('').some(function(val){
      return val === '0';
    })
  }
  
  function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
      return val % 2 !== 0;
    })
  }
  
  function hasNoDuplicates(arr){
    return arr.every(function(val){
      return arr.indexOf(val) === arr.lastIndexOf(val);
    });
  }
  
  function hasCertainKey(arr, key){
    return arr.every(function(val){
      return key in val
    })
  }
  
  function hasCertainValue(arr, key, searchValue){
    return arr.every(function(val){
      return val[key] === searchValue;
    })
  }

//removeUser
  function removeUser(usersArray, username) {
    let foundIndex = usersArray.findIndex(function(user){
      return user.username === username;
    })
    if(foundIndex === -1) return;
  
    return usersArray.splice(foundIndex,1)[0];
  }

  //find user by UserName 
  function findUserByUsername(usersArray, username) {
    return usersArray.find(function(user){
      return user.username === username;
    })
  }