
public class Pangram {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = checkPangram(input);
        if (isPangram) {
            System.out.println("It's a pangram!");
        } else {
            System.out.println("It's not a pangram.");
        }
    }
    public static boolean checkPangram(String input) {
        input = input.toLowerCase();
        int unqueLetterCount = 0;
        for (char i = 'a'; i <= 'z'; i++) {
            if (input.indexOf(i) != -1) {
                unqueLetterCount++;
            }
        }
        return unqueLetterCount == 26;
    }
}