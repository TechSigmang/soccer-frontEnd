// function reStr(str){
//     if(str.length <=1){
//         return str
//     }

//     let fc = str.charAt(0)
//     let lc = str.slice(1)

//     return reStr(lc) + fc
// }

// console.log(reStr('Saheed'));

// let x = ['1','2','15','-7','300']
// let y = x.sort()

// console.log(y);

function delBlank(items){
 for(var i =0; i< items.length; i++){
        if(items[i].length == 0){
            items.splice(i, 1)
        }
    }
}

let names = ['Rachel','','Magah','','','Tim']
console.log(delBlank(names));

// function hasPosNeg(array)
// {
//     let hasPos = false
//     let hasNeg = false
//     array.forEach(num => {
//         hasPos = num > 0
//         hasNeg = num < 0
//     });

//     return [hasPos, hasNeg]
// }

// console.log(hasPosNeg([-1,0,1]));

// function test(sentList){
//     let root = {}
//     sentList.forEach(sent => {
//         let base = root
//         sent.split(' ').forEach(word =>{
//             if(base[word] === undefined){
//                 base[word] = {}
//             }
//             base = base[word]
            
//         })
        
//     });
//     return root
// }

// console.log(test['Hello Word','Hello there']);