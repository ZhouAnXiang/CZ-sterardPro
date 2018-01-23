<template>
	<div>
		<x-header>DRAGON评估模式</x-header>
		<div class="margins-horizontal-x margins-top-md margins-bottom-sm">
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
							<td rowspan="6">入院头部CT脑动脉高密度影或早期梗死征象</td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">无</td>
							<td style=" max-width: 80px!important;min-width: 80px!important;">0&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">任一项</td>
							<td style=" max-width: 80px!important;min-width: 80px!important;">0&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">两项</td>
							<td style=" max-width: 80px!important;min-width: 80px!important;">0&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="4">卒中前mRS>1</td>
						</tr>
						<tr>
							<td >否</td>
							<td >0&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td >是</td>
							<td >0&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="6">年龄（岁）</td>
						</tr>
						<tr>
							<td ><65</td>
							<td >0&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td >65-79</td>
							<td >1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td >>=80</td>
							<td >2&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="4">入院时血糖mmol/L(mg/dL)</td>
						</tr>
						<tr>
							<td ><=8(<=144)</td>
							<td >0&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td >>8(>144)</td>
							<td >0&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="4">发病到治疗时间(分钟（min))</td>
						</tr>
						<tr>
							<td ><=90</td>
							<td >0&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td >>90</td>
							<td >0&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
					</tbody>
						<tbody>
						<tr>
							<td rowspan="8">入院NIHSS评分</td>
						</tr>
						<tr>
							<td >0-4</td>
							<td >0&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td >>5-9</td>
							<td >1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td >>10-15</td>
							<td >2&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td >>15</td>
							<td >3&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
					</tbody>

				</x-table>
			</div>
			<div class="margins-top-xs">
				<button type="button" style="border: 1px solid #DDDDDD;margin-left: 0.3rem;">计算</button>
				<span style="margin-left: 0.45rem;">得分</span>&nbsp;<input type="text" style="border: 1px solid #DDDDDD;" />
			</div>
			<div class="margins-top-xs">
				<div class="border-ddd paddings-horizontal-xs paddings-top-xs paddings-bottom-md">
					分数为5分，根据公式计算得出住院期间死亡率为0.39%。（公式见下）
				</div>
			</div>
			<div class="margins-top-sm text-center">
				<p class="text-center">不同分值的三个月预后</p>
				<div id="myChart" :style="{width: '300px', height: '300px'}"></div>
				<p>绿柱：良好结局（mRS 0-2)</p>
				<p>黑柱：不良结局（mRS 5-6)</p>
			</div>
			<div class="margins-top-sm paddings-x bg-ddd">
				注释：
1.该评分基于缺血性卒中患者入院后至溶栓治疗前可得到的变量，通过预测静脉溶栓患者3个月的临床预后，来帮助医生判断是否行溶栓治疗。
2.分值范围为0～10，分值越高，预后越差。
3.7分为一个界值，出现良好结局的可能性在0-2分和3分患者分别为极高（90%左右）、高（70%以上）；7分以上几乎无一例预后良好。
			</div>
			<div class="margins-top-md">
				参考文献： Risk Score for in-Hospital Ischemic Stroke Mortality Derived and Validated Within the Get With The Guidelines-Stroke Program.
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
				msg: 'Welcome to Your Vue.js App'
			}
		},
	mounted() {
			this.drawLine();
		},
		methods: {
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = echarts.init(document.getElementById('myChart'))
				// 绘制图表
				myChart.setOption({
					title: {
						text: ''
					},
					color: ['#3398DB'],
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
						axisTick: {
							alignWithLabel: true
						}
					}],
					yAxis: [{
						type: 'value'
					}],
					series: [{
						name: '直接访问',
						type: 'bar',
						barWidth: '60%',
						data: [10, 52, 200, 334, 390, 330, 220]
					}]
				});
			}
		}
	}
</script>

<style>

</style>