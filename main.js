const str = `
010-1234-5678
thetodayisfighting@coding.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen.
THE quick brown fox jumps over the lazy dog.
abbcccdddd.
동해물과_백두산이
`

console.log(str.match(/(?<=@).{1,}/g))
// ["coding.com"]