@numbers = {
      1 =>{
        english: "one",
        chinese:{
          pin_yin: "yī",
          character: "一",
          complex_character: "壹"
        }
      },
      2 =>{
        english: "two",
        chinese:{
          pin_yin: "èr",
          character: "二",
          complex_character: "贰"
        }
      },
      3 =>{
        english: "three",
        chinese:{
          pin_yin: "sān",
          character: "三",
          complex_character: "叁"
        }
      },

    }
    
def find_pin_yin(num)
  @numbers[num][:chinese][:pin_yin]
end

puts find_pin_yin(3)
