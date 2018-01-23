<template>
	<div>
		<x-header>THRIVE评估模式</x-header>
		<div class="margins-horizontal-x margins-top-rem  margins-bottom-sm">
			<div class="margins-top-md text-center">THRIVE评分：静脉溶栓后症状性脑出血风险评估</div>
			<div class="margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th colspan="6">变量</th>
							<th colspan="1">分值</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colspan="5" rowspan="4" style=" max-width: 50px!important;min-width: 60px!important;">年龄</td>
						</tr>
						<tr>
							<td colspan="1">
								65-75
							</td>
							<td colspan="1" style=" max-width: 50px!important;min-width: 60px!important;">1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td colspan="1">
								>=80
							</td>
							<td colspan="1" style=" max-width: 50px!important;min-width: 60px!important;">2&nbsp;&nbsp;&nbsp;<input type="radio" value="2"></td>
						</tr>

					</tbody>
					<tbody>
						<tr>
							<td colspan="5" rowspan="4" style=" max-width: 50px!important;min-width: 60px!important;">NIHSS</td>
						</tr>
						<tr>
							<td colspan="1">
								11-20
							</td>
							<td colspan="1" style=" max-width: 50px!important;min-width: 60px!important;">2&nbsp;&nbsp;&nbsp;<input type="radio" value="2"></td>
						</tr>
						<tr>
							<td colspan="1">
								>=21
							</td>
							<td colspan="1" style=" max-width: 50px!important;min-width: 60px!important;">4&nbsp;&nbsp;&nbsp;<input type="radio" value="4"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td colspan="5" rowspan="6" style=" max-width: 50px!important;min-width: 60px!important;">合并症</td>
						</tr>
						<tr>
							<td colspan="1">
								高血压
							</td>
							<td colspan="1" style=" max-width: 50px!important;min-width: 60px!important;">1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td colspan="1">
								糖尿病
							</td>
							<td colspan="1" style=" max-width: 50px!important;min-width: 60px!important;">1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td colspan="1">
								房颤
							</td>
							<td colspan="1" style=" max-width: 50px!important;min-width: 50px!important;">1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
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
					 {{ conent }}
				</div>
			</div>
			<div class="margins-top-xs text-center">
				THRIVE评分对应的症状性脑出血风险
			</div>
			<div class="margins-top-sm">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th>总分</th>
							<th>THRIVE率（95%CI）</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>0-2</td>
							<td>2.4%（1.2%-4.1%）</td>
						</tr>
						<tr>
							<td>3-5</td>
							<td>6.8%（4.8%-9.3%）</td>
						</tr>
						<tr>
							<td>6-9</td>
							<td>13.2%（7.4%-21.2%））</td>
						</tr>
					</tbody>
				</x-table>
			</div>
			<div class="margins-top-xs text-center">
				THRIVE评分对应的三个月不良结局风险
			</div>
			<div class="margins-top-sm">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th>总分</th>
							<th>THRIVE率（95%CI）</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>0-2</td>
							<td>23.8%（20.2%-27.8%））</td>
						</tr>
						<tr>
							<td>3-5</td>
							<td>52.9%（48.4%-57.3%）</td>
						</tr>
						<tr>
							<td>6-9</td>
							<td>73.3%（63.8%-81.5%）</td>
						</tr>
					</tbody>
				</x-table>
			</div>
			<div class="margins-top-xs text-center">
				THRIVE评分对应的三个月死亡率
			</div>
			<div class="margins-top-sm">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th>总分</th>
							<th>THRIVE率（95%CI）</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>0-2</td>
							<td>2.4%（1.3%-4.2%）</td>
						</tr>
						<tr>
							<td>3-5</td>
							<td>12.9%（10.1%-16.1%）</td>
						</tr>
						<tr>
							<td>6-9</td>
							<td>36.2%（27.0%-46.2%）</td>
						</tr>
					</tbody>
				</x-table>
			</div>
			<div class="margins-top-sm paddings-x bg-ddd">
				注释：
1.该评分是预测静脉溶栓后症状性脑出血、静脉溶
  栓后三个月不良结局风险、静脉溶栓后三个月死亡
  率（THRIVE）的常用量表之一。

			</div>
			<div class="margins-top-sm">
				参考文献：
1.Totaled Health Risks in Vascular Events Score Predicts Clinical Outcome and Symptomatic Intracranial Hemorrhage in Chinese Patients After Thrombolysis.Stroke.2015;864-866.
			</div>
		</div>
	</div>
</template>

<script>
	import { XHeader, XTable, LoadMore } from 'vux'

	export default {
		components: {
			XHeader,
			XTable,
			LoadMore

		},
		data() {
			return {
				count:0,
				conent:"分数为0-2分，静脉溶栓后症状性脑出血率为2.4%，三个月不良结局风险为23.8%，三个月死亡率为2.4%。（参见下表）"
			}
		},
		methods: {
			radios: function() {
				var _this = this;
				$("input:checked").each(function() {
					//if(this.checked == true) {
					_this.count = _this.count + Number($(this).val());
					//console.log(_this.count);
					//}
					
				})
				if(_this.count=="0"||_this.count<="2"){
					_this.conent="分数为0-2分，静脉溶栓后症状性脑出血率为2.4%，三个月不良结局风险为23.8%，三个月死亡率为2.4%。（参见下表）";
				}else if(_this.count>="2"||_this.count<="5")
				{
				    _this.conent="分数为3-5分，静脉溶栓后症状性脑出血率为6.8%，三个月不良结局风险为52.9%，三个月死亡率为12.9%。（参见下表）";
				}else if(this.count>="6"||_this.count<="9")
				{
					_this.conent="分数为6-9分，静脉溶栓后症状性脑出血率为13.2%，三个月不良结局风险为73.3%，三个月死亡率为36.2%。（参见下表）";
				}
			}
		}
	}
</script>

<style>

</style>