function solution(s) {
  let combinations = []
  for (i = 0; i < s.length; i++) {
    for (f = i + 1; f < s.length + 1; f++) {
      combinations.push(s.slice(i, f))
    }
  } return console.log(combinations.length)
}
sol('arroz')
