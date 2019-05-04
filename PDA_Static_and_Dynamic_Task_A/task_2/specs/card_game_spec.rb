require('minitest/autorun')
require('minitest/rg')
require_relative('../card.rb')
require_relative('../card_game.rb')


class TestCardGame < MiniTest::Test

  def setup
    @card1 = Card.new("Diamond",3)
  end

  def test_card_value
    assert_equal(3, @card1.value)
  end


end
