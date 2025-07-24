let ar = [1,2,2,3,5,7,5]
ar.sort((a,b) => a - b) //1,2,2,3,5,5,7
let duplicates = []
for(let i = 0; i <= ar.length; i ++){
        if(ar[i] !== ar[i + 1]){
            duplicates.push(ar[i])
        
    }
}

console.log(duplicates)
