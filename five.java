public class five {
    public static void main(String[] args) {
        int [] arr = {1,2,3,4,5,6};
        int evenSum = 0;
        int oddSum = 0;
        for(int num : arr) {
            if(num % 2 == 0) {
                evenSum += num;
            } else {
                oddSum += num;
            }
        }
        System.out.println("Even Sum: " + evenSum);
        System.out.println("Odd Sum: " + oddSum);
    }
}
