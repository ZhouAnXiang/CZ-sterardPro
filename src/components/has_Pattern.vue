<template>
	<div>
		<x-header>HAS-BLED评估模式</x-header>
		<div class="margins-horizontal-x margins-top-rem margins-bottom-sm">
			<div class="margins-top-md text-center">HAS-BLED评分</div>
			<div class="margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th>临床特征</th>
							<th>分值</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>高血压</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td>肝功能异常</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td>肾功能异常</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td>卒中史</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td>出血史</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td>INR值波动</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td>老年（>65岁）</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td>药物</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td>嗜酒</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
					</tbody>
				</x-table>
			</div>
			<div class="margins-top-xs">
				<p>注：1.高血压指收缩压>160mmHg;</p>
				<p> 2.肝功能异常指慢性肝病（如肝硬化）或明显生化指标紊 乱（如胆红素>正常值上限的2倍，且谷丙转氨酶／谷草 转氨酶／碱性磷酸酶>正常值上限的3倍等）； </p>
				<p>3.肾功能异常定义为慢性透析或肾移植或血清肌酐 >=200ummol/L;</p>
				<p> 4.出血指既往有出血史和／或出血倾向如出血体质、贫血 等；</p>
				<p> 5.INR值不稳定指INR值易变／偏高或在治疗范围的时间短 （如<60%);</p>
					<p> 6.药物指合并用药如抗血小板药</p> </div>
					<div class="margins-top-sm margins-bottom-md" style="height: 20px;">
						<div class="float-left"><button type="button" class="margins-left-md bg-fff bt-js" style="" @click="radios">计算</button></div>
						<div class="float-right margins-left-md"><span>得分</span>&nbsp;
							<div class="float-right input-k">{{ count }}</div>
						</div>
					</div>
					<div class="margins-top-sm paddings-x bg-ddd">
						<p>注释：</p>
						<p>	 1.本·量表用于评估房颤患者抗凝治疗出血风险，分值越 大，出血风险越大。</p>
						<p>2.总分>=3分提示出血“高危”，应谨慎抗栓治疗（不论 是VKA还是抗血小板），及时纠正可控制的出血危险 因素，如未控制的血压、INR不稳定、合并药物（阿 司匹林、非甾体类抗炎药等）、酒精等，并定期复 查。</p> 
						<p> 3.有消化道出血史患者，可合用质子泵抑制剂。</p>
						<p> 4.对活动性出血的患者应待出血停止并稳定后再行抗栓 治疗。 参考文献： 1.A novel user-friendly score(HAS-BLED)to assess</p>
					</div>
					<div class="margins-top-xs">
						参考文献：
1.A novel user-friendly score(HAS-BLED)to assess 1-year risk of major bleeding in patients with atrial fibrillation:the Euro Heart Survey.Chest.2010 Nov;138(5):1093-100.
2.2010ESC-Guidelines for the management of atrial fibrillation.European Heart Journal.2010;31:2369-2429.
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