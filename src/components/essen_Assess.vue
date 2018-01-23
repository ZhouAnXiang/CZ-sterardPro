<template>
	<div>
		<x-header>ESSEN评估模式</x-header>
		<div class="margins-horizontal-x margins-top-md margins-bottom-sm">
			<p class="text-center"> ESSEN评分</p>
			<div class="margins-bottom-xs margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th colspan="3">危险因素</th>
							<th colspan="1">分值</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colspan="3">
								年龄65-75岁
							</td>
							<td colspan="3" style=" max-width: 60px!important;min-width: 60px!important;">1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="3">
								年龄>75岁
							</td>
							<td colspan="3">1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="3">
								高血压
							</td>
							<td colspan="3">1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="3">
								糖尿病
							</td>
							<td colspan="3">1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="3">
								既往心肌梗死
							</td>
							<td colspan="3">1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="3">
								其他心血管疾病（除外心肌梗死和房颤
							</td>
							<td colspan="3">1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="3">
								周围动脉疾病
							</td>
							<td colspan="3">1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="3">
								吸烟
							</td>
							<td colspan="3">1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="3">
								既往缺血性卒中或TIA
							</td>
							<td colspan="3">1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
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
					分数为2分，低危，抗血小板治疗推荐阿司匹林。（参见下表）
				</div>
			</div>
			<div class="margins-top-md">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th>分值</th>
							<th>危险分层</th>
							<th>抗小学扳治疗</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><3</td>
							<td>低危</td>
							<td>阿司匹林</td>
						</tr>
						<tr>
							<td>3-6</td>
							<td>中危</td>
							<td>氯吡格雷</td>
						</tr>
						<tr>
							<td>>6</td>
							<td>高危</td>
							<td>阿司匹林+氯吡格雷</td>
						</tr>
					</tbody>
				</x-table>
			</div>
			<div class="margins-top-md bg-ddd paddings-x">
				注释：
1.ESSEN评分是评估缺血性卒中患者危险分层并指导用药的理想工具。该评分最初是从CAPRIE研究中提出来，但研究对象为心血管疾病高危人群，后来在REACH研究中验证了该评分在卒中／TIA人群中的应用。
2.对既往卒中／TIA患者，分值越高，患者发生卒中或主要血管事件风险越大；3分是一个界值，高分值患者应强化二级预防治疗
			</div>
			<div class="margins-top-md">
				参考文献：
1.A randomised,blinded,trial of Clopidogrel versus Aspirin in Patients at Risk of Ischaemic Events(CAPRIE).Lancet.1996;348:1329-1339.
2.The essen stroke risk score predicts recurrent cardiovascular events:A validation within the reduction of atherothrombosis for continued health(REACH) registry.Stroke.2009;40:350-354.
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
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<style>

</style>