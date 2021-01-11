const somar = async (a, b) => { await sleep(10000); return a + b }; // Função de somar mais lenta do mundo
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

test("#somar", () => {
    // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
  
    somar.mockImplementation((a, b) => a + b);
    somar(1, 2);
  
    expect(somar).toHaveBeenCalled();
    expect(somar).toHaveBeenCalledTimes(1);
    expect(somar).toHaveBeenCalledWith(1, 2);
    expect(somar(1, 2)).toBe(3);
  });
