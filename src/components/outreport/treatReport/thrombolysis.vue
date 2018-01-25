<template>
	<div class="discharg-report">
		<div class="margins-horizontal-x margins-top-md margins-bottom-sm">
			<div class="margins-top-md">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th>患者姓名</th>
                            <th>性别</th>
                            <th>年龄</th>
                            <th>发病时间</th>
                            <th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{{ patient_info.name }}</td>
							<td>{{ patient_info.sex }}</td>
                            <td>{{ patient_info.age }}</td>
                            <td>{{ patient_info.onset_time }}</td>
                            <td>本报告仅限于本院内部交流使用</td>
						</tr>
					</tbody>
				</x-table>
			</div>
            <div class="margins-top-xs text-left"style='font-size: 16px;font-weight: bold;'>患者概况</div>
			<hr class='t3X' style='margin-top:1px;height: 1px;width: 100%;background:#000;'/> 
			<div class="margins-top-sm">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr v-bind:style="{background:'#eee'}" v-show="general_situation.hospitalized">
							<th>入院情况</th>
							<th style="text-align:left;padding-left:0.2rem;">{{general_situation.hospitalized}}</th>
						</tr>
					</thead>
					<tbody>
						<tr v-show="general_situation.past_history">
							<td>既往史</td>
							<td style="text-align:left;padding-left:0.2rem;" >{{general_situation.past_history}}</td>
						</tr>
						<tr v-bind:style="{background:'#eee'}" v-show="general_situation.mrs">
							<td>入院时mRS</td>
							<td style="text-align:left;padding-left:0.2rem;">{{general_situation.mrs}}</td>
						</tr>
						<tr v-show="general_situation.nihhs">
							<td>入院时NIHSS</td>
							<td style="text-align:left;padding-left:0.2rem;">{{general_situation.nihhs}}</td>
						</tr>
					</tbody>
				</x-table>
			</div>
            <div class="margins-top-xs text-left"style='font-size: 16px;font-weight: bold;'>诊断</div>
			<hr class='t3X' style='margin-top:1px;height: 1px;width: 100%;background:#000;'/> 
            <div class="margins-top-xs">
                <x-table full-bordered style="background-color:#fff;">
                    <thead  v-bind:style="{background:'#eee'}">
                        <tr v-show="diagnosis.diagnosis_1">
                            <th style="text-align:left; padding-left:0.2rem;">{{diagnosis.diagnosis_1}}</th>
                        </tr>
                        <tr v-show="diagnosis.diagnosis_2">
                            <th style="text-align:left;padding-left:0.2rem;">{{diagnosis.diagnosis_2}}</th>
                        </tr>
                    </thead>
                </x-table>
            </div>
            <div class="margins-top-xs text-left"style='font-size: 16px;font-weight: bold;'>治疗方案</div>
			<hr class='t3X' style='margin-top:1px;height: 1px;width: 100%;background:#000;'/> 
            <div class="margins-top-sm" style="background-color:#eee;">
                <div v-show="treat_plan.new_treat_plan ">
                    <span style="font-weight: bold;">最新指南推荐静脉溶栓治疗方案:</span>
                    <span  style="color:blue">{{treat_plan.new_treat_plan}}</span>
                </div>
                <div v-show="treat_plan.best_dosage">
                    <span style="font-weight: bold;">医生选择系统最优剂量:</span>
                    <span>{{treat_plan.best_dosage}}</span>
                </div>
                 <div v-show="treat_plan.intravascular_therapy">
                    <span style="font-weight: bold;">血管内治疗:</span>
                    <span>{{treat_plan.intravascular_therapy}}</span>
                </div>
                 <div v-show="treat_plan.anticoagulant_therapy">
                    <span style="font-weight: bold;">抗凝治疗:</span>
                    <span>{{treat_plan.anticoagulant_therapy}}</span>
                </div>
				 <div v-show="treat_plan.antithrombotic_therapy">
                    <span style="font-weight: bold;">抗栓治疗:</span>
                    <span>{{treat_plan.antithrombotic_therapy}}</span>
                </div>
                 <div v-show="treat_plan.antiplatelet_therapy">
                    <span style="font-weight: bold;">抗血小板治疗:</span>
                    <span>{{treat_plan.antiplatelet_therapy}}</span>
                </div>
				  <div v-show="treat_plan.follow_up_treatment">
                    <span style="font-weight: bold;">后续治疗:</span>
                    <span>{{treat_plan.follow_up_treatment}}</span>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
	import { XHeader, XTable, LoadMore } from 'vux'
    import  {config} from'../../../../static/js/common.js'
	export default {
		components: {
			XHeader,
			XTable,
			LoadMore

		},
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
                arr:[],
                patient_info:{},
                general_situation:{},
                diagnosis:{},
                treat_plan:{}
			}
		},
		created(){
            this.EmbolectomyAxios();
        },
        methods:{
            EmbolectomyAxios(){
                 let that=this;
                //  let url=config.domain+"outreport/dischargeReport?pid="+config.id
                let url= config.domain+ "outreport/treatReport/3?pid=" +config.id;
                this.$http
                .post(url)
                .then((res)=>{
                    var response =res.data;
                    that.arr=response.data;
                    that.patient_info=response.patient_info;
                    that.general_situation=response.data.general_situation;
                    that.diagnosis=response.data.diagnosis;
                    that.treat_plan=response.data.treat_plan;
                })
            },
        }
	}
</script>

<style>
    @import '../../../../static/css/iconfont.css';
	@import '../../../../static/css/global.css';
	@import '../../../../static/css/app.css';
    @import '../../../../static/css/reports.css';

</style>