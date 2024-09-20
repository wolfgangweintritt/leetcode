final class WordFilter {
    
    /** @var array<prefix (string), array<postfix (string), index>> */
    private $dict;
    
    /**
     * @param String[] $words
     */
    public function __construct(array $words)
    {
        foreach ($words as $index => $word) {
            $this->addPrePostFixCombinations($index, $word);
        }
    }
    
    private function addPrePostFixCombinations(int $index, string $word): void
    {
        $combinationsPre = [];
        $combinationsPost = [];
        $length = strlen($word);
        for ($i = 1; $i <= $length; $i++) {
            $combinationsPre[] = substr($word, 0, $i);
            $combinationsPost[] = substr($word, $length - $i, $i);
        }
        
        foreach($combinationsPre as $combinationPre) {
            foreach($combinationsPost as $combinationPost) {
                $this->dict[$combinationPre][$combinationPost] = $index;
            }
        }
    }
  
    /**
     * @param String $prefix
     * @param String $suffix
     * @return Integer
     */
    public function f(string $prefix, string $suffix): int
    {
        return array_key_exists($prefix, $this->dict) && array_key_exists($suffix, $this->dict[$prefix])
            ? $this->dict[$prefix][$suffix]
            : -1;
    }
}