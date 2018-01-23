<template>
	<div>
		<x-header>DRAGON评估模式</x-header>
		<div class="margins-horizontal-x margins-top-rem margins-bottom-sm">
			<p class="text-center">
				DRAGON评分：预测静脉溶栓三个月预后
			</p>
			<div class="margins-bottom-xs margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th colspan="2">项目</th>
							<th colspan="2">分值</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowspan="6" colspan="1">入院头部CT脑动脉高密度影或早期梗死征象</td>
						</tr>
						<tr>
							<td>无</td>
							<td colspan="2">0&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="0"></td>
						</tr>
						<tr>
							<td>任一项</td>
							<td colspan="2">2&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td>两项</td>
							<td colspan="2">5&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="2"></td>
						</tr>
					</tbody>
					<!--	<tbody>
						<tr>
							<td rowspan="4" colspan="1">卒中前mRS>1</td>
						</tr>
						<tr>
							<td>否</td>
							<td colspan="2">1&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td>是</td>
							<td colspan="2">0&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
					</tbody>-->
					<tbody>
						<tr>
							<td rowspan="6" colspan="1">年龄（岁）</td>
						</tr>
						<tr>
							<td>0</td>
							<td colspan="2">1&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="0"></td>
						</tr>
						<tr>
							<td>1</td>
							<td colspan="2">1&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>

					</tbody>
					<tbody>
						<tr>
							<td rowspan="4" colspan="1">入院时血糖 mmol/L(mg/dL)
							</td>
						</tr>
						<tr>
							<td>
								<=8(<=144)</td>
									<td colspan="2">0&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="0"></td>
						</tr>
						<tr>
							<td>>8(>144)</td>
							<td colspan="2">2&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="4" colspan="1">发病到治疗时间(分钟（min))
							</td>
						</tr>
						<tr>
							<td>
								<=90</td>
									<td colspan="2" style="max-width: 80px;min-width: 80px;">0&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="0"></td>
						</tr>
						<tr>
							<td>>90</td>
							<td colspan="2" style="max-width: 80px;min-width: 80px;">2&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="8" colspan="1">入院NIHSS评分
							</td>
						</tr>
						<tr>
							<td>0-4</td>
							<td colspan="2" style="max-width: 80px;min-width: 80px;">0&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="0"></td>
						</tr>
						<tr>
							<td>5-9</td>
							<td colspan="2" style="max-width: 80px;min-width: 80px;">1&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td>10-15</td>
							<td colspan="2" style="max-width: 80px;min-width: 80px;">2&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="2"></td>
						</tr>
						<tr>
							<td>>15</td>
							<td colspan="2" style="max-width: 80px;min-width: 80px;">3&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="3"></td>
						</tr>
					</tbody>

				</x-table>
			</div>
			<div class="margins-top-sm margins-bottom-md" style="height: 20px;">
				<div class="float-left"><button type="button" class="margins-left-md bg-fff bt-js" style="" @click="radios">计算</button></div>
				<div class="float-right margins-left-md"><span>得分</span>&nbsp;
					<div class="float-right input-k">{{ count }}</div>
				</div>
			</div>
			<p class="text-center margins-top-xs">不同分值的三个月预后
			</p>
			<div id="myChart" :style="{width: '300px', height: '300px'}"></div>
			<div class="bg-ddd paddings-x">
				注释： 1.该评分基于缺血性卒中患者入院后至溶栓治疗前可得到的变量，通过预测静脉溶栓患者3个月的临床预后，来帮助医生判断是否行溶栓治疗。 2.分值范围为0～10，分值越高，预后越差。 3.7分为一个界值，出现良好结局的可能性在0-2分和3分患者分别为极高（90%左右）、高（70%以上）；7分以上几乎无一例预后良好。
			</div>
			<div class="margins-top-md">
				参考文献： Predicting outcome of IV thrombolysis-treatd ischemic strock patients:The DRAGON score.Neurology 2012;78:427-432.
			</div>
		</div>
	</div>
</template>

<script>
	import { XHeader, XTable, LoadMore } from 'vux'
	// 引入基本模板
	let echarts = require('echarts/lib/echarts')
	// 引入柱状图组件
	require('echarts/lib/chart/bar')
	// 引入提示框和title组件
	require('echarts/lib/component/tooltip')
	require('echarts/lib/component/title')
	export default {
		name: 'hello',
		components: {
			XHeader,
			XTable,
			LoadMore
		},
		data() {
			return {
				count: 0
			}
		},
		mounted() {
			this.drawLine();
		},
		methods: {
			radios: function() {
				var _this = this;
				$("input:checked").each(function() {
					//if(this.checked == true) {
					_this.count = _this.count + Number($(this).val());
					console.log(_this.count);
					//}
				})
			},
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = echarts.init(document.getElementById('myChart'))
				// 绘制图表
				myChart.setOption({
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					legend: {
						data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
					}],
					yAxis: [{
						type: 'value'
					}],
					series: [

						{
							name: '视频广告',
							type: 'bar',
							stack: '广告',
							data: [150, 232, 201, 154, 190, 330, 410]
						},

						{
							name: '必应',
							type: 'bar',
							stack: '搜索引擎',
							data: [60, 72, 71, 74, 190, 130, 110]
						}
					]
				});
			}
		}
	}
</script>

<style>

</style>