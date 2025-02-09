namespace IntToRoman;

public class Solution {
    public static void Main(string[] args)
    {
        Console.WriteLine(IntToRoman(3749));
        Console.WriteLine(IntToRoman(58));
        Console.WriteLine(IntToRoman(1994));
    }
    
    public static string IntToRoman(int num) {
        int thousandDigit = num / 1000;
        int hundredDigit = (num / 100) % 10;
        int tenDigit = (num / 10) % 10;
        int oneDigit = num % 10;

        return ConvertDigit(thousandDigit, 'M', '?', '?')
               + ConvertDigit(hundredDigit, 'C', 'D', 'M')
               + ConvertDigit(tenDigit, 'X', 'L', 'C')
               + ConvertDigit(oneDigit, 'I', 'V', 'X');
    }

    private static string ConvertDigit(int digit, char one, char five, char ten)
    {
        if (digit == 0)
        {
            return "";
        }
        
        return digit switch
        {
            4 => one.ToString() + five.ToString(),
            9 => one.ToString() + ten.ToString(),
            <4 => string.Concat(Enumerable.Repeat(one, digit)),
            _ => five + string.Concat(Enumerable.Repeat(one, digit - 5))
        };
    }
}