function maxProfit( prices ) {
    // write code here
    // if(prices== null) return 0
    // let len=prices.length
    // let dp=[]
    // for(let i=0;i<len;i++){
    //     dp[i]=[]
    // }
    // dp[0][0]=0
    // dp[0][1]=-prices[0]
    // for(let i=1;i<len;i++){
    //     dp[i][0]=Math.max(dp[i-1][0],dp[i-1][1]+prices[i])
    //     dp[i][1]=Math.max(dp[i-1][1],-prices[i])
    // }
    // return dp[len-1][0]
     // write code here
     if(prices === null) return 0
     let len = prices.length
     let db = []
     for(let i=0; i<len; i++) {
         db[i] = []
     }
     db[0][0] = 0
     db[0][1] = -prices[0]
     for(let i=1; i<len; i++) {
         db[i][0] = Math.max(db[i-1][0], db[i-1][1]+prices[i])
         db[i][1] = Math.max(db[i-1][1], -prices[i])
     }
     return db[len-1][0]
}

const a= maxProfit([1,4,9,0,7])
console.log(a)
