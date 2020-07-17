//Objective is to design a 'magic dictionary', where you can add words into the dictionary
//and, given that you can change only one character of the word, if it exists in the dictionary


//Design of a Magic Dictionary using a hashmap to keep track of each word's length

class MagicDictionary {
    contructor() {
        this.map = {}
    }

    buildDict(dict) {
        for (let word of dict) {
            if (!this.map[word.length]) {
                this.map[word.length] = []
            }
            this.map[word.length].push(word)
        }
    }

    search(word) {
        if (!this.map[word.length]) {
            return false
        }

        return this.map[word.length].some(find => {
            let count = 0
            for (let i = 0; i < find.length; i++) {
                if (word[i] !== find[i]) {
                    count++
                }
            }

            return count == 1
        })
    }
}

let dict = new MagicDictionary()
dict.buildDict(["hello", "leetcode"])
dict.search("hello")
dict.search("hhllo")
dict.search("hell")
dict.search("leetcoded")