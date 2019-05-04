### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame

# naming convention - 'check_for_ace' might be slightly better
  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

  # 1.'def' typo, change 'dif' to 'def'. 2. Line 19 - Missing comma between arguments. 3. Line 27, remove extra 'end'. 4. line 22 should be 'card1' not 'card'
  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card
  else
    return card2
  end
end
end


# 1. line 31. 'total' not defined. total = 0. 2. line 34 the return statement should be outside the for loop, otherwise the loop will stop after the value of the first card is added to the total. 'total' will be returned as an integer, total.to_s would be better and there should be a space added before 'total'. 
def self.cards_total(cards)
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end
```
