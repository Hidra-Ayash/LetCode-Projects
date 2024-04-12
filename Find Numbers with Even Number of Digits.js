/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let s,count=0;
    for(let i=0;i<nums.length;i++){
        s=nums[i]+'';
         if(s.length%2==0){
            count++
         }
     }
    return count
};
 //                'odd' 'odd' 'odd' 'even'
//Example ---> Array [555,901,482,1771]
console.log(findNumbers( [555,901,482,1771])) //1
