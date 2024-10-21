
let counter = document.querySelector("#counter")
let chars = document.querySelector(".chars")



$(".open-icon").on("click", function(){
    $(".navbarside").animate({left: "0px"}, 1000)
    $(".open-icon").animate({left: "250px"}, 1000)

    
})



$(".icon-x").on("click",function(){
    $(".navbarside").animate({left:"-250px"}, 1000)
    $(".open-icon").animate({left: "20px"}, 1000)
})



$('.toggle').click(function(){
    $('.innerText').not($(this).next()).slideUp(500); 
    $(this).next().slideToggle(500);

})



let time = setInterval(()=>{
  
    
    let dateNow = new Date().getTime();

    let countDownDate = new Date(1999-9-30).getTime()
    
    let dateDiff= dateNow-countDownDate;

    
  
    
 let day = Math.floor(dateDiff / (1000*60*60*24));
    let hour =Math.floor(dateDiff % (1000*60*60*24)/(1000*60*60)); 
    let minute =Math.floor(dateDiff%(1000*60*60)/(1000*60)); 
    let second =Math.floor(dateDiff%(1000*60)/(1000)); 



    daspalyDataTime(day , hour , minute , second)
  
 },1000)



 function  daspalyDataTime(day , hour , minute , second){

    let data = `
      <div class="col-md-3 text-center">
                    <div class="inner">
                        <h3 class="">${day}d</h3>
                    </div>
                </div>
                <div class="col-md-3  text-center ">
                    <div class="inner">
                        <h3>${hour}h</h3>
                    </div>
                </div>
                <div class="col-md-3 text-center ">
                    <div class="inner">
                        <h3>${minute}m</h3>
                    </div>
                </div>
                <div class="col-md-3 text-center ">
                    <div class="inner">
                        <h3>${second}s</h3>
                    </div>
                </div>
    
    
    `

    counter.innerHTML = data

 }

  



$("textarea").on("keyup", (e)=>{
    myLength = $(e.target).val().length;
    
    $("#chars").text(
        
        100 - myLength <= 0 ? "You have exceeded 100 characters." : 100 - myLength    )

    
})