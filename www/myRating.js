 $( document ).ready(function() {
	
$('#star_iq').raty({
  size     	: 24,
  number	: 5,
  width		: 120,
  target	: "#rating1Hint",
  targetKeep: true,
  targetText: '--',
  starOff  	: 'img/star-off-big.png',
  starOn   	: 'img/star-on-big.png'
});


$('#star_emotion').raty({
  iconRange: [
    { range: 1, on: 'img/1.png', off: 'img/0.png' },
    { range: 2, on: 'img/2.png', off: 'img/0.png' },
    { range: 3, on: 'img/3.png', off: 'img/0.png' },
    { range: 4, on: 'img/4.png', off: 'img/0.png' },
    { range: 5, on: 'img/5.png', off: 'img/0.png' }
  ],
   width		: 120,
  target	: "#star_emotionHint",
  targetKeep: true,
  targetText: '--',
  hints: ['极度悲伤', '很差', '一般般', '很好', '好的一米']
});

$('#star_sports').raty({
  size     	: 24,
  number	: 5,
  width		: 120,
  target	: "#star_sportsHints",
  targetKeep: true,
  targetText: '--',
  starOff  	: 'img/star-off-big.png',
  starOn   	: 'img/star-on-big.png',
  hints: ['一动不动', '随处走走', '一般运动', '大汗淋淋', '过度锻炼']
});

});

