/*
PIE CHART
================================================ */
var pieData = {
  labels: ['Webデザイナー', 'Webデベロッパー', 'サーバーエンジニア', '営業職'],
  series: [14, 9, 8, 6]
};

var pieOptions = {
  width: '100%',
  height: '440px'
};

new Chartist.Pie('.pie-chart', pieData, pieOptions);

/*
BAR CHART
================================================ */
var barData = {
  labels: ['2018年', '2019年', '2020年'],
  series: [[10, 16, 29]]
};

var barOptions = {
  axisY: {
    offset: 60,
    scaleMinSpace: 50,
    labelInterpolationFnc: function(value) {
      return value + ' 人'
    }
  },
  width: '100%',
  height: '400px'
};

new Chartist.Bar('.bar-chart', barData, barOptions);

/*
- 練習問題
- 猫 35%、犬 30%、きりん 20%、その他 15%
- 円グラフのオプションには 幅100%、高さ300px を指定
*/
var animalData = {
  labels: ['猫', '犬', 'きりん', 'その他'],
  series: [35, 30, 20, 15]
};

var animalOptions = {
  width: '100%',
  height: '300px'
};

new Chartist.Pie('.animal-chart', animalData, animalOptions);
