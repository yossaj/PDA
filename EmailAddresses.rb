names = ["Tom Selick", "Jim Brown", "Art Timmethey","Sean O'rorke", "Mad Baskests"]

def name_to_email(names)
  for name in names
    num = name.index(' ')
    name.delete!(' ')
    name.insert(num, '-')
    puts "#{name}@SSC.org"
  end
end

name_to_email(names)
