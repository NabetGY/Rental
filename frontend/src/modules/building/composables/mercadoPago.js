const mp = new MercadoPago('TEST-eb05bdbc-6477-4447-9573-e5bcecfc11b7', {
    locale: 'es-CO'
});

export  function pago () {

    const orderData = {
    quantity: 1,
    description: 'Pago subscripcion',
    price: 'COP'
    };

    fetch("/user/pago/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })
        .then(function(response) {
            return response.json();
        })
        .then(function(preference) {
        })
    
};
