function challenge_2(nums) {
    let missingNumber;
    for (let i = 0; i <= nums.length; i++) {
      if (!nums.includes(i)) {
        missingNumber = i;
        break;
      }
    }
    return missingNumber;
}
  