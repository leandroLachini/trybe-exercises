const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  

  // exercicio 1
  const customerInfo = (order) => {
    return (`Olá ${order.order.delivery.deliveryPerson} entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, N: ${order.address.number}, AP: ${order.address.apartment}`);
  }
  const imprime = customerInfo(order);
  console.log(imprime);
  

  // exercicio 2
  const pizzas = Object.keys(order.order.pizza);
  const novaCompradora = 'Luiz Silva';
  order.order.delivery.deliveryPerson = novaCompradora;
  const novoValor = 50;
  order.payment.total = novoValor;
  
  const orderModifier = (order) => {
   return (`Olá ${order.order.delivery.deliveryPerson} o total do seu pedido de ${pizzas} e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00`);
  }
  const imprime2 = orderModifier(order);
  console.log(imprime2);
  // console.log(pizzas);