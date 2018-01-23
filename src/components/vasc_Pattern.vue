<template>
	<div>
		<x-header>CHA2DS2-VASc评估模式</x-header>
		<div class="margins-horizontal-x margins-top-rem margins-bottom-sm">
			<p class="text-center">        CHA2DS2-VASc评分：房颤患者卒中风险评估</p>
			<div class="margins-bottom-xs margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th colspan="3">项目</th>
							<th colspan="1">分值</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colspan="3">
								充血性心力衰竭／左室功能不全
							</td>
							<td colspan="3" style=" max-width: 60px!important;min-width: 60px!important;">1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td colspan="3">
								高血压
							</td>
							<td colspan="3">1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td colspan="3">
								>=75岁
							</td>
							<td colspan="3">2&nbsp;&nbsp;&nbsp;<input type="radio" value="2"></td>
						</tr>
						<tr>
							<td colspan="3">
								糖尿病
							</td>
							<td colspan="3">1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td colspan="3">
								TIA／卒中病史／血栓栓塞
							</td>
							<td colspan="3">2&nbsp;&nbsp;&nbsp;<input type="radio" value="2"></td>
						</tr>
						<tr>
							<td colspan="3">
								血管疾病（包括既往心梗、主动脉斑块、周围动脉疾病）
							</td>
							<td colspan="3">1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td colspan="3">
								65～74岁
							</td>
							<td colspan="3">1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td colspan="3">
								女性
							</td>
							<td colspan="3">1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>

					</tbody>
				</x-table>
			</div>
		<div class="margins-top-sm margins-bottom-md" style="height: 20px;">
				<div class="float-left"><button type="button" class="margins-left-md bg-fff bt-js" style="" @click="radios">计算</button></div>
				<div class="float-right margins-left-md"><span>得分</span>&nbsp;
					<div class="float-right input-k" id="element_div">{{ count }}</div>
				</div>
			</div>
			<div class="margins-top-xs">
				<div class="border-ddd paddings-horizontal-xs paddings-top-xs paddings-bottom-md">
					{{ content }}
				</div>
			</div>
			<div class="margins-top-md">
				<p class="text-center margins-top-xs">基于CHADS2评分的危险分层和治疗推荐
				</p>
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th>危险分层</th>
							<th>分值</th>
							<th>抗栓治疗</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>低危</td>
							<td style="min-width: 150px;max-width: 150px;">*0:无危险因素；*1:（因女性），<65岁的孤立性AF患者；</td>
							<td>1.9(1.2-3.0)%</td>
						</tr>
						<tr>
							<td>中危</td>
							<td style="min-width: 70px;max-width: 70px;">1</td>
							<td>基于出血风险评估及患者意愿，考虑OAC</td>
						</tr>
						<tr>
							<td>高危</td>
							<td style="min-width: 70px;max-width: 70px;">>=2</td>
							<td>若无禁忌症，推荐OAC</td>
						</tr>
					</tbody>
				</x-table>
			</div>
			<p class="margins-top-xs">OAC:口服抗凝药；
*：若患者拒绝使用OAC，可考虑抗血小板治疗，使用阿司
     匹林联合氯吡格雷或阿司匹林单用。
			</p>
			<div class="margins-top-md bg-ddd paddings-x">
注释：
1.该评分由CHADS2评分演变而来，为2012年欧洲房颤指南推荐。
2.相比CHADS2，该评分能识别无需抗栓治疗的“真正低风险”患者。
3.CHADS2评分可作为一种初始、快速和容易记忆的卒中风险评估方法，对CHADS2评分为0～1的患者，建议使用CHA2DS2-VASC评分系统。
			</div>
			<div class="margins-top-md">
				参考文献：
1.Refining clinical risk stratification for predicting stroke and thromboembolism in atrial fibrillation using a novel risk factor-based approach:The euro heart survey on atrial fibrillation.Chest.2010;137:263-272.
2.Validation of risk stratifaication schemes for predicting stroke and thromboembolism in patients with atrial fibrillation:Nationwide cohort study.BMJ.2011;342:d124.
3.2010 ESC-Guidelines for the management of atrial fibrillation.European Heart Journal.2010;31:2369-2429.
4.2012 focused update of the ESC Guidelines for the management of atrial fibrillation.European Heart Journal.2012;33:2719-2717.
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
				 content:"分数为0分，低危，不予抗栓治疗。（参见下表）"
			}
		},
		methods:{
			radios:function(){
				 let _this = this;
			     $("input:checked").each(function(){
		             _this.count =_this.count+ Number($(this).val());
			     })
			     if(_this.count=="0"){
			     	_this.content = "分数为0分，低危，不予抗栓治疗。（参见下表）";
			     }else if(_this.count == "1"){
			     	_this.content = "分数为1分，中危，基于出血风险评估及患者意愿，考虑OAC。（参见下表）";
			     }else if(_this.count >= "2"){
			     	_this.content = "分数为>=2分，高危，若无禁忌症，推荐OAC。（参见下表）";
			     }
			}
		}
	}
</script>

<style>