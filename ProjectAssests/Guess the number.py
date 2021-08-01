import random
randomnum = random.randint(0,10)
def checker(number):
    counter = 4
    while counter > 0:
        if number == randomnum:
            print("You have won")
            break
        elif number != randomnum:
            print("You have guessed it wrong, chances left " + str(counter-1))
            print("Let me give you a hint: ")
            if randomnum == 0:
                print("It was invented by aryabhatta\n")
            elif randomnum == 1:
                print("This is something which is universal\n")
            elif randomnum == 2:
                print("The cutwopie")
            elif randomnum == 3:
                print("When does the evening begin ?\n")
            elif randomnum == 4:
                print("This great four everyone\n")
            elif randomnum == 5:
                print("The most powerful of all the zero divisors.\n")
            elif randomnum == 6:
                print("What has kohli held the record for ?\n")
            elif randomnum == 7:
                print("There s even a bit of hope, then guess it \n")
            elif randomnum == 8:
                print("It is really great to play here\n")
            elif randomnum == 9:
                print("Hohoho , I am the greatest of the singles out there\n")
            else:
                print("I am myself small but can make big changes when paired\n")
            userNum = int(input("Enter the " + str(counter-1) + " guess: "))
            if userNum == randomnum:
                print("You have won")
                break
        else:
            print("Dash")
        counter -= 1

print("Welcome to the Number Guesser game!!!\nHave fun while gussing the number.\nTo keep it simple the range of number provided will be from 0 to 10\nBut you will have only 4 chances to guess the right number.")
print("So let us begin!!!!!!")
print("The computer has decided on a number.")
userNum = int(input("Please enter you guess: "))
checker(userNum)
print("The random number was " + str(randomnum))
