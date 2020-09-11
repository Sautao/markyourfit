<template>
  <div class="header">
      <div class="title">训练记录</div>
      <div>{{count}}个动作</div>
      <div>一共{{groups}}组</div>
      <div class="calendar">{{today}}</div>
  </div>
</template>

<script>
export default {
    name:'HomeHeader',
    data() {
        return {          
            count:0,
            groups:0
        }
    },
    computed: {
        today:function(){
            let date = new Date()
            return date.getMonth()+'月'+date.getDay()+'日'
        }
    },
}
</script>

<style lang='less' scoped>
    @import '~styles/color.less';
    .header{
        background-color: @bgcolor;
        position: relative;
        line-height: 2rem;
        padding: 0 1rem;
        font-size: 1rem;
        .title{
            font-size: 1.2rem;
            height: 2rem;
            color: #fff;
            text-align: center;
        }
        .calendar{
            font-size: 1rem;
            position: absolute;
            top: 2rem;
            right: 1rem;
        }
    }
</style>