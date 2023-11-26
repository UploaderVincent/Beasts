function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('',modelReady);

}

    function modelReady(){
        classifier.classify(gotResults);
        
    }
    function gotResults(error,results){
        console.log('gotresult');
        if (error){
            console.error("!!error!!")
        }
        else{
 random_number_r = Math.floor(Math.random() * 255) + 1;
 random_number_g = Math.floor(Math.random() * 255) + 1;
 random_number_b = Math.floor(Math.random() * 255) + 1;

     document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
     document.getElementById("result_label").style.color = "rgb("+random_number_r +","+ random_number_g + ","+ random_number_b + ")";
     document.getElementById("result_count").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2) + " %";
     document.getElementById("result_count").style.color = "rgb("+random_number_r +","+ random_number_g + ","+ random_number_b + ")";
     alien1=document.getElementById("result_img");
    
     
        
           
               
           }
           else if(results[0].label == "Roar"){
               alien1.src = 'roar.jpg';
               
           }
           else{
               alien1.src = 'background noise.jpg';
              
           }
        }
    }
