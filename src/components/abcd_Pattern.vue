<template>
	<div>
		<x-header>ABCD系列评估模式</x-header>
		<div class="margins-horizontal-x margins-top-rem  margins-bottom-sm">
			<p class="text-center"> ABCD系列评分：评估TIA后早期卒中风险</p>
			<div class="margins-bottom-xs margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th colspan="3">项目</th>
							<th colspan="1" value="1">ABCD2-1分值</th>
							<th colspan="1" value="1">ABCD2-1分值</th>
							<th colspan="1" value="1">ABCD3-1分值</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colspan="3">
								收缩压>=140mmHg和（或）舒张压>=90mmHg
							</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" id="systolic_one" name="systolic_one" value="1"></td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" id="systolic_two" name="systolic_one" value="1"></td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" id="systolic_three" name="systolic_one" value="1"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td colspan="2" rowspan="4">临床特征</td>
							<td>一侧肢体无力</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" id="lctz_one" name="lctz_one" value="2"></td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" id="lctz_two" name="lctz_one" value="2"></td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" id="lctz_three" name="lctz_one" value="2"></td>
						</tr>
						<tr>
							<td>不伴无力的言语障碍</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" id="yyza_one" name="yyza_one" value="1"></td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" id="yyza_two" name="yyza_one" value="1"></td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" id="yyza_three" name="yyza_one" value="1"></td>
						</tr>

					</tbody>
					<tbody>
						<tr>
							<td colspan="2" rowspan="4">症状持续时间</td>
							<td>>=60分钟</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" id="symptom_one" name="symptom_one" value="2"></td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" id="symptom_two" name="symptom_one" value="2"></td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" id="symptom_three" name="symptom_one" value="2"></td>
						</tr>
						<tr>
							<td>10-59分钟</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" id="symptomTime_one" name="symptomTime_one" value="1"></td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" id="symptomTime_two" name="symptomTime_one" value="1"></td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" id="symptomTime_three" name="symptomTime_one" value="1"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td colspan="3">
								糖尿病
							</td>
							<td colspan="1" style=" max-width: 80px!important;min-width: 80px!important;">1&nbsp;&nbsp;&nbsp;<input name="tnb_one" id="tnb_one" type="radio" value="1"></td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" name="tnb_one" id="tnb_two" value="1"></td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" name="tnb_one" id="tnb_three" value="1"></td>
						</tr>

					</tbody>
					<tbody>
						<tr>
							<td colspan="3">
								双重TIA发作（7天内至少发作两次）
							</td>
							<td colspan="1" style=" max-width: 80px!important;min-width: 80px!important;" id="tia_one" value="1">——</td>
							<td>——</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" name="tia_two" id="tia_two" value="2"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td colspan="2" rowspan="4">影像学检查</td>
							<td>DWI检查发现高信号</td>
							<td>——</td>
							<td>——</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" name="dwi" id="dwi" value="2"></td>
						</tr>
						<tr>
							<td>同侧颈动脉狭窄>=50%</td>
							<td>——</td>
							<td>3&nbsp;&nbsp;&nbsp;<input type="radio" name="tc_one" id="tc_one" value="3"></td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" name="tc_one" id="tc_two" value="2"></td>
						</tr>

					</tbody>
				</x-table>
			</div>
			<div class="margins-top-xs">

				说明： 1.ABCD2-1总分最大值为10分； 2.临床特征中一侧肢体无力与不伴无力的言语障碍，二 项只能选择其中一项。

			</div>
			<div class="margins-top-sm margins-bottom-md" style="height: 20px;">
				<div class="float-left"><button type="button" class="margins-left-md bg-fff bt-js" style="" @click="radios">计算</button></div>
				<div class="float-right margins-left-md"><span>得分</span>&nbsp;
					<div class="float-right input-g">{{ count }}</div>
				</div>
			</div>

			<div class="margins-top-xs">
				<div class="border-ddd paddings-horizontal-xs paddings-top-xs paddings-bottom-md">
					{{ conent }}
				</div>
			</div>

			<p class="margins-top-sm text-center">不同分值对应的危险分层</p>
			<div class="margins-top-md">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th>危险分层</th>
							<th>ABCD2-1分值</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>高危</td>
							<td>7-10</td>
						</tr>
						<tr>
							<td>中危</td>
							<td>4-6</td>
						</tr>
						<tr>
							<td>低危</td>
							<td>0-3</td>
						</tr>
					</tbody>
				</x-table>
			</div>
			<div class="margins-top-md">
				<p>参考文献：</p>
				<p> 1.A simple score(abcd) to identify individuals at high early risk of stroke after transient ischaemic attack.Lancet,2005,366(9479):29-36.</p>
				<p> 2.Validation and refinement of scores to predict very stroke risk after transient ischaemic attack.Lancet,2007,369(9558):283-92. </p>
				<p> 3.Addition of brain and carotid imaging to the ABCD2 score to identify patients at early risk of stroke after transient ischaemic attack:a multicentre observational study.Lancet Neurol.2010 Nov;9(11):1060-9.</p>
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
				conent:"ABCD2分数为4分，属于中危；ABCD2-1分数为7分，属于高危；ABCD3-1分数为6分，属于中危。（参见下表）"
			}
		},
		methods: {
			radios: function() {
				var _this = this;
				_this.count = 0;

				$("input:checked").each(function() {
					_this.count = _this.count + Number($(this).val());
				})
				if(_this.count=="0" && _this.count=="3"){
					_this.conent="ABCD2分数为"+_this.count+"分，属于中危；ABCD2-1分数为"+_this.count+"分，属于高危；ABCD3-1分数为"+_this.count+"分，属于低危。（参见下表）";
				}else if(_this.count=="4" && _this.count=="6")
				{
				    _this.conent="ABCD2分数为"+_this.count+"分，属于中危；ABCD2-1分数为"+_this.count+"分，属于高危；ABCD3-1分数为"+_this.count+"分，属于中危。（参见下表）";
				}else if(this.count=="7" && _this.count=="10")
				{
					_this.conent="ABCD2分数为"+_this.count+"分，属于中危；ABCD2-1分数为"+_this.count+"分，属于高危；ABCD3-1分数为"+_this.count+"分，属于高危。（参见下表）";
				}
			}
		}
	}
</script>

<style>

</style>