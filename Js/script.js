document.addEventListener('DOMContentLoaded',
function(){   
        let Today=new Date();
        year = Today.getFullYear();
        document.getElementById("copyright").innerText=year;
        
        document.getElementById("resume-btn").addEventListener('click',
            ()=>{
                window.alert("Resume not yet Attached");    
            }   
        )
           
    }
)


    let value="I'm Kameshwaran!";
    let i=0;
        function typing(){
            if(i<value.length){
                document.getElementById("name").innerHTML+=value.charAt(i);
                i++;
                setTimeout(typing,100);
            }
            else{
                typingdev();
            }
        }

    let dev="Aspiring Web Developer < / >";
    let j=0;
    function typingdev(){
        if(j<dev.length){
            document.getElementById('dev').innerHTML+=dev.charAt(j);
            j++;
            setTimeout(typingdev,100);
        }
    }
        

    document.addEventListener('contextmenu',(e)=>{
        e.preventDefault();
        window.alert("Contextmenu event doesn't work");
    })

    document.getElementById('up-arr').addEventListener('click',function ()  {
        window.scrollTo({
            top:0,
        })
    })
