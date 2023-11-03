public class Roman {
    public static void main(String[] args) {
        String romanNum = "IX";
        int result = romanToInteger(romanNum);
        System.out.println("The integer value of " + romanNum + " is: " + result);
    }
    public static int romanCharToInt(char c) {

        switch (c) {
            case 'I':
                return 1;

            case 'V':
                return 5;

            case 'X':
                return 10;

            case 'L':
                return 50;

            case 'C':
                return 100;

            case 'D':
                return 500;

            case 'M':
                return 1000;

            default:
                return 0;
        }

    }

    public static int romanToInteger(String s) {

        int result = 0;
        int previousValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            char currentCharacter = s.charAt(i);
            int currentValue = romanCharToInt(currentCharacter);
            if (currentValue < previousValue) {
                result = result - currentValue;
            } else {
                result += currentValue;
            }
            previousValue = currentValue;
        }
        return result;
    }

}