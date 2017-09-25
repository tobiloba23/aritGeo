module.exports =  {
    aritGeo(aritArray){
        //let aritArray = prompt("Enter an array of numbers separated by \",\"").split(',');
        let arith = 0;
        let isArith = true;
        let geom = 0;
        let isGeom = true;
        let isEmpty = true;
        
        for (i = 0; i < aritArray.length; i++){
            //check if array has non number chracters
            if(isNaN(aritArray[i])) {
                //alert("Unfortunately!, your array includes an entry that is not a number: " + aritArray[i] + ". There may be more!");     
                //return -1;
                if (!aritArray[i]){
                    aritArray[i] = 0; 
                }
                else{
                    console.log("Unfortunately!, your array includes an entry that is not a number: \'" + aritArray[i] + "\'. There may be more!");
                    return -1;
                }
            }
            //check if current array element is not empty and set the isEmpty flag according 
            if(aritArray[i]) isEmpty = false;

            //Do the following only if array has more than 2 elements
            if(i>1){
                arith = aritArray[i] - aritArray[i-1];
                if(arith !== aritArray[i-1] - aritArray[i-2]){
                    isArith = false;
                }
                geom = aritArray[i] / aritArray[i-1];
                if(geom !== aritArray[i-1] / aritArray[i-2]){
                    isGeom = false;
                }
                if (!isArith && !isGeom) return -1;
            }
        }
        if(isEmpty) return 0;

        //if array has less than 2 elements then it cannot be either arithmetic or geometric
        if(aritArray.length<3){
            return -1;
        } 
        else {
            if(isArith){
                return "Arithmetic";
            }
            else if(isGeom){
                return "Geometric";
            }
            //if the program gets here something seriously went wrong!
            return "Error";
        }

    }
}
