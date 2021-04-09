

!function (global, factory) {
	factory();
}(this, function () {
	let canvasWidth = 540;
	let canvasHeight = 960;
	let boxScale = 0.7;
	let wordW = canvasWidth * boxScale;
	const FONTFAMILY = 'Microsoft YaHei';

	let renderBox = document.querySelector('.render-box');
	renderBox.style.width = canvasWidth + 'px';
	renderBox.style.height = canvasHeight + 'px';
	let appRender = document.querySelector('.app-render');
	let box = document.createElement('div');
	appRender.append(box);
	box.classList.add('trans-box');
	box.style.position = 'absolute';
	box.style.width = boxScale * 100 + '%';
	box.style.height = '100%';
	box.style.left = (1 - boxScale) * 50 + '%';

	const categoryColors = ["#5AAEF3", "#62D9AD", "#5B6E96", "#a8dffa", "#ffdc4c", "#FF974C", "#E65A56", "#6D61E4", "#4A6FE2", "#6D9AE7", "#23C2DB", "#D4EC59", "#FFE88E", "#FEB64D", "#FB6E6C"];
	function getColor(i) {
		return categoryColors[i % categoryColors.length];
	}

	function getTextWidth(text, fontFamily, fontSize) {
		if (!this.ctx) {
			this.c = document.createElement('canvas');
			this.ctx = this.c.getContext('2d');
		}
		if (!fontFamily) fontFamily = FONTFAMILY;
		if (!fontSize) fontSize = FONTSIZE;
		this.ctx.font = fontSize + 'px ' + fontFamily;
		return this.ctx.measureText(text).width;
	}

	function getTextDom(curText) {
		let textDom = document.createElement('div');
		textDom.style.transform = 'rotate(0deg)';
		textDom.style.fontSize = curText.fontSize + 'px';//'16px';
		textDom.style.fontFamily = FONTFAMILY;
		textDom.style.fontWeight = 'bold';
		textDom.style.whiteSpace = 'nowrap';
		textDom.style.transition = 'all 0.2s';
		textDom.style.width = curText.textWidth + 'px';
		textDom.style.color = getColor(curText.order);

		let textDom2 = document.createElement('div');
		textDom2.innerText = curText.content;
		textDom2.classList.add('wordMove' + (curText.order % 5 + 1));
		textDom.appendChild(textDom2);

		return textDom;
	}

	let contentTexts = [{ "inPoint": 0, "outPoint": 1000, "content": "嘟" }, { "inPoint": 1000, "outPoint": 2000, "content": "您好" }, { "inPoint": 2000, "outPoint": 3000, "content": "您是大法师吗？" }, { "inPoint": 3000, "outPoint": 4000, "content": "哎" }, { "inPoint": 4000, "outPoint": 5000, "content": "你谁啊" }, { "inPoint": 5000, "outPoint": 6000, "content": "我在街上" }, { "inPoint": 6000, "outPoint": 7000, "content": "看到了您的广告" }, { "inPoint": 7000, "outPoint": 8000, "content": "我想跟你学习法术" }, { "inPoint": 8000, "outPoint": 9000, "content": "啊" }, { "inPoint": 9000, "outPoint": 10000, "content": "学习法术啊" }, { "inPoint": 10000, "outPoint": 11000, "content": "昂" }, { "inPoint": 11000, "outPoint": 12000, "content": "你" }, { "inPoint": 12000, "outPoint": 13000, "content": "学过" }, { "inPoint": 13000, "outPoint": 14000, "content": "么门派的法术" }, { "inPoint": 14000, "outPoint": 15000, "content": "啊" }, { "inPoint": 15000, "outPoint": 16000, "content": "我" }, { "inPoint": 16000, "outPoint": 17000, "content": "小时候学过" }, { "inPoint": 17000, "outPoint": 18000, "content": "少儿频道" }, { "inPoint": 18000, "outPoint": 19000, "content": "巴啦巴啦能量" }, { "inPoint": 19000, "outPoint": 20000, "content": "啥的" }, { "inPoint": 20000, "outPoint": 21000, "content": "没好使" }, { "inPoint": 21000, "outPoint": 22000, "content": "对抗不过" }, { "inPoint": 22000, "outPoint": 23000, "content": "黑法师" }, { "inPoint": 23000, "outPoint": 24000, "content": "你" }, { "inPoint": 24000, "outPoint": 25000, "content": "学法的目的是什么" }, { "inPoint": 25000, "outPoint": 26000, "content": "很多人" }, { "inPoint": 26000, "outPoint": 27000, "content": "都不相信法术" }, { "inPoint": 27000, "outPoint": 28000, "content": "我主要想学习您广告里的" }, { "inPoint": 28000, "outPoint": 29000, "content": "隔空攻击法术" }, { "inPoint": 29000, "outPoint": 30000, "content": "啥的" }, { "inPoint": 30000, "outPoint": 31000, "content": "我想修练出" }, { "inPoint": 31000, "outPoint": 32000, "content": "元婴" }, { "inPoint": 32000, "outPoint": 33000, "content": "渡雷劫" }, { "inPoint": 33000, "outPoint": 34000, "content": "飞升啥的" }, { "inPoint": 34000, "outPoint": 35000, "content": "我们这里的" }, { "inPoint": 35000, "outPoint": 36000, "content": "学费很贵啊" }, { "inPoint": 36000, "outPoint": 37000, "content": "三万块钱" }, { "inPoint": 37000, "outPoint": 38000, "content": "一套教材" }, { "inPoint": 38000, "outPoint": 39000, "content": "但是" }, { "inPoint": 39000, "outPoint": 40000, "content": "包教包会" }, { "inPoint": 40000, "outPoint": 41000, "content": "那个" }, { "inPoint": 41000, "outPoint": 42000, "content": "包推荐不" }, { "inPoint": 42000, "outPoint": 43000, "content": "法师" }, { "inPoint": 43000, "outPoint": 44000, "content": "天庭许可证啥的" }, { "inPoint": 44000, "outPoint": 45000, "content": "能给我颁发一下不" }, { "inPoint": 45000, "outPoint": 46000, "content": "能让我上天庭不" }, { "inPoint": 46000, "outPoint": 47000, "content": "我感觉吧" }, { "inPoint": 47000, "outPoint": 48000, "content": "你讲话的态度" }, { "inPoint": 48000, "outPoint": 49000, "content": "我感觉你太不诚心" }, { "inPoint": 49000, "outPoint": 50000, "content": "啊" }, { "inPoint": 50000, "outPoint": 51000, "content": "法师" }, { "inPoint": 51000, "outPoint": 52000, "content": "我是一直对您的法术" }, { "inPoint": 52000, "outPoint": 53000, "content": "半信半疑" }, { "inPoint": 53000, "outPoint": 54000, "content": "甚至说" }, { "inPoint": 54000, "outPoint": 55000, "content": "我根本就不知道" }, { "inPoint": 55000, "outPoint": 56000, "content": "你到底会不会法术" }, { "inPoint": 56000, "outPoint": 57000, "content": "啊" }, { "inPoint": 57000, "outPoint": 58000, "content": "谁在打我" }, { "inPoint": 58000, "outPoint": 59000, "content": "大师" }, { "inPoint": 59000, "outPoint": 60000, "content": "是您在打我吗" }, { "inPoint": 60000, "outPoint": 61000, "content": "嗯" }, { "inPoint": 61000, "outPoint": 62000, "content": "法师" }, { "inPoint": 62000, "outPoint": 63000, "content": "原来" }, { "inPoint": 63000, "outPoint": 64000, "content": "您真的会法术啊" }, { "inPoint": 64000, "outPoint": 65000, "content": "那您能不能" }, { "inPoint": 65000, "outPoint": 66000, "content": "再给我展现一个" }, { "inPoint": 66000, "outPoint": 67000, "content": "更厉害的法术" }, { "inPoint": 67000, "outPoint": 68000, "content": "卧槽" }, { "inPoint": 68000, "outPoint": 69000, "content": "大师" }, { "inPoint": 69000, "outPoint": 70000, "content": "您还会" }, { "inPoint": 70000, "outPoint": 71000, "content": "召唤" }, { "inPoint": 71000, "outPoint": 72000, "content": "雷电" }, { "inPoint": 72000, "outPoint": 73000, "content": "大师" }, { "inPoint": 73000, "outPoint": 74000, "content": "这个雷电是你召唤的吗" }, { "inPoint": 74000, "outPoint": 75000, "content": "现在" }, { "inPoint": 75000, "outPoint": 76000, "content": "你相信我了吧" }, { "inPoint": 76000, "outPoint": 77000, "content": "我" }, { "inPoint": 77000, "outPoint": 78000, "content": "我太相信了大师" }, { "inPoint": 78000, "outPoint": 79000, "content": "那我现在" }, { "inPoint": 79000, "outPoint": 80000, "content": "就给您转钱得了呗" }, { "inPoint": 80000, "outPoint": 81000, "content": "其实" }, { "inPoint": 81000, "outPoint": 82000, "content": "我也是法术爱好者" }, { "inPoint": 82000, "outPoint": 83000, "content": "我们门派呢" }, { "inPoint": 83000, "outPoint": 84000, "content": "现在主要有" }, { "inPoint": 84000, "outPoint": 85000, "content": "五雷助打法" }, { "inPoint": 85000, "outPoint": 86000, "content": "昂" }, { "inPoint": 86000, "outPoint": 87000, "content": "双虎神打法" }, { "inPoint": 87000, "outPoint": 88000, "content": "矮油" }, { "inPoint": 88000, "outPoint": 89000, "content": "治感冒神术" }, { "inPoint": 89000, "outPoint": 90000, "content": "矮油" }, { "inPoint": 90000, "outPoint": 91000, "content": "瀑布化鲠法" }, { "inPoint": 91000, "outPoint": 92000, "content": "神水脱瘾法" }, { "inPoint": 92000, "outPoint": 93000, "content": "洗眼明目法" }, { "inPoint": 93000, "outPoint": 94000, "content": "美容神水" }, { "inPoint": 94000, "outPoint": 95000, "content": "导泻神水" }, { "inPoint": 95000, "outPoint": 96000, "content": "封门止血法" }, { "inPoint": 96000, "outPoint": 97000, "content": "这些呢" }, { "inPoint": 97000, "outPoint": 98000, "content": "我都要问过神明之后" }, { "inPoint": 98000, "outPoint": 99000, "content": "来问一下" }, { "inPoint": 99000, "outPoint": 100000, "content": "能不能教你" }, { "inPoint": 100000, "outPoint": 101000, "content": "那你那" }, { "inPoint": 101000, "outPoint": 102000, "content": "治感冒神术" }, { "inPoint": 102000, "outPoint": 103000, "content": "那我吃点药" }, { "inPoint": 103000, "outPoint": 104000, "content": "不也能治嘛" }, { "inPoint": 104000, "outPoint": 105000, "content": "你就是法术代购呗" }, { "inPoint": 105000, "outPoint": 106000, "content": "我要是学会了" }, { "inPoint": 106000, "outPoint": 107000, "content": "以后能不能在你这" }, { "inPoint": 107000, "outPoint": 108000, "content": "拿货啥的便宜点啊" }, { "inPoint": 108000, "outPoint": 109000, "content": "我也想跟神明" }, { "inPoint": 109000, "outPoint": 110000, "content": "当代购" }, { "inPoint": 110000, "outPoint": 111000, "content": "卖点法术啥的" }, { "inPoint": 111000, "outPoint": 112000, "content": "哎" }, { "inPoint": 112000, "outPoint": 113000, "content": "我说" }, { "inPoint": 113000, "outPoint": 114000, "content": "你这个人怎么回事啊" }, { "inPoint": 114000, "outPoint": 115000, "content": "你到底学不学" }, { "inPoint": 115000, "outPoint": 116000, "content": "不学的话" }, { "inPoint": 116000, "outPoint": 117000, "content": "就不要捣乱了啊" }, { "inPoint": 117000, "outPoint": 118000, "content": "法师" }, { "inPoint": 118000, "outPoint": 119000, "content": "刚才给我展现的那个" }, { "inPoint": 119000, "outPoint": 120000, "content": "雷电法术" }, { "inPoint": 120000, "outPoint": 121000, "content": "你能不能再召唤一回" }, { "inPoint": 121000, "outPoint": 122000, "content": "你要还能召唤的话" }, { "inPoint": 122000, "outPoint": 123000, "content": "我就给您转3万过去" }, { "inPoint": 123000, "outPoint": 124000, "content": "什么雷电" }, { "inPoint": 124000, "outPoint": 125000, "content": "我数三个数啊" }, { "inPoint": 125000, "outPoint": 126000, "content": "你召唤出来" }, { "inPoint": 126000, "outPoint": 127000, "content": "我马上给你转钱" }, { "inPoint": 127000, "outPoint": 128000, "content": "3" }, { "inPoint": 128000, "outPoint": 129000, "content": "2" }, { "inPoint": 129000, "outPoint": 130000, "content": "1" }, { "inPoint": 130000, "outPoint": 131000, "content": "召唤" }, { "inPoint": 131000, "outPoint": 132000, "content": "你大爷的" }, { "inPoint": 132000, "outPoint": 133000, "content": "你雷电呢" }, { "inPoint": 133000, "outPoint": 134000, "content": "我才是大法师" }, { "inPoint": 134000, "outPoint": 135000, "content": "我才是杨永信" }, { "inPoint": 135000, "outPoint": 136000, "content": "你以后再给别人打电话" }, { "inPoint": 136000, "outPoint": 137000, "content": "吹牛逼" }, { "inPoint": 137000, "outPoint": 138000, "content": "我就让你见识见识" }, { "inPoint": 138000, "outPoint": 139000, "content": "什么叫做真正的魔法" }, { "inPoint": 139000, "outPoint": 140000, "content": "傻逼吧你" }, { "inPoint": 140000, "outPoint": 141000, "content": "#¥@&%" }, { "inPoint": 141000, "outPoint": 142000, "content": "嘟……" }];//JSON.parse(JSON.stringify(outConfig.contentTexts));
	let splitIndex = Math.floor(Math.random() * 2) + 3;//将文字分段
	let markTrans = 'left';
	let maxWidth = 0,maxLength = 0;
	let index = 0;

	let paragraphDom = document.createElement('div');
	paragraphDom.style.transformOrigin = '0px 0px';
	paragraphDom.style.transition = 'all 0.2s';
	paragraphDom.style.transform = 'scale(1)';
	paragraphDom.style.position = 'absolute';
	box.appendChild(paragraphDom);
	for (let i = 0; i < contentTexts.length; i++) {
		let curText = contentTexts[i];
		maxLength = Math.max(maxWidth, curText.content.length);
	}
	//初始化一些属性
	for (let i = 0; i < contentTexts.length; i++) {
		let curText = contentTexts[i];
		let fontSize = parseInt((1 - curText.content.length / maxLength) * 36);
		fontSize = Math.max(12, fontSize);
		curText.fontSize = fontSize;
		curText.textWidth = getTextWidth(curText.content, FONTFAMILY, fontSize);
		curText.curScale = wordW / curText.textWidth;
		curText.order = i;
		maxWidth = Math.max(maxWidth, curText.textWidth);
	}
	//开始分段
	for (let i = splitIndex; i < contentTexts.length; i++) {
		let curText = contentTexts[i];
		if (i == splitIndex) {
			curText.dir = markTrans;
			markTrans = markTrans == 'left' ? 'right' : 'left';
			splitIndex += Math.floor(Math.random() * 2) + 3;
			if (curText.dir == 'right') {
				let preText = contentTexts[i - 1];
				preText.fontSize = preText.fontSize * (maxWidth / preText.textWidth);
				if (preText.fontSize < 12) {
					preText.fontSize = 12;
				}
				preText.textWidth = getTextWidth(preText.content, FONTFAMILY, preText.fontSize);
				preText.curScale = wordW / preText.textWidth;
			}
		}
		// console.log(getTextWidth(curText.content))
	}
	console.log('contentTexts', contentTexts)

	function reomveparagraph(dom, sumLayer) {
		if (!this.findFun) {
			this.findFun = function (_dom, layer) {
				for (let i = 0; i < _dom.childNodes.length; i++) {
					let node = _dom.childNodes[i];
					if (node.classList.contains('paragraph')) {
						if (layer == sumLayer) {
							node.innerHTML = '';
						} else {
							this.findFun(node, layer + 1);
						}
						break;
					}
				}
			}
		}
		this.findFun(dom, 0);
	}
	
	function addText() {
		// console.time('addText')

		let curText = contentTexts[index];
		let textDom = getTextDom(curText);
		if (curText.dir == 'left') {

			let newParagraphDom = paragraphDom.cloneNode(false);
			let tempBox = paragraphDom;
			tempBox.style.transformOrigin = '0px 100%';
			tempBox.style.transform = 'scale(1)';
			tempBox.style.position = 'relative';
			tempBox.style.top = '';
			tempBox.classList.add('paragraph');
			reomveparagraph(tempBox, 2);

			textDom.style.transformOrigin = '0px 0px';
			textDom.style.transform = 'rotate(90deg)';
			newParagraphDom.appendChild(tempBox);
			paragraphDom = newParagraphDom;
			box.appendChild(paragraphDom);

			setTimeout(() => {
				tempBox.style.transform = 'rotate(-90deg)';
				textDom.style.transform = 'rotate(0deg)';
			}, 50);

			paragraphDom.appendChild(textDom);
			tempBox.style.bottom = -textDom.offsetHeight + 'px';

		} else if (curText.dir == 'right') {

			let newParagraphDom = paragraphDom.cloneNode(false);
			let tempBox = paragraphDom;
			tempBox.style.transformOrigin = '100% 100%';
			tempBox.style.transform = 'scale(1)';
			tempBox.style.position = 'relative';
			tempBox.style.top = '';
			tempBox.classList.add('paragraph');
			reomveparagraph(tempBox, 2);

			newParagraphDom.appendChild(tempBox);
			paragraphDom = newParagraphDom;
			box.appendChild(paragraphDom);

			textDom.style.transform = 'rotate(270deg)';
			textDom.style.transformOrigin = curText.textWidth + 'px 100%';

			setTimeout(() => {
				tempBox.style.transform = 'rotate(90deg)';
				textDom.style.transform = 'rotate(360deg)';
			}, 50);

			paragraphDom.appendChild(textDom);
			tempBox.style.left = -(tempBox.offsetWidth - curText.textWidth) + 'px';
			tempBox.style.bottom = -textDom.offsetHeight + 'px';


		} else {
			paragraphDom.appendChild(textDom);

		}

		paragraphDom.style.transform = 'scale(' + curText.curScale + ')';
		paragraphDom.style.top = canvasHeight * 0.5 - (paragraphDom.offsetHeight * curText.curScale - textDom.offsetHeight * 0.5 * curText.curScale) + 'px';

		index++;
		if (index <= contentTexts.length - 1) {
			let nextText = contentTexts[index];
			wordTimer = setTimeout(addText, nextText.inPoint - curText.inPoint);
		}
		// console.timeEnd('addText')
	}

	addText();
})