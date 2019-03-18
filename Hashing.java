//Anarbay Sanzhar, Bekeshov Rymzhan, Kenes Adilzhan
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

import static java.util.Map.Entry.comparingByValue;
import static java.util.stream.Collectors.toMap;

public class Hashing {
    public static HashMap<Character, Double> generateChars(String content) {
        HashMap<Character, Double> chars = new HashMap<>();

        for (int i = 0; i < content.length(); i++) {
            if (chars.containsKey(content.charAt(i))) {
                chars.put(content.charAt(i), chars.get(content.charAt(i)) + 1.0);
            } else {
                chars.put(content.charAt(i), Double.valueOf(1));
            }
        }

        return chars;
    }

    public static void calculateProbabilities(HashMap<Character, Double> chars, int length) {
        for (Character c : chars.keySet()) {
            chars.put(c, chars.get(c).doubleValue() / length);
        }
    }

    public static HashMap<Double, Character> generateReverse(HashMap<Character, Double> chars) {
        HashMap<Double, Character> reversedChars = new HashMap<>();
        for (Character c : chars.keySet()) {
            reversedChars.put(chars.get(c), c);
        }
        return reversedChars;
    }

    public static HashMap<Character, Double> sortHash(HashMap<Character, Double> h){
        HashMap<Character, Double> sorted = h
                .entrySet()
                .stream()
                .sorted(Collections.reverseOrder(comparingByValue()))
                .collect(
                        toMap(Map.Entry::getKey, Map.Entry::getValue, (e1, e2) -> e2,
                                LinkedHashMap::new));
        return sorted;
    }


    public static void printHashCD(HashMap<Character, Double> sorted){
        for (Character d : sorted.keySet()) {
            String key = d.toString();
            String value = sorted.get(d).toString();
            System.out.println(key + " " + value);
        }
    }

    public static void printHashCS(HashMap<Character, String> sorted){
        for (Character d : sorted.keySet()) {
            String key = d.toString();
            String value = sorted.get(d);
            System.out.println(key + " " + value);
        }
    }

}
