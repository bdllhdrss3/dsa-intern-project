 function analyse(){
     let sentiment = document.getElementById("sentence-to-analyse").value
        if(!sentiment){return}
        let loader = document.getElementById("loading")
        loader.hidden = false
        fetch(analysisUrl+`?sentiment=${sentiment}`)
            .then(response => response.json())
            .then(function (x) {
                console.log(x)
                document.getElementById('analysis').innerText = x.analysis
                document.getElementById('sentence').innerText = x.sentence
                loader.hidden = true
              
            })
            .catch(function(e){
                loader.hidden = true
            })
    }