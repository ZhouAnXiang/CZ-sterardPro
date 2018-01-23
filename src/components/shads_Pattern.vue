<template>
	<div>
		<x-header>ESSEN评估模式</x-header>
		<div class="margins-horizontal-x margins-top-rem  margins-bottom-sm">
			<p class="text-center"> CHADS2评分：房颤患者卒中风险评估</p>
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
								既往充血性心力衰竭（CHF)史
							</td>
							<td colspan="3" style=" max-width: 60px!important;min-width: 60px!important;">1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td colspan="3">
								高血压病史
							</td>
							<td colspan="3">1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td colspan="3">
								>=75岁
							</td>
							<td colspan="3">1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td colspan="3">
								糖尿病
							</td>
							<td colspan="3">1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td colspan="3">
								TIA/卒中病史
							</td>
							<td colspan="3">2&nbsp;&nbsp;&nbsp;<input type="radio" value="2"></td>
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
					{{ conent }}
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
							<th>卒中年发生率</th>
							<th>治疗推荐</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>低</td>
							<td>0</td>
							<td>1.9(1.2-3.0)%</td>
							<td>阿司匹林</td>
						</tr>
						<tr>
							<td>低-中</td>
							<td>1</td>
							<td>2.8(2.0-3.8)%</td>
							<td>华法林INR2-3或阿司匹林**</td>
						</tr>
						<tr>
							<td>中</td>
							<td>2</td>
							<td>4.0(3.1-5.1)%</td>
							<td>华法林INR2-3***</td>
						</tr>
						<tr>
							<td>高</td>
							<td>3</td>
							<td>5.9(4.6-7.3)%</td>
							<td>华法林INR2-3***</td>
						</tr>
						<tr>
							<td>极高</td>
							<td>>=4</td>
							<td>>8%</td>
							<td>华法林INR2-3***</td>
						</tr>
					</tbody>
				</x-table>
			</div>
			<p class="margins-top-xs">
				*：所有具有既往卒中／TIA的非瓣膜性房颤患者均为高危患者，应给予抗凝治疗；CHADS2评分仅用于一级预防。 **：综合患者意愿、出血风险和抗凝监测条件决定。对1分者，使用华法林1年的NNT约为100，只有良好的抗凝控制才能获益。 ***：对年龄>75岁者，部分专家推荐目标INR为1.6-2.5。
			</p>
			<div class="margins-top-md bg-ddd paddings-x">
				注释： 1.该量表为2006年美国心脏病协会（AHA）卒中一级预防指南推荐，用于评估房颤患者的卒中风险。 2.不能耐受口服抗凝剂（OAC）、OAC禁忌、不接受OAC、无条件行INR监测的AF患者，应用阿司匹林。
			</div>
			<div class="margins-top-md">
				参考文献： 1.Gage BF,Waterman AD,et al.Validation of clinical classification schemes for predicting stroke.Result from the National Registry of of Atrial Fibrillation.JAMA.2001;285:2864-2870. 2.2006 AHA Guidleline:Primary Prevention of Ischemic Stroke.Stroke.2006;37:1583-1633.
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
				count: 0,
				conent: "分数为0分， 低危， 卒中年发生率为1 .9 % ，治疗推荐阿司匹林。（ 参见下表）"
			}
		},
		methods: {
			radios: function() {
				var _this = this;
				$("input:checked").each(function() {
						_this.count = _this.count + Number($(this).val());
						//console.log(_this.count);
						if(_this.count == "0") {
							_this.conent = "分数为1分， 低-中危， 卒中年发生率为2.8% ，治疗推荐华法林INR2-3或阿司匹林**。（ 参见下表）";
						} else if(_this.count == "1") {
							_this.conent = "分数为1分， 低危， 华法林INR2-3或阿司匹林**（ 参见下表）";
						} else if(_this.count == "2") {
							_this.conent = "分数为2分， 中危， 卒中年发生率为4.0(% ，治疗推荐华法林INR2-3***。（ 参见下表）";
						} else if(_this.count == "3") {
							_this.conent = "分数为3分， 高危， 卒中年发生率为5.9(% ，治疗推荐华法林INR2-3***。（ 参见下表）";
						} else if(_this.count >= "4") {
						_this.conent = "分数为>=4分，   极高， 卒中年发生率为>8(%  ，治疗推荐华法林INR2-3***。（ 参见下表）";
					}
				})
		}
	}
	}
</script>

<style>