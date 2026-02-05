public class seven {
    public static void main(String[] args) {
        int arr[] = {1, 2, 3, 4, 5, 6,7};

        StringBuilder sb = new StringBuilder();

        for(int i=0; i<arr.length; i++){
            if(arr[i] % 2 != 0){
                sb.append(arr[i] + " ");
            } 
        }
        System.out.println(sb.toString());
    }
}
