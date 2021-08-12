import random

random_number = random.randint(1, 10)
guess = ''

while guess != random_number:
    geuss = int(input('Qual o seu palpite? '))
    print(random_number)

print('O numero sorteado era: ', guess)
