<template>
	<div>
		<x-header>NSR2002评估模式</x-header>
		<div class="margins-horizontal-x margins-bottom-sm margins-top-rem">
			<div class="margins-top-md text-center"> NSR2002（Nutrition risk screening,NSR)<br/>表1初始筛查</div>
			<div class="margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th>项目</th>
							<th>是</th>
							<th>否</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>BMI<20.5</td>
						    <td style="max-width: 40px; min-width: 60px;"><input type="radio" value="0" name="bmi" @click="conceal_show" /></td>
							<td style="max-width: 40px; min-width: 60px;"><input type="radio" value="0" name="bmi" @click="conceal_hide" /></td>
						</tr>
						<tr>
							<td>最近3个月患者体重是否降低</td>
							<td><input type="radio" value="0" name="bmi" @click="conceal_show" /></td>
							<td><input type="radio" value="0" name="bmi" @click="conceal_hide" /></td>
						</tr>
						<tr>
							<td>最近一周患者饮食摄入是否降低</td>
							<td><input type="radio" value="0" name="bmi" @click="conceal_show" /></td>
							<td><input type="radio" value="0" name="bmi" @click="conceal_hide" /></td>
						</tr>
						<tr>
							<td>患者是否患严重疾病（如，强化治疗）</td>
							<td><input type="radio" value="0" name="bmi" @click="conceal_show" /></td>
							<td><input type="radio" value="0" name="bmi" @click="conceal_hide" /></td>
						</tr>
					</tbody>
				</x-table>
				<div class="margins-top-xs">
					注： 是：如果任意一项回答为“是”，应进行表2的筛查。 否：如果所有回答均“否”，患者应每周复查。如果患者有 择期大手术，应考虑制定营养计划以避免营养不良。
				</div>
				<div id="moble" style="display: none;">
					<p class="margins-top-xs text-center">表2初始筛查</p>
					<x-table full-bordered style="background-color:#fff;">
						<thead>
							<tr>
								<th colspan="2">变量</th>
								<th colspan="2">分值</th>
							</tr>
						</thead>
						<tbody id="malnutrition">
							<tr>
								<td rowspan="8" style="max-width: 20px;min-width: 20px;">营养不良状况</td>
							</tr>
							<tr>
								<td>无：正常营养状态</td>
								<td style="max-width: 50px;min-width: 50px;">0&nbsp;&nbsp;&nbsp;<input type="radio" name="malnutrition_num" value="0"></td>
							</tr>
							<tr>
								<td>轻度：3个月内体重减轻>5%或最近1周进食量小于正常需要量的50%～75%</td>
								<td>1&nbsp;&nbsp;&nbsp;<input type="radio" name="malnutrition_num1" value="1"></td>
							</tr>
							<tr>
								<td>中度：2个月内体重减轻>5%或BMI为18.5～20.5+一般健康状况受损或最近1周进食量为正常需要量的25%～60%</td>
								<td>2&nbsp;&nbsp;&nbsp;<input type="radio" name="malnutrition_num2" value="2"></td>
							</tr>
							<tr>
								<td>严重：1个月内体重减轻>5%(或3个月内减轻>15%)或BMI
									<18.5+一般健康状况受损或最近1周进食量为正常需要量的0～25%</td>
										<td>3&nbsp;&nbsp;&nbsp;<input type="radio" name="malnutrition_num3" value="3"></td>
							</tr>
						</tbody>
						<tbody id="illness">
							<tr>
								<td rowspan="8" style="max-width: 20px;min-width: 20px;">疾病严重程度</td>
							</tr>
							<tr>
								<td>无：正常营养状态</td>
								<td style="max-width: 50px;min-width: 50px;">0&nbsp;&nbsp;&nbsp;<input type="radio" name="illness_num" value="0"></td>
							</tr>
							<tr>
								<td>轻度：骨盆骨折，或尤其合并急性并发症的慢性病患者：肝硬化、慢性阻塞性肺疾病、长期血液透析、糖尿病、肿瘤</td>
								<td>1&nbsp;&nbsp;&nbsp;<input type="radio" name="illness_num1" value="1"></td>
							</tr>
							<tr>
								<td>中度：腹部大手术、卒中、重症肺炎、血液系统肿瘤</td>
								<td>2&nbsp;&nbsp;&nbsp;<input type="radio" name="illness_num2" value="2"></td>
							</tr>
							<tr>
								<td>严重：颅脑损伤、骨髓移植、加护病患（APACHE>10分）</td>
								<td>3&nbsp;&nbsp;&nbsp;<input type="radio" name="illness_num3" value="3"></td>
							</tr>
						</tbody>
						<tbody id="age">
							<tr>
								<td rowspan="4">年龄</td>
							</tr>
							<tr>
								<td>
									<70岁</td>
										<td style="max-width: 50px;min-width: 50px;">0&nbsp;&nbsp;&nbsp;<input type="radio" name="age_num" value="0"></td>
							</tr>
							<tr>
								<td>>=70岁</td>
								<td>1&nbsp;&nbsp;&nbsp;<input type="radio" name="age_num1" value="1"></td>
							</tr>
						</tbody>

					</x-table>
					<div class="margins-top-sm margins-bottom-md" style="height: 20px;">
						<div class="float-left"><button type="button" class="margins-left-md bg-fff bt-js" style="" @click="radios">计算</button></div>
						<div class="float-right margins-left-md"><span>得分</span>&nbsp;
							<div class="float-right input-k">{{ count }}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="margins-top-sm paddings-x bg-ddd">
				<p>注释：</p>
				<p> 1.该评分2002年由欧洲肠外肠内营养学会（ESPEN）提出，用于住院患者营养风险筛查。</p>
				<p> 2.NRS评分>=3分，有营养不良风险，应制定营养计划；
					<3分，需每周复查。</p>
						<p>3.美国和中国肠外肠内营养学会推荐2001NSR用于住院患者营养风险筛查。</p>
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
				count: 0
			}
		},
		methods: {
			radios: function() {
				var _this = this;
				_this.count = 0;
				$("input:checked").each(function() {
					_this.count = _this.count + Number($(this).val());
					//	console.log(_this.count);
				})
			},
			conceal_hide: function() {
				$("#moble").hide();
			},
			conceal_show:function(){
				$("#moble").show();
			}
			
		}
	}
</script>

<style>

</style>