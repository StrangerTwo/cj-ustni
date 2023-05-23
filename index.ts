import fs from 'fs'
import books from './src/books.js'
import toWords from './src/words.js'

Object.values(books).map(x => toWords(x.name)).map((x, i) => `${`${i + 1}`.padStart(2, "0")}-${x.join("-")}.md`).forEach(filename => {
    fs.writeFileSync(`data/${filename}`, "")
})