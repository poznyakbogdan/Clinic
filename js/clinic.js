window.onload = function () {

	var sliderLeftButton = document.getElementById("toLeftButton");
	var sliderRightButton = document.getElementById("toRightButton");
	
	function  sliderBtnLeftHandler () {
		var sliderBlocks = document.getElementsByClassName("CommonPropertiesOfSlide");
		var beforeElem = [],
			afterElem = []; 
		for (var i = 1; i <= sliderBlocks.length; i++) {
			beforeElem[1] = afterElem[1];
			beforeElem[2] = afterElem[2];
			afterElem[1] = $(".CommonPropertiesOfSlide:nth-child(" + i + ")").css("left");
			afterElem[2] = $(".CommonPropertiesOfSlide:nth-child(" + i + ")").css("opacity");
			$(".CommonPropertiesOfSlide:nth-child(" + i + ")").css("left","" + beforeElem[1] + "");
			$(".CommonPropertiesOfSlide:nth-child(" + i + ")").css("opacity", "" + beforeElem[2] + "");	
		}
	}

	function  sliderBtnRightHandler () {
		var sliderBlocks = document.getElementsByClassName("CommonPropertiesOfSlide");
		var beforeElem = [],
			afterElem = []; 
		for (var i = sliderBlocks.length; i >= 1; i--) {
			beforeElem[1] = afterElem[1];
			beforeElem[2] = afterElem[2];
			afterElem[1] = $(".CommonPropertiesOfSlide:nth-child(" + i + ")").css("left");
			afterElem[2] = $(".CommonPropertiesOfSlide:nth-child(" + i + ")").css("opacity");
			$(".CommonPropertiesOfSlide:nth-child(" + i + ")").css("left","" + beforeElem[1] + "");
			$(".CommonPropertiesOfSlide:nth-child(" + i + ")").css("opacity", "" + beforeElem[2] + "");
		}
	}

	sliderRightButton.addEventListener("click", sliderBtnRightHandler);
	sliderLeftButton.addEventListener("click", sliderBtnLeftHandler);
}