$(document).ready(function () {
    const manager = [
        {
            id: 1,
            name: "nidal ghandour",
            position: "managing director",
            image: "images/mangars/manager1.PNG",
            information: "The contracting and general maintenance business in the United States is always changing. New technologies, trends.and policies all contribute to the changing business landscape. Since so many changes have been made in the last years. I thought it was time for some new business ideas and expanding for the USA business methods to be presented. As Beginning in UAE i am was pleased to secure one of the most valable client in UAE M/s. Etisalat account for maintenance and Fit - Out projects.This opportunity allowed me to add more knowledge to the business.which i am focusing to maintain within Al Shuwehat Contracting & General Maintenance.",
            additionalInfo: [
                {
                    header: "Cube Wooden Works & Interior Design L.LC.",
                content: "Chief Executive Officer (CEO) I Managing Partner Managing partner Cube - Etisalat division. September, 2017 - 2020 1 2Vears 10 months Jabal Ali, Dubai, United Arab Emirates"
            },
            {
                header: "The Black Stone Builders, Inc.",
                content: "Chief Executive Officer (CEO) I Managing Partner May 2004 - Present(16 years 2 months) Houston Texas 2401 Fountain View Dr. Ste. 827"
            },
            {
                header: "Syrian Company For Trading & Energy Services(LTD)",
                content: "Chief Executive Officer (CEO) January 1998 - February 2004(6 years 2 months)Damascus.Syrian Arab Republic"
            }
            
        ]
    },
    {
        id: 2,
        name: "nidal ayal",
        position: "commerical director",
        image: "images/mangars/manager2.PNG",
        information: "Being a member of a company founded in 1983 and one of the leading firms in interior fit. out. manufacturing and turnkey solutions company specialist in Carpentry and Joinery works and Interior design. Had contributed in building my profession career via the multiple mounting positions occupied during the past 25 knowledge and talent into many Areas of Expertise.",
        additionalInfo: [
            {
                header: "Cube Wooden Works & Interior Design L.L C. Factory Manager  ",
                content: "Representative ISO 9001. 2015 and Ertv'Trana 0-Mark November. 2018 - June 2020 I 1Vear 8 months Jabal Ali. Dubai. United Arab Emirates "
            },
            {
                header: "Alpha To Omega Interiors L.L.0 (A20) ",
                content: "Al Zarooni Group of Companies General Manager January 2014 February 2017 13 years 1 months) Duba :ed Arab Emirates "
            },
            {
                header: "Romeo Interiors (Al Rajhi Holding) Commercial ",
                content: "Manager November. 1995 - April. 20)3 08 years) interior Decoration and Fit Out Works I Dubai. UAE "
            }
            
            
            
        ]
    },
    {
        id: 3,
        name: "iftekhar sayed",
        position: "projects director",
        image: "images/mangars/manager3.PNG",
        information: "As a Projects Director with 15 years experience in the industry. those years sculptured my career with outstanding communication, leadership. and organizational skills that enhance service delivery and efficiency in overall company performance. Detail oriented individual offering exceptional management, leadership. and easily adaptive to change in work environment. As desirous Projects Director my main focus Bringing expertise in collaborating with project team members: utilizing proficiency in coordinating activities of a team and facilitating project-team related tasks to execute assigned work. ",
        additionalInfo: [
            {
                header: " Cube Wooden Works 84 Interior Design LLC. Projects Director .",
                content: "September. 2015 - June 2020 14vears 10months Jabal Ali. Dubai. United Arab Emirates s"
            },
            {
                header: "Touchwood Decor and Furniture Bukhatir Group.",
                content: "Project Engineer. Interior fit-outs and retail fashion division October. 2012 - August 2015 (2 years 10 months) Sharjah, United Arab Emirates "
            },
            {
                header: "Science Lab INC Project and Sales Coordinator ",
                content: "May, 2004 September, 2012 (8 years 04 Months) Sharjah, United Arab Emirates"
            }
            
        ]
    }
];
for (let i = 0; i < manager.length; i++) {
    $('#our-team .row').append('<div class="col-lg-4 col-md-6 "><div class="mangar-info mb-5 mb-lg-0"> <img src=' + manager[i].image + ' alt=""><div class="mangar-name items-transtion text-center"><h5 class="mt-3" id= ' + manager[i].id+ '><a href="#" class="items-transtion white-color">' + manager[i].name + '</a></h5><p class="white-color text-capitalize">' + manager[i].position + '</p><p class="social-media"><a href="#" class="items-transtion"><i class="fab fa-twitter"></i></a><a href="#" class="items-transtion"><i class="fab fa-facebook-f"></i></a><a href="#" class="items-transtion"><i class="fab fa-google-plus-g"></i></a><a href="#" class="items-transtion"><i class="fab fa-linkedin-in"></i></a></p></div></div></div>')
}
$('.mangar-info h5').click(function(e){
    // console.log();
    location.href=' manager.html '
    localStorage.setItem('id',e.currentTarget.id)
    
})
// document.ready(function(){
    let item=JSON.parse(localStorage.getItem('id'));
    if(item !="" ){
        
        let mi=manager[item-1].image;
        $('#manager-massage .manager-image').append('<img src='+mi+' alt="" class="h-100">');
        $(".massage-details").append('<h3 class="text-capitalize">'+manager[item-1].name+'</h3><p>'+manager[item-1].information+'</p>')
        
        $(".massage-details").append('<ul class="list-unstyled"></ul>')
        for (let i = 0; i < manager[item-1].additionalInfo.length; i++) {
            
            $(".massage-details ul").append('<li><h5>'+manager[item-1].additionalInfo[i].header+'</h5><p>'+manager[item-1].additionalInfo[i].content+'</p></li>')
        }
    }
})