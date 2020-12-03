const greeting = (user) => {
    user = typeof user === 'undefined' ? 'usuário' : user;
    console.log(`Welcome ${user}!`);
  };
  
  greeting(); // Welcome usuário!

  //-----------------------------------------------------------------------------------

  const greeting1 = (user = 'usuário') => console.log(`Welcome ${user}!`);

  greeting1(); // // Welcome usuário!

  //-----------------------------------------------------------------------------------

  const multiply = (number, value) => {
    // Escreva aqui a sua função
  };
  
  console.log(multiply(8));