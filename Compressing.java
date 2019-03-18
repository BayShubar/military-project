//Anarbay Sanzhar, Bekeshov Rymzhan, Kenes Adilzhan
import java.util.*;

public class Compressing {

    private static final int ASCII_LENGTH = 7;

    private String originalString;
    private int originalStringLength;
    private HashMap<Character, String> compressedResult;
    private HashMap<Character, Double> characterFrequency;

    public HashMap<Character, String> getCompressedResult() {
        return compressedResult;
    }

    public void setCompressedResult(HashMap<Character, String> compressedResult) {
        this.compressedResult = compressedResult;
    }

    public Compressing(String str, HashMap<Character, Double> probablity) {
        super();
        originalString = str;
        originalStringLength = str.length();

        characterFrequency = new HashMap<Character, Double>();

        double checkPoint = 0;
        for (Character c : originalString.toCharArray()) {
            checkPoint += probablity.get(c);
            characterFrequency.put(c, originalStringLength * probablity.get(c));
        }

        assert checkPoint == 1.0; // Invariant, make sure sum of probabilities is 1

        compressedResult = new HashMap<Character, String>();
        this.compressString();
    }

    private void compressString() {
        List<Character> charList = new ArrayList<Character>();

        Iterator<Map.Entry<Character, Double>> entries = characterFrequency.entrySet().iterator();
        while (entries.hasNext()) {
            Map.Entry<Character, Double> entry = entries.next();
            charList.add(entry.getKey());
        }

        appendBit(compressedResult, charList, true);
    }

    private void appendBit(HashMap<Character, String> result, List<Character> charList, boolean up) {
        String bit = "";
        if (!result.isEmpty()) {
            bit = (up) ? "0" : "1";
        }

        for (Character c : charList) {
            String s = (result.get(c) == null) ? "" : result.get(c);
            result.put(c, s + bit);
        }

        if (charList.size() >= 2) {
            int separator = (int) Math.floor((float) charList.size() / 2.0);

            List<Character> upList = charList.subList(0, separator);
            appendBit(result, upList, true);
            List<Character> downList = charList.subList(separator, charList.size());
            appendBit(result, downList, false);
        }
    }

    public static String decode(HashMap<Character, String> alphabet, String encode){
        String decode = "";
        //0110001001010000110101111
        int k = 0, i = 0;
        for(; i < encode.length(); ){
            while(!alphabet.containsValue(encode.substring(i, k))){
                k++;
            }

            String foundedValue = encode.substring(i, k);

            for (Map.Entry<Character, String> entry : alphabet.entrySet()) {
                if (entry.getValue().equals(foundedValue)) {
                    decode += entry.getKey();
                }
            }
            i = k;
            k++;
        }
        return decode;
    }


}
