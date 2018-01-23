<template>
	<div>
		<x-header>IScore评估模式</x-header>
		<div class="margins-horizontal-x margins-top-rem margins-bottom-sm">
			<p class="text-center"> IScore评分：缺血性卒中预后评估 （IScore:Ischemic Stroke Predictive Risk Score)</p>
			<div class="margins-bottom-xs margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th colspan="2">临床变量</th>
							<th colspan="2">分值(30天)</th>
						</tr>
					</thead>
					<thead>
						<tr>
							<th colspan="2">年龄</th>
							<th colspan="1"><input type="text" class="border-ddd" style="height: 20px; width: 30px;"></th>
							<th colspan="1"><input type="text" class="border-ddd" style="height: 20px; width: 30px;"></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowspan="4">
								男性
							</td>
						</tr>
						<tr>
							<td>是</td>
							<td>0&nbsp;&nbsp;<input type="radio" value="0"></td>
							<td>0&nbsp;&nbsp;<input type="radio" value="0"></td>
						</tr>
						<tr>
							<td>否</td>
							<td>10&nbsp;&nbsp;<input type="radio" value="10"></td>
							<td>5&nbsp;&nbsp;<input type="radio" value="5"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="6">卒中严重性（NIHSS)</td>
						</tr>
						<tr>
							<td>轻度
								<=8</td>
									<td>0&nbsp;&nbsp;<input type="radio" value="0"></td>
									<td>0&nbsp;&nbsp;<input type="radio" value="0"></td>
						</tr>
						<tr>
							<td>中等9-13</td>
							<td>40&nbsp;&nbsp;<input type="radio" value="40"></td>
							<td>25&nbsp;&nbsp;<input type="radio" value="25"></td>
						</tr>
						<tr>
							<td>严重14-22</td>
							<td>65&nbsp;&nbsp;<input type="radio" value="65"></td>
							<td>40&nbsp;&nbsp;<input type="radio" value="40"></td>
						</tr>
						<tr>
							<td>昏迷>22</td>
							<td>105&nbsp;&nbsp;<input type="radio" value="105"></td>
							<td>70&nbsp;&nbsp;<input type="radio" value="70"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="6">
								卒中亚型
							</td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">腔隙性</td>
							<td>0&nbsp;&nbsp;<input type="radio" value="0"></td>
							<td>0&nbsp;&nbsp;<input type="radio" value="0"></td>
						</tr>
						<tr>
							<td>非腔隙性</td>
							<td>30&nbsp;&nbsp;<input type="radio" value="30"></td>
							<td>15&nbsp;&nbsp;<input type="radio" value="15"></td>
						</tr>
						<tr>
							<td>未确定性</td>
							<td style="max-width: 50px;min-width: 50px;">35&nbsp;&nbsp;<input type="radio" value="35"></td>
							<td style="max-width: 50px;min-width: 50px;">20&nbsp;&nbsp;<input type="radio" value="20"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="8">
								危险因素
							</td>
						</tr>
						<tr>
							<td>房颤</td>
							<td style="max-width: 50px;min-width: 50px;">10&nbsp;&nbsp;<input type="radio" value="10"></td>
							<td style="max-width: 50px;min-width: 50px;">5&nbsp;&nbsp;<input type="radio" value="5"></td>
						</tr>
						<tr>
							<td>CHF</td>
							<td style="max-width: 50px;min-width: 50px;">10&nbsp;&nbsp;<input type="radio" value="10"></td>
							<td style="max-width: 50px;min-width: 50px;">10&nbsp;&nbsp;<input type="radio" value="10"></td>
						</tr>
						<tr>
							<td>MI史</td>
							<td>———</td>
							<td style="max-width: 50px;min-width: 50px;">5&nbsp;&nbsp;<input type="radio" value="5"></td>
						</tr>
						<tr>
							<td>当前吸烟</td>
							<td>———</td>
							<td style="max-width: 50px;min-width: 50px;">5&nbsp;&nbsp;<input type="radio" value="5"></td>
						</tr>
					</tbody>

					<tbody>
						<tr>
							<td rowspan="4">
								伴随疾病
							</td>
						</tr>
						<tr>
							<td>癌症</td>

							<td>10&nbsp;&nbsp;<input type="radio" value="10"></td>
							<td>15&nbsp;&nbsp;<input type="radio" value="15"></td>
						</tr>
						<tr>
							<td>肾脏透析</td>

							<td>35&nbsp;&nbsp;<input type="radio" value="35"></td>
							<td>40&nbsp;&nbsp;<input type="radio" value="40"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="4">
								院前残疾
							</td>
						</tr>
						<tr>
							<td>生活可自理</td>

							<td>0&nbsp;&nbsp;<input type="radio"></td>
							<td>0&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td>生活不可自理</td>

							<td>30&nbsp;&nbsp;<input type="radio" value="30"></td>
							<td>15&nbsp;&nbsp;<input type="radio" value="15"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="4">
								入院时血糖mmol/L(mg/dL)
							</td>
						</tr>
						<tr>
							<td>
								<7.5(<135)</td>

									<td>0&nbsp;&nbsp;<input type="radio"></td>
									<td>0&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td>>=7.5(>=135)</td>

							<td>15&nbsp;&nbsp;<input type="radio" value="15"></td>
							<td>15&nbsp;&nbsp;<input type="radio" value="15"></td>
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
			<div class="margins-top-xs">
				<div class="border-ddd paddings-horizontal-xs paddings-top-xs paddings-bottom-md">
					分数为5分，根据公式计算得出住院期间死亡率为0.39%。（公式见下）
				</div>
			</div>

			<div class="margins-top-md text-center">
				IScore评分：卒中30天的死亡风险
			</div>
			<div style="margin-left: 10px;" id="myChart" :style="{width: '300px', height: '300px'}"></div>
			<div class="margins-top-md text-center">
				IScore评分：卒中1年的死亡风险

			</div>
			<div style="margin-left: 10px;" id="myCharts" :style="{width: '300px', height: '300px'}"></div>
			<!--	<div class="margins-top-md text-center">
				IScore评分：卒中30天的死亡风险
			</div>
			<div id="myChart" :style="{width: '300px', height: '300px'}"></div>-->
			<div class="margins-top-md bg-ddd paddings-x">
				注释： 1.IScore评分由加拿大学者开发，用于急性缺血性卒中患者入院后早期预测短期和长期死亡风险（30天和1年），分值越高，死亡风险越高。由于临床变量容易获得，所以使用广泛，社区医院也可应用。 2.MI史和吸烟与30天死亡不相关，与1年死亡相关，所以史1年死亡预测评分的危险因素。 3.IScore评分也能预测静脉溶栓后临床结局和出血风险，可指导临床治疗决策。分值越低，溶栓治疗的预后越好，出血风险越低。按分值分为三个等级： *低危：IScore
				<=139,良好结局的可能性>50%,可行溶栓治 疗； *中危：IScore 140-179,良好结局的可能性10%-50%，谨 慎溶栓； *高危：IScore >=180,良好结局的可能性
					<10%,尤其>200, 几乎无获益，颅内出血风险显著升高，不建议溶栓。
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
						trigger: 'axis'
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
					},
					yAxis: {
						type: 'value'
					},
					series: [
						{
							type: 'line',
							stack: '总量',
							data: [1, 1, 1, 2, 3, 10, 33]
						}
					]
				});
				// 基于准备好的dom，初始化echarts实例
				let myCharts = echarts.init(document.getElementById('myCharts'))
				// 绘制图表
				myCharts.setOption({
			
					tooltip: {
						trigger: 'axis'
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
					},
					yAxis: {
						type: 'value'
					},
					series: [
						{
							type: 'line',
							stack: '总量',
							data: [1, 1, 1, 2, 3, 10, 33]
						}
					]
				});
			}
		}
	}
</script>

<style>

</style>