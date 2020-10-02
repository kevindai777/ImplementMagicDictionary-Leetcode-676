//Java Solution

class MagicDictionary {

    /** Initialize your data structure here. */
    Map<Integer, ArrayList<String>> map;
    public MagicDictionary() {
        map = new HashMap<>();
    }
    
    public void buildDict(String[] dictionary) {
        for (String word : dictionary) {
            map.computeIfAbsent(word.length(), x -> new ArrayList()).add(word);
        }
    }
    
    public boolean search(String searchWord) {
        if (!map.containsKey(searchWord.length())) {
            return false;
        }
        
        for (int i = 0; i < map.get(searchWord.length()).size(); i++) {
            String word = map.get(searchWord.length()).get(i);
            int count = 0;
            
            for (int j = 0; j < word.length(); j++) {
                if (word.charAt(j) != searchWord.charAt(j)) {
                    if (++count > 1) {
                        break;
                    }
                }
            }
            
            if (count == 1) {
                return true;
            }
        }
        
        return false;
    }
}