<template>
    <div>
        <div class="toast-simple" @click='trigger'>
            <slot></slot>
        </div>
        <section class="toast-container" v-if="toastType">
            <div class="toast" v-bind:class="[visible?'fade-in':'fade-out']">
                <p>{{message}}</p>
            </div>
        </section>
        <section class="toast-container" v-if="alertType">
            <div class="toast" v-bind:class="[visible?'fade-in':'fade-out']">
                <p>{{message}}</p>
                <p class="btn" @click="alertBtn">
                    <span class="btnMsg">{{alertBtnMsg}}</span>
                </p>
            </div>
        </section> 
        <section class="toast-container" v-if="confirmType">
            <div class="toast" v-bind:class="[visible?'fade-in':'fade-out']">
                <p>{{message}}</p>
                <p class="btn">
                    <span class="btnMsg" @click="confirmOk">{{confirmBtnMsgOK}}</span>
                    <i></i>
                    <span class="btnMsg" @click="confirmCancel">{{confirmBtnMsgCancel}}</span>
                </p>
            </div>
        </section>       
    </div>
</template>
<style lang="scss">
    @keyframes fade-in {
        0% {
            opacity: 0;
            transform: scale(0.7);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    @keyframes fade-out {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0.7);
        }
    }
    .toast-container{
        position: absolute;
        left: 0;
        top:0;
        bottom: 0;
        right:0;
        z-index: 2000;
        display: flex;
        justify-content: center;
        align-items: center;
        .fade-in{
            animation-name: fade-in;
            animation-duration: 0.5s;
            animation-fill-mode: both;
        }
        .fade-out{
            animation-name: fade-out;
            animation-duration: 0.5s;
            animation-fill-mode: both;
        }
        .toast{
            min-width: 180px;
            min-height: 60px;
            text-align: center;
            background-color: black;
            color: white;
            border-radius: 13px;
        }
        .btn{
            display: flex;
            justify-content: space-evenly;
            margin: 0;
        }
        .btn:hover{
            cursor:pointer;
        }
        .btn::before{
            content: '';
            position: absolute;
            z-index: 1;
            background-color:#e5e5e5;
            height: 1px;
            left: 0;
            right: 0;
        }
        i{
            border-right: 1px solid #e5e5e5;
        }
        .btnMsg{
            display: inline-block;
            margin: 15px 0;
        }
    }
</style>
<script>
    export default{
        data(){
            return {
                visible: true,
                toastType: false,
                alertType: false,
                confirmType: false
            }
        },
        props: {
            message: {
                type: String,
                default: ''
            },
            alertBtnMsg: {
                type: String,
                default: '确定'
            },
            confirmBtnMsgOK: {
                type: String,
                default: '确定'
            },
            confirmBtnMsgCancel:{
                type: String,
                default: '取消'
            },
            toast:{
                type: Boolean,
                default: false
            },
            alert:{
                type: Boolean,
                default: false
            },
            alertFunc: {
                type: Function,
                default: () => {
                    return {

                    }
                }
            },
            confirm:{
                type: Boolean,
                default: false
            },
            confirmOkFunc:{
                type: Function,
                default: () => {
                    return {

                    }
                }
            },
            confirmCancelFunc:{
                type: Function,
                default: () => {
                    return {

                    }
                }
            }
        },
        methods:{
            trigger(){                
                var that = this;
                if(this.toast){
                        this.toastType = true;
                        setTimeout(() =>{
                            that.visible = false;
                            setTimeout(()=>{
                               that.toastType = false;
                               that.visible = true;
                           },1000)
                    },800)
                }else if(this.alert){
                    this.alertType = true;
                }else if(this.confirm){
                    this.confirmType = true;
                }



            },
            alertBtn(){
                this.visible = false;
                var that = this;
                this.alertFunc();
                setTimeout(()=>{
                        that.alertType = false;
                        that.visible = true;
                },1000)
            },
            confirmOk(){
                this.visible = false;
                var that = this;
                this.confirmOkFunc();
                setTimeout(()=>{
                        that.confirmType = false;
                        that.visible = true;
                },1000)
            },
            confirmCancel(){
                this.visible = false;
                this.confirmCancelFunc();
                var that = this;
                setTimeout(()=>{
                        that.confirmType = false;
                        that.visible = true;
                },1000)
            }
        }
    }
</script>
