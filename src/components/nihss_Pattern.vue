<template>
	<div>
		<x-header>NIHSS指数评估模式</x-header>
		<div class="margins-horizontal-x margins-top-rem margins-bottom-sm">
			<p>
				美国国立卫生研究院卒中量表：神经功能缺损评估 （NIH Stroke Scale,NIHSS)
			</p>
			<div class="margins-bottom-xs margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th>溶栓前</th>
							<th>溶栓后2h</th>
							<th>溶栓后24h</th>
							<th>溶栓后7d</th>
							<th>溶栓后90d</th>
						</tr>
						<tr>
							<th><input type="radio" name="thrombolysis" value="0"></th>
							<th><input type="radio" name="thrombolysis" value="0"></th>
							<th><input type="radio" name="thrombolysis" value="0"></th>
							<th><input type="radio" name="thrombolysis" value="0"></th>
							<th><input type="radio" name="thrombolysis" value="0"></th>
						</tr>
					</thead>
				</x-table>

				<x-table full-bordered style="background-color:#fff;margin-top: 30px;">
					<thead>
						<tr>
							<th></th>
							<th>变量</th>
							<th colspan="4">分值</th>
						</tr>
					</thead>
					<!--	<tbody>
						<tr>
							<td style=" max-width: 60px!important;min-width: 60px!important;" rowspan="20">1</td>
						</tr>
					</tbody>-->
					<tbody id="awareness">
						<tr>
							<td style=" max-width: 60px!important;min-width: 60px!important;" rowspan="20">1</td>
						</tr>
						<tr>
							<td rowspan="4">意识水平</td>
							<td>清醒</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="radio" name="sober" value="0"></td>
						</tr>
						<tr>
							<td>嗜睡</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" name="sober" value="1"></td>
						</tr>
						<tr>
							<td>昏睡</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" name="sober" value="2"></td>
						</tr>
						<tr>
							<td>昏迷</td>
							<td>3&nbsp;&nbsp;&nbsp;<input type="radio" name="sober" value="3"></td>
						</tr>

						<tr>
							<td rowspan="3">意识水平提问（月份、年龄）</td>
							<td style=" max-width: 80px!important;min-width: 80px!important;">均正确</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="radio" name="correct" value="0"></td>
						</tr>
						<tr>
							<td>1项正确</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" name="correct" value="1"></td>
						</tr>
						<tr>
							<td>均不正确或不能说</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" name="correct" value="2"></td>
						</tr>

						<tr>
							<td style=" max-width: 60px!important;min-width: 60px!important;" rowspan="6">意识水平提问（月份、年龄）</td>
							<td style=" max-width: 80px!important;min-width: 80px!important;">均正确</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="radio" name="level" value="0"></td>
						</tr>
						<tr>
							<td>1项正确</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" name="level" value="1"></td>
						</tr>
						<tr>
							<td>均不正确或不能说</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" name="level" value="2"></td>
						</tr>
					</tbody>
					<!--	<tbody id="awareness1">
						<tr>
							<td rowspan="6">1</td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;" rowspan="6">意识水平提问（月份、年龄）</td>
							<td style=" max-width: 80px!important;min-width: 80px!important;">均正确</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="radio" name="correct" value="0"></td>
						</tr>
						<tr>
							<td>1项正确</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" name="correct1" value="1"></td>
						</tr>
						<tr>
							<td>均不正确或不能说</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" name="correct2" value="2"></td>
						</tr>
					</tbody>-->
					<!--<tbody id="awareness2">
						<tr>
							<td rowspan="8">1</td>
						</tr>
						<tr>
							<td style=" max-width: 60px!important;min-width: 60px!important;" rowspan="6">意识水平提问（月份、年龄）</td>
							<td style=" max-width: 80px!important;min-width: 80px!important;">均正确</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="radio" name="level" value="0"></td>
						</tr>
						<tr>
							<td>1项正确</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" name="level1" value="1"></td>
						</tr>
						<tr>
							<td>均不正确或不能说</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" name="level2" value="2"></td>
						</tr>
					</tbody>-->
					<tbody id="stare">
						<tr>
							<td rowspan="8">2</td>
						</tr>
						<tr>
							<td style=" max-width: 60px!important;min-width: 60px!important;" rowspan="6">凝视</td>
							<td style=" max-width: 80px!important;min-width: 80px!important;">正常</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="radio" name="stare_num" value="0"></td>
						</tr>
						<tr>
							<td>部分凝视麻痹</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" name="stare_num" value="1"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">被动凝视或完全凝视麻痹（不能被眼头动作克服）</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" name="stare_num" value="2"></td>
						</tr>
					</tbody>
					<tbody id="view">
						<tr>
							<td rowspan="20">3</td>
						</tr>
						<tr>
							<td style=" max-width: 60px!important;min-width: 60px!important;" rowspan="8">视野</td>
							<td style=" max-width: 80px!important;min-width: 80px!important;">正常</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="radio" name="view_num" value="0"></td>
						</tr>
						<tr>
							<td>部分偏盲</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" name="view_num" value="1"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">完全偏盲</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" name="view_num" value="2"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">双侧偏盲（双盲、包括皮质盲）</td>
							<td>3&nbsp;&nbsp;&nbsp;<input type="radio" name="view_num" value="3"></td>
						</tr>
					</tbody>
					<tbody id="facioplegia">
						<tr>
							<td rowspan="20">4</td>
						</tr>
						<tr>
							<td style=" max-width: 60px!important;min-width: 60px!important;" rowspan="8">面瘫</td>
							<td style=" max-width: 80px!important;min-width: 80px!important;">正常</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="radio" name="facioplegia_num" value="0"></td>
						</tr>
						<tr>
							<td>轻瘫</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" name="facioplegia_num" value="1"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">部分（面部下部区域）</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" name="facioplegia_num" value="2"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">完全（单或双侧）</td>
							<td>3&nbsp;&nbsp;&nbsp;<input type="radio" name="facioplegia_num" value="3"></td>
						</tr>
					</tbody>
					<tbody id="leftarm">
						<tr>
							<td rowspan="20">5a</td>
						</tr>
						<tr>
							<td style=" max-width: 60px!important;min-width: 60px!important;" rowspan="12">左上肢运动</td>
							<td style=" max-width: 80px!important;min-width: 80px!important;">无下落（上举90度或45度，坚持10秒）</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="radio" name="leftarm_num" value="0"></td>
						</tr>
						<tr>
							<td>下落（上举90度或45度，不能坚持10秒）</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" name="leftarm_num" value="1"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">需努力抵抗重力（上举不能达90度或45度就下落）</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" name="leftarm_num" value="2"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">不能抵抗重力，立刻下落）</td>
							<td>3&nbsp;&nbsp;&nbsp;<input type="radio" name="leftarm_num" value="3"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">无运动</td>
							<td>4&nbsp;&nbsp;&nbsp;<input type="radio" name="leftarm_num" value="4"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">截肢或关节融合</td>
							<td>UN&nbsp;&nbsp;&nbsp;<input type="radio" value="0" name="leftarm_num"></td>
						</tr>
					</tbody>
					<tbody id="righttarm">
						<tr>
							<td rowspan="20">5b</td>
						</tr>
						<tr>
							<td style=" max-width: 60px!important;min-width: 60px!important;" rowspan="12">右上肢运动</td>
							<td style=" max-width: 80px!important;min-width: 80px!important;">无下落（上举90度或45度，坚持10秒））</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="radio" name="righttarm_num" value="0"></td>
						</tr>
						<tr>
							<td>下落（上举90度或45度，不能坚持10秒）</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" name="righttarm_num" value="1"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">需努力抵抗重力（上举不能达90度或45度就下落）</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" name="righttarm_num" value="2"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">不能抵抗重力，立刻下落）</td>
							<td>3&nbsp;&nbsp;&nbsp;<input type="radio" name="righttarm_num" value="3"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">无运动</td>
							<td>4&nbsp;&nbsp;&nbsp;<input type="radio" name="righttarm_num" value="4"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">截肢或关节融合</td>
							<td>UN&nbsp;&nbsp;&nbsp;<input type="radio" value="0" name="righttarm_num"></td>
						</tr>
					</tbody>
					<tbody id="leftarma">
						<tr>
							<td rowspan="20">6a</td>
						</tr>
						<tr>
							<td style=" max-width: 60px!important;min-width: 60px!important;" rowspan="12">左下肢运动</td>
							<td style=" max-width: 80px!important;min-width: 80px!important;">下落（5秒末下落）</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="radio" name="leftarma_num" value="0"></td>
						</tr>
						<tr>
							<td>下落（上举90度或45度，不能坚持10秒）</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" name="leftarma_num" value="1"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">需努力抵抗重力（5秒内就下落）</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" name="leftarma_num" value="2"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">不能抵抗重力，立刻下落</td>
							<td>3&nbsp;&nbsp;&nbsp;<input type="radio" name="leftarma_num" value="3"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">无运动</td>
							<td>4&nbsp;&nbsp;&nbsp;<input type="radio" name="leftarma_num" value="4"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">截肢或关节融合</td>
							<td>UN&nbsp;&nbsp;&nbsp;<input type="radio" name="leftarma_num" value="0"></td>
						</tr>
					</tbody>
					<tbody id="righttarmb">
						<tr>
							<td rowspan="20">6b</td>
						</tr>
						<tr>
							<td style=" max-width: 60px!important;min-width: 60px!important;" rowspan="12">左下肢运动</td>
							<td style=" max-width: 80px!important;min-width: 80px!important;">下落（5秒末下落）</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="radio" name="righttarmb_num" value="0"></td>
						</tr>
						<tr>
							<td>下落（上举90度或45度，不能坚持10秒）</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" name="righttarmb_num" value="1"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">需努力抵抗重力（5秒内就下落）</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" name="righttarmb_num" value="2"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">不能抵抗重力，立刻下落</td>
							<td>3&nbsp;&nbsp;&nbsp;<input type="radio" name="righttarmb_num" value="3"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">无运动</td>
							<td>4&nbsp;&nbsp;&nbsp;<input type="radio" name="righttarmb_num" value="4"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">截肢或关节融合</td>
							<td>UN&nbsp;&nbsp;&nbsp;<input type="radio" name="righttarmb_num" value="0"></td>
						</tr>
					</tbody>
					<tbody id="limbs">
						<tr>
							<td rowspan="20">7</td>
						</tr>
						<tr>
							<td style=" max-width: 60px!important;min-width: 60px!important;" rowspan="8">肢体共济失调</td>
							<td style=" max-width: 80px!important;min-width: 80px!important;">无共济失调</td>
							<td style=" max-width: 60px!important;min-width: 60px!important;">0&nbsp;&nbsp;&nbsp;<input type="radio" name="limbs_num" value="0"></td>
						</tr>
						<tr>
							<td>一侧有</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" name="limbs_num" value="1"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">两侧均有</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" name="limbs_num" value="2"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">截肢或关节融合</td>
							<td>UN&nbsp;&nbsp;&nbsp;<input type="radio" name="limbs_num" value="0"></td>
						</tr>
					</tbody>
					<tbody id="feel">
						<tr>
							<td rowspan="20">8</td>
						</tr>
						<tr>
							<td style=" max-width: 60px!important;min-width: 60px!important;" rowspan="6">感觉</td>
							<td style=" max-width: 80px!important;min-width: 80px!important;">正常</td>
							<td style=" max-width: 60px!important;min-width: 60px!important;">0&nbsp;&nbsp;&nbsp;<input type="radio" name="feel_num" value="0"></td>
						</tr>
						<tr>
							<td>轻到中度感觉缺失</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" name="feel_num" value="1"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">重到完全感觉缺失；四肢瘫痪；昏迷无反应</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" name="feel_num" value="2"></td>
						</tr>
					</tbody>
					<tbody id="language">
						<tr>
							<td rowspan="20">9</td>
						</tr>
						<tr>
							<td style=" max-width: 60px!important;min-width: 60px!important;" rowspan="8">语言</td>
							<td style=" max-width: 80px!important;min-width: 80px!important;">正常</td>
							<td style=" max-width: 60px!important;min-width: 60px!important;">0&nbsp;&nbsp;&nbsp;<input type="radio" name="language_num" value="0"></td>
						</tr>
						<tr>
							<td>轻到中度感觉缺失</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" name="language_num" value="1"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">严重失语</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" name="language_num" value="2"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">哑或完全失语；昏迷无反应</td>
							<td>UN&nbsp;&nbsp;&nbsp;<input type="radio" name="language_num" value="0"></td>
						</tr>
					</tbody>
					<tbody id="dysarthrosis">
						<tr>
							<td rowspan="20">10</td>
						</tr>
						<tr>
							<td style=" max-width: 60px!important;min-width: 60px!important;" rowspan="8">构音障碍</td>
							<td style=" max-width: 80px!important;min-width: 80px!important;">正常</td>
							<td style=" max-width: 60px!important;min-width: 60px!important;">0&nbsp;&nbsp;&nbsp;<input type="radio" name="dysarthrosis_num" value="0"></td>
						</tr>
						<tr>
							<td>轻到中度，能被理解，但有困难</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" name="dysarthrosis_num" value="1"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">哑或严重构音障碍</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" name="dysarthrosis_num" value="2"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">气管插管或其他物理治疗</td>
							<td>UN&nbsp;&nbsp;&nbsp;<input type="radio" name="dysarthrosis_num" value="0"></td>
						</tr>
					</tbody>
					<tbody id="unilateral">
						<tr>
							<td rowspan="20">11</td>
						</tr>
						<tr>
							<td style=" max-width: 60px!important;min-width: 60px!important;" rowspan="6">忽视症</td>
							<td style=" max-width: 80px!important;min-width: 80px!important;">正常</td>
							<td style=" max-width: 60px!important;min-width: 60px!important;">0&nbsp;&nbsp;&nbsp;<input type="radio" name="unilateral_num" value="0"></td>
						</tr>
						<tr>
							<td>视／触／空间／个人忽视；或对一种感觉双侧同时刺激消失</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" name="unilateral_num" value="1"></td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">严重的偏身忽视或一种以上的忽视（如不认识自己手或只能对一侧空间定位）</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" name="unilateral_num" value="2"></td>
						</tr>
					</tbody>
				</x-table>
			</div>
			<p class="margins-top-xs">说明：UN=untestable,无法检测</p>

			<div class="margins-top-sm margins-bottom-md" style="height: 20px;">
				<div class="float-left"><button type="button" class="margins-left-md bg-fff bt-js" style="" @click="radios">计算</button></div>
				<div class="float-right margins-left-md"><span>得分</span>&nbsp;
					<div class="float-right input-k">{{ count }}</div>
				</div>
			</div>

			<div class="margins-top-sm bg-ddd paddings-x">
				<p>注释： </p>
				<p>1.NIHSS评分用于评估卒中患者神经功能缺损程度。</p>
				<p>2.基线评估可以评估卒中严重程度，治疗后可以定期评估治疗效果。</p>
				<p>3.基线评估>16分的患者很有可能死亡，而
					<6分的很有可能恢复良好；每增加1分，预后良好的可能性降低17%。</p>
						<p>4.评分范围为0-42分，分数越高，神经受损越严重，分级如下： * 0-1分：正常或近乎正常； * 1-4分：轻度卒中/小卒中； * 5-15分：中度卒中； * 15-20分：中-重度卒中； * 21-42分：重度卒中。
							<5分，动脉源性可能性大。</p>
			</div>

			<div class="margins-top-md">
			<p>参考文献：</p> 
			<p>1.Measurements of acute cerebral infarction: A clinical examination scale. Stroke.1989;20:864-870. </p>
			<p>2.www.ninds.nih.gov/doctors/NIH_Stroke_Scale.pdf.</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { XHeader, XTable, LoadMore } from 'vux'
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
		methods: {
			radios: function() {
				var _this = this;
				_this.count = 0;
				$("input:checked").each(function() {
					//if(this.checked == true) {
					_this.count = _this.count + Number($(this).val());
					console.log(_this.count);
					//}
				})
			}
		}
	}
</script>

<style>

</style>