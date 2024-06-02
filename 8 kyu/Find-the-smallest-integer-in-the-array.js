function findSmallestInt(args) {
        let k = args[0];
        for(let i = 1;i<args.length;i++){
            let result = (k>args[i])?k = args[i]:args[i];
        }return k;
};console.log(findSmallestInt([78,56,232,12,11]));