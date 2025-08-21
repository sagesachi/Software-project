import time

def intro():
  print("you decide your own fate")
  print("type the corrosponding number to make a choice.")
  time.sleep()
  print("while walking one afternoon, you stumble upon a new area in which you come to a crossroads")
  time.sleep()
  print("You have the choice to go in one of three directions.")
  print("The direction of an old house on a nearby hill(1)")
  print("A misty forest(2)")
  print("Or a silent graveyard(3)...")

def choosepath():
  path == ""
  while path != = "1" or path != "2" or path != "3":
    path = input("Which path will you choose? (1, 2 or 3): ")
  return path

def checkpath(path):
  print("You make your way towards your destination...")
  time.sleep()

  if path == "1":
    print("You make your way towards the old house on a nearby hill...")
    
  elif path == "2":
    print("You make your way towards the misty forest...")
    
  else path == "3":
    print("You make your way towards the silent graveyard...")

  
