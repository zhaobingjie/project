export const util = {
    in_array(v,arr){
        if(!v || !arr) return false;
        for(let i in arr){
            if(arr[i]==v) return true;
        }
        return false;
    }
}
