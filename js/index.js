(function(){
	// 对于Swiper对象的创建
	var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      mousewheel: true,
    });
})();
// 对于中英文切换的实现
(function(){
	var switches = document.querySelectorAll(".nav-right li");
	var title = document.querySelector(".home .title");
	var name = document.querySelector(".home .name");
	var professional = document.querySelector(".home .professional");
	var email = document.querySelector(".home .email");
	// 准备一个json结构的数据
	var data = {
		"cn":{"firstPage":
			{
				"title":"生活是一种绵延不绝的渴望，渴望不断上升，变得更伟大而高贵。",
				"name":"我叫刘强东",
				"professional":"一名前端研发工程师",
				"email":"zhaoky2016@163.com"
			},"secondPage":{},"thirdPage":{},"fourPage":{}
		},
		"en":{"firstPage":
			{
				"title":"Life is a kind of endless yearning, eager to continue to rise, become more great and noble.",
				"name":"I am Zhao Keyu",
				"professional":"A front-end R & D engineer",
				"email":"zhaoky2016@163.com"
			},"secondPage":{},"thirdPage":{},"fourPage":{}
		}
	};
	// 当点击发生时，需要根据被点击到的按钮的不同，分别使用不同的数据
	for(var i=0;i<switches.length;i++){
		switches[i].index = i;
		switches[i].addEventListener("click",function(){
			var json = (this.index==0?data["cn"]["firstPage"]:data["en"]["firstPage"]);
			title.innerHTML = json["title"]
			name.innerHTML = json["name"]
			professional.innerHTML = json["professional"]
			email.innerHTML = json["email"]
		});
	}
})();