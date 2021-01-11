function randomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

test("#randomRgbColor1", () => {
  // testando se a função foi chamada
  randomRgbColor = jest.fn();
  randomRgbColor();
  expect(randomRgbColor).toHaveBeenCalled();
});

test("#randomRgbColor2", () => {
    // testando se a função foi chamada e qual seu retorno
    randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)");
  
    randomRgbColor();
    expect(randomRgbColor).toHaveBeenCalled();
    expect(randomRgbColor()).toBe("rgb(255, 255, 255)");
  });

test("#randomRgbColor3", () => {
    // testando quantas vezes a função foi chamada e qual seu retorno
    randomRgbColor = jest
      .fn()
      .mockReturnValue('default value')
      .mockReturnValueOnce('first call')
      .mockReturnValueOnce('second call');
  
    expect(randomRgbColor).toHaveBeenCalledTimes(0);
  
    expect(randomRgbColor()).toBe("first call");
    expect(randomRgbColor).toHaveBeenCalledTimes(1);
  
    expect(randomRgbColor()).toBe("second call");
    expect(randomRgbColor).toHaveBeenCalledTimes(2);
  
    expect(randomRgbColor()).toBe("default value");
    expect(randomRgbColor).toHaveBeenCalledTimes(3);
  });
