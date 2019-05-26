import java.util.Arrays;

public class Test {
  public static void main(String[] args) {
    int[] nums = new int[] {2, 7, 11, 15};
    int target = 9;
    Solution1 solution1 = new Solution1();
    int[] result = solution1.twoSum(nums, target);
    System.out.println(Arrays.toString(result));
  }
}