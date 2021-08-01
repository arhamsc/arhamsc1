import random
import time
def hangmancheck(word, turns, guesses):
    while turns > 0:
        fail = 0
        for letter in word:
            if letter in guesses:
                print(letter)
            else:
                print("_")
                fail += 1
        if fail == 0:
            print("You win")
            print("The word is " + word)
            break
        guess = input("Enter your guess: ")
        guesses += guess
        if guess not in word:
            turns -= 1
            print("Wrong")
            print("You have " + str(turns) + " turns left")
            if turns == 0:
                print("You loose")

turns = 10
guesses = ""
words = ["anime", "animal", "bear", "cow", "bird"]
index = random.randint(0, len(words)-1)
wordtobeguessed = words[index]
print("Welcome to the hangman game!!!!")
print("This is your generic hangman game where u have to guess the word.")
time.sleep(2)
print("So let us Begin")
time.sleep(1)
hangmancheck(wordtobeguessed, turns, guesses)
