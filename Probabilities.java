//Anarbay Sanzhar, Bekeshov Rymzhan, Kenes Adilzhan
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;

public class Probabilities {
    public static void main(String[] args) throws IOException {
        String content = new String(Files.readAllBytes(Paths.get("data.txt")), "UTF-8");
        HashMap<Character, Double> chars = Hashing.generateChars(content);

        Hashing.calculateProbabilities(chars, content.length());

        System.out.println();
        HashMap<Character, Double> sorted = Hashing.sortHash(chars);
        System.out.println("Probabilities: ");
        Hashing.printHashCD(sorted);

        Compressing compressing = new Compressing(content, sorted);
        HashMap<Character, String> shannonFano = compressing.getCompressedResult();
        System.out.println("Encoded message: ");
        String encode = "";

        for(int i = 0; i < content.length(); i++){
            encode += shannonFano.get(content.charAt(i));
        }

        System.out.println(encode);

        Hashing.printHashCS(shannonFano);


//        for(int i = 0; i < content.length(); i++){
//            System.out.print(shannonFano.get(content.charAt(i)) + " ");
//        }

        String decode = Compressing.decode(shannonFano, encode);
        System.out.println("Decoded message: ");
        System.out.println(decode);

    }


}
