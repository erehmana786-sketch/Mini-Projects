let getGrade = (marks)=>{
    if (marks >= 90  ) {
        console.log("A — Excellent!");
         
    }
    else if (marks >= 80 ) {
         console.log("B — Very Good!");
          
    }
    else if (marks >= 70 ) {
         console.log("C — Good");
          
    }
    else if (marks >= 60 ) {
         console.log( "D — Pass");
         
    }
    else{
        console.log("fail");
         
    }
}
getGrade(95)
getGrade(82)
getGrade(71)
getGrade(55)
getGrade(30)


