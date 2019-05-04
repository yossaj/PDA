require('minitest/autorun')
require('minitest/rg')
require_relative('../card.rb')
require_relative('../card_game.rb')


class TestCardGame < MiniTest::Test

  def setup
    @card1 = Card.new("Diamond",3)
    @card2 = Card.new("Diamond", 1)
    @cards = [@card1,@card2]
    @card_game =  CardGame.new(@cards)
  end

  def test_card_value
    assert_equal(3, @card1.value)
  end

  def test_check_for_ace
    result = @card_game.check_for_ace(@card2)
    assert_equal(true, result)
  end

  def test_check_for_ace___false
    result = @card_game.check_for_ace(@card1)
    assert_equal(false, result)
  end

  def test_highest_card
    result = @card_game.highest_card(@card1, @card2)
    assert_equal(@card1, result)
  end

  def test_cards_total
    result = @card_game.cards_total(@cards)
    assert_equal('You have a total of 4', result)
  end


end
