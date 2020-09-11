<template>
  <div class="todoListWraper" ref="listWrapper">
      <div class="todoList" >
          <div class="item" v-for="(item, index) in todoList" :key="index">
            <div class="itemTitle">{{item.title}}
                <button class="iconfont deleteTodo" @click="deleteTodo(todoList,index)">&#xe84a;</button>
            </div>
            <form action="submit" class="todoDetail" v-for="(detail, index) in item.detailList" :key="index">
                <div class="groups">
                    <input type="text" class="input-text" name="times" id="times" v-model="detail.times">
                    <label for="times" class="input-lable">次</label>
                    <input type="text" class="input-text" name="weight" id="weight" v-model="detail.weight">
                    <label for="times" class="input-lable">kg</label>
                    <input type="checkbox"  v-model="detail.finish">
                    <input type="button" class="input-delete" value="删除" @click="deleteGroup(item.detailList,index)">
                </div>
            </form>
            <input type="button" class="btn-addGroup" value="添加一组" @click="addGroups(item.detailList)">
          </div>
          
          <div class="iconfont finish" >&#xe848;</div>
      </div>
      
    
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
    name:'HomeList',
    data() {
        return {
            todoList:[
                {
                    title:'杠铃卧推',
                    detailList:[
                        {
                            times:'',
                            weight:'',
                            finish:false
                        }
                    ]
                },
                {
                    title:'哑铃卧推',
                    detailList:[
                        {
                            times:5,
                            weight:10,
                            finish:true
                        }
                    ]
                },
                {
                    title:'哑铃飞鸟',
                    detailList:[
                        {
                            times:'',
                            weight:'',
                            finish:false
                        }
                    ]
                },
                {
                    title:'哑铃飞鸟',
                    detailList:[
                        {
                            times:'',
                            weight:'',
                            finish:false
                        }
                    ]
                },
                {
                    title:'哑铃飞鸟',
                    detailList:[
                        {
                            times:'',
                            weight:'',
                            finish:false
                        }
                    ]
                },
                {
                    title:'哑铃飞鸟',
                    detailList:[
                        {
                            times:'',
                            weight:'',
                            finish:false
                        }
                    ]
                },
                {
                    title:'哑铃飞鸟',
                    detailList:[
                        {
                            times:'',
                            weight:'',
                            finish:false
                        }
                    ]
                },
                {
                    title:'哑铃飞鸟',
                    detailList:[
                        {
                            times:'',
                            weight:'',
                            finish:false
                        }
                    ]
                },
                {
                    title:'哑铃飞鸟',
                    detailList:[
                        {
                            times:'',
                            weight:'',
                            finish:false
                        }
                    ]
                },
                {
                    title:'哑铃飞鸟',
                    detailList:[
                        {
                            times:'',
                            weight:'',
                            finish:false
                        }
                    ]
                }
            ],
        }
    },
    methods: {
        addGroups(dtList){
            const newGroup={
                times:'',
                weight:'',
                finish:false
            }
            dtList.push(newGroup)
        },
        deleteGroup(dtList,index){
            dtList.pop(index)
        },
        deleteTodo(todoList,index){
            console.log(todoList);
            todoList.pop(index)
        }
    },
    mounted() {
        this.scroll=new Bscroll(this.$refs.listWrapper,{})
    },
    updated() {
        this.scroll=new Bscroll(this.$refs.listWrapper,{})
    },
}
</script>

<style lang="less" scoped>
    @import '~styles/color';
    .todoListWraper{
        // width: 100%;
        // height: 100%; 
        overflow: hidden;
        position: absolute;
        top: 6.5rem;
        left: 0;
        right: 0;
        bottom: 3.5rem;
        .item{
            background: @itembgcolor;
            -webkit-appearance: checkbox;
            font-size: 1rem;
            margin: 0 1rem 1rem 1rem;
            border-radius: .2rem;
        }
        .itemTitle{
            font-size: 1rem;
            padding: 0 .5rem;
            line-height: 1.5rem;
            margin-bottom: 1rem;
            position: relative;
            .deleteTodo{
                font-size: 1rem;
                position: absolute;
                right: 1rem;
            }
        }
        .groups{
            display: flex;
            width: 100%; 
            height: 2rem;
            line-height: 2rem;
            padding: 0 .5rem;
            .input-text{
                border-radius: .3rem;
                width: 4rem;
                height: 1rem;
            }
            .input-lable{
                margin: 0 2rem 0 .2rem;
            }
            .input-delete{
                line-height: .5rem;
                margin: auto auto;
                height: 1rem;
                color: rgb(red, green, blue);
            }
            input{
                margin: auto 0;
            }
        }
        .btn-addGroup{
            font-size: .5rem;
            height: 1rem;
            line-height: .5rem;
            margin: .5rem .5rem;
        }
        .finish{
            text-align: center;
            font-size: 2rem;
            color: red;
        }
    }    
</style>