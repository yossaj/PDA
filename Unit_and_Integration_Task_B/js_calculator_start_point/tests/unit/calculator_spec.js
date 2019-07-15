var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })


  it(' can add 1 to 4', function () {
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 5)
  })

  it('can subtract 4 from 7', function () {
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it(' can multiply 3 by 5', function () {
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 15)
  })

  it('can divide 21 by 7', function () {
    calculator.numberClick(21)
    calculator.operatorClick('/')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('can concatenate multiple numbers', function () {
    calculator.numberClick(1)
    calculator.numberClick(2)
    calculator.numberClick(3)
    assert.strictEqual(calculator.runningTotal, 123)
  })

  it('can use multiple operators', function () {
    calculator.numberClick(5)
    calculator.operatorClick('+')
    calculator.numberClick(1)
    calculator.operatorClick('*')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 24)
  })

  it('can accept clear press without affecting running total', function () {
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('+')
    calculator.numberClick(10)
    calculator.operatorClick('+')
    calculator.clearClick()
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 20)
  })

});
