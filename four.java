public class four {
    public static void main(String[] args) {
        String target = "communication";
        String reference = "com";

        StringBuilder sb = new StringBuilder();
        for(int i=0; i<target.length();i++){
            char ch = target.charAt(i);
            if(reference.indexOf(ch) == -1){
                sb.append(ch);
            }
        }
        System.out.println(sb.toString());
    }
}
