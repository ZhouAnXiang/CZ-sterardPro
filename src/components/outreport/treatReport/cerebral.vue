<template>
	<div class="discharg-report" id="pdf-wrap">
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
							<td>{{patient_info.name }}</td>
							<td>{{patient_info.sex }}</td>
                            <td>{{patient_info.age }}</td>
                            <td>{{patient_info.onset_time }}</td>
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
            <div class="margins-top-xs text-left" style='font-size: 16px;font-weight: bold;'>诊断</div>
			<hr class='t3X' style='margin-top:1px;height: 1px;width: 100%;background:#000;'/>
            <div class="margins-top-xs">
                <x-table full-bordered style="background-color:#fff;">
                    <thead v-bind:style="{background:'#eee'}">
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
            <div class="margins-top-xs text-left"style='font-size: 16px;font-weight: bold;' >卒中风险</div>
			<hr class='t3X' style='margin-top:1px;height: 1px;width: 100%;background:#000;'/>
            <div class="margins-top-sm">
                <x-table :cell-bordered="false" style="background-color:#fff;">
                    <thead>
                        <tr style="border:none">
                            <th style="width:20%;line-height:24px;text-align:left;">预测TIA一年后的卒中风险<br>ABCD2-1评分：<span>{{risk_of_stroke.ABCD2_I.strokeScore}}</span></th>
                            <th style="width:80%;">
                                <div class="Bar">
                                    <div v-bind:style="{width: strokeRiskVal+'%'}">
                                    </div> 
                                </div>
								<span class="fl">{{strokeRiskVal}}%</span>
								<span class="fr"> {{strokeABCD}}</span><span class="fr">95%Cl &nbsp;&nbsp;</span>
                            </th>
                        </tr>
                        <tr >
                            <td style="width:20%;line-height:24px;text-align:left;">复发风险<br>ESRS评分：<span>{{risk_of_stroke.ESRS.strokeScore}}</span></td>
                            <td style="width:80%">
                                <div class="Bars">
                                    <div v-bind:style="{width: strokeESRSRiskVal+'%'}">
                                        
                                    </div>
                                </div>
								<span class="fl">{{strokeESRSRiskVal}}%</span>
								<span class="fr"> {{strokeESRS}}</span><span class="fr">95%Cl &nbsp;&nbsp;</span>
                            </td>
                        </tr>
                    </thead>
                </x-table>
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
				arr:[],
				patient_info:{},
				diagnosis:{},
				general_situation:{},
				treat_plan:{},
				risk_of_stroke:{},
			}
		},
		created(){
			this.CerebralAxios();
			
		},
		methods(){
		
		},
		 ready () {
		 },
		methods:{
		 	CerebralAxios(){
                 let that=this;
				//  let url=config.domain+"outreport/dischargeReport?pid="+config.id
				let url= config.domain+ "outreport/treatReport/1?pid=" +config.id;
                this.$http
               
                .post(url)
                .then((res)=>{
                    var response =res.data;
					that.arr=response.data;
					that.patient_info=response.data.patient_info;
					that.diagnosis=response.data.diagnosis;
					that.general_situation=response.data.general_situation;
					that.treat_plan=response.data.treat_plan;
					that.risk_of_stroke=response.data.risk_of_stroke;
					this.$nextTick(function () {
						// this.CerebralAxiosPost('CerebralAxiosPost');
					})
                })
			},
			CerebralAxiosPost(){
				var body =document.getElementsByTagName("body")[0].innerHTML;
				// console.log(document.body.innerHTML);
		

				var self=this;
				var url =config.Emaildomain+"util/FileUpload/sendMail?pid="+config.id;
				// var url="http://pro.dothealth.cn/util/FileUpload/sendMail"
				//"http://192.168.220.55:8080/dotpro/util/FileUpload/sendMail"

				
				var params = new URLSearchParams();
				params.append("email","125039488@qq.com");
				params.append("subject","qwerf");
				params.append("htmlCode",body);
				
				this.$http({
				method: 'post',
				url:url,
				data:params
				})
				.then((res)=>{
						console.log("ok")
						// WebViewJavascriptBridge.gotonext();
				},
				(error)=>{
				console.log(error);
				})
		}
	},
	computed:{
		//卒中风险
		  strokeRiskVal:function () {
               let riskVal= this.arr.risk_of_stroke.ABCD2_I.riskVal;
                if(riskVal&&riskVal.length>=2){
                    riskVal=riskVal;
                }else{
                    riskVal= 0;
                }
                return riskVal
            },
            strokeESRSRiskVal:function () {
               let ESRSRiskVal= this.arr.risk_of_stroke.ESRS.riskVal;
                if(ESRSRiskVal&&ESRSRiskVal.length>=2){
                    ESRSRiskVal=ESRSRiskVal;
                }else{
                    ESRSRiskVal= 0;
                }
                return ESRSRiskVal
            },
            strokeABCD:function () {
               let ABCD= this.arr.risk_of_stroke.ABCD2_I.sectionVal;
                let arr =ABCD.split(":");
                if(arr&&arr.length>=2){
                    ABCD=arr[1];
                }else{
                    ABCD= 0;
                }
                return ABCD
            },
            strokeESRS:function () {
               let ESRS= this.arr.risk_of_stroke.ESRS.sectionVal;
                let arr =ESRS.split(":");
                if(arr&&arr.length>=2){
                    ESRS=arr[1];
                }else{
                    ESRS= 0;
                }
                return ESRS
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