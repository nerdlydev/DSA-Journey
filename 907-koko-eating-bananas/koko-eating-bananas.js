/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

function check ( piles, mid , k)
{
    let total = 0;
    for( let i = 0; i <piles.length; i++)
    {
        total += Math.floor((piles[i] + mid -1)/mid);
    }

    return total <=k;
}

var minEatingSpeed = function(piles, h) {
//   let mx = Math.max(...piles);
//   for( let s = 1; s <= mx; s++)
//   {
//     let rt = 0;
//     for (let i = 0; i<piles.length; i++)
//     {
//         rt += Math.floor((piles[i] + s - 1)/ s);
//     }
//     if (rt <= h)
//     {
//         return s;
//     }
//   }  
//   return mx;

let low = 1;
let high = Math.max(...piles);
let ans = high;

while (low <= high)
{
    let mid = low + Math.floor((high - low)/2);

    if (check(piles,mid,h) === true)
    {
        high = mid - 1;
        ans = mid;
    } else {
        low = mid + 1;
    }
}

return ans;

};

